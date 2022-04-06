import React, { useState, useEffect } from 'react';

import Button from '../../../Components/Button/Button';
import { BASE_URL, Token } from '../../../config';

import './EditModal.scss';

const EditModal = ({ editedProduct, setIsClosed, setOrderProducts }) => {
  const { cart_id, product, total_price } = editedProduct;
  const { id, images, name, price, quantity, size, stock } = product;

  const [editedSize, setEditedSize] = useState({ sizeId: '', sizeName: '' });
  const [editedQuantity, setEditedQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState('0');

  let S = 0;
  let M = 10;
  let L = 10;
  let F = 0;

  if (stock) {
    [{ S }, { M }, { L }, { F }] = stock;
  }

  const sizeList = [
    { id: 0, value: 'S', name: 'S', count: S },
    { id: 1, value: 'M', name: 'M', count: M },
    { id: 2, value: 'L', name: 'L', count: L },
    { id: 3, value: 'F', name: 'FREE', count: F },
  ];

  const editOrder = () => {
    if (size.sizeId.length === 0) {
      return;
    } else if (sizeList[size.sizeId].count < quantity) {
      alert(
        `죄송하지만 현재 선택하신 사이즈의 상품 재고수량은 ${
          sizeList[size.sizeId].count
        }개 입니다.`
      );
      return;
    } else {
      fetch('API 주소', {
        method: 'post',
        headers: {
          Authorization: Token,
        },
        body: JSON.stringify({
          size: editedSize.sizeName,
          quantity: editedQuantity,
        }),
      }).then(res => {
        if (res.ok) {
          alert('상품 수정이 완료되었습니다.');
          fetch(`${BASE_URL}/carts`, {
            headers: {
              Authorization: Token,
            },
          })
            .then(res => res.json())
            .then(data => setOrderProducts(data.carts));
        }
      });
    }
  };

  const selectImg = e => {
    setSelectedImg(e.target.id);
  };

  const handleSize = e => {
    const { value } = e.target;
    const { id } = e.target;

    setEditedSize({ ...size, sizeName: value, sizeId: id });
  };

  const plusQuantity = () => {
    setEditedQuantity(quantity => quantity + 1);
  };

  const minusQuantity = () => {
    setEditedQuantity(quantity <= 0 ? 0 : quantity - 1);
  };

  const closeModal = () => {
    setIsClosed(true);
  };
  return (
    editedProduct && (
      <div className="editModal">
        <div className="modalBox">
          <button className="closeBtn" onClick={closeModal}>
            <i className="fas fa-times" />
          </button>
          <h2>Edit Item</h2>
          <main>
            <div className="imgContainer">
              <img className="mainImg" src={images[selectedImg]} alt="main" />
              <div className="thumnails">
                {images.map((img, i) => {
                  return (
                    <img
                      key={i}
                      id={i}
                      className="thumnail"
                      src={img}
                      alt="thumnail"
                      onClick={selectImg}
                    />
                  );
                })}
              </div>
            </div>
            <div className="description">
              <h3>{name}</h3>
              <h3 className="price">${price}</h3>
              <div className="sizeOptions">
                <h3> Size </h3>
                {sizeList.map(({ id, value, name, count }) => {
                  return (
                    <label
                      key={id}
                      className={
                        editedSize.sizeName === value ? 'size clicked' : 'size'
                      }
                    >
                      <input
                        key={id}
                        id={id}
                        type="checkbox"
                        name="sizeOption"
                        value={value}
                        className={count === 0 ? 'disabled' : null}
                        disabled={count === 0}
                        onClick={handleSize}
                      />
                      <span>{name}</span>
                    </label>
                  );
                })}

                <div
                  className={
                    editedSize.sizeName.length > 0
                      ? 'errorMsg'
                      : 'errorMsg show'
                  }
                >
                  사이즈를 선택해주세요.
                </div>
              </div>
              <div className="quantity">
                <h3>Quantity</h3>
                <div className="countBtns">
                  <button onClick={minusQuantity}>
                    <i className="fas fa-minus" />
                  </button>
                  {editedQuantity}
                  <button onClick={plusQuantity}>
                    <i className="fas fa-plus" />
                  </button>
                </div>
              </div>

              <div className="updateBtn">
                <Button text="update" functionType={editOrder} />
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  );
};

export default EditModal;
