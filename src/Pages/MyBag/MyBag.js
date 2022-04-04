import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import SubEvent from './SubEvent/SubEvent';
import OrderProduct from '../../Components/OrderProduct/OrderProduct';
import OrderSummary from './OrderSummary/OrderSummary';
import Button from '../../Components/Button/Button';

import './MyBag.scss';

const MyBag = () => {
  const navigate = useNavigate();
  const [orderProducts, setOrderProducts] = useState([]);

  const getData = async () => {
    const data = await (await fetch('/data/orderProducts.json')).json();

    setOrderProducts(data);
  };

  useEffect(() => getData(), []);

  const subTotal =
    orderProducts.length > 0
      ? orderProducts
          .map(product => product.price)
          .reduce((a, b) => parseInt(a) + parseInt(b))
      : 0;
  const shippingCost = 40.95;
  const total = (subTotal + shippingCost).toFixed(2);

  const [slideCount, setSlideCount] = useState(0);

  const addSlideCount = () => {
    slideCount === 1
      ? setSlideCount(slideCount)
      : setSlideCount(slideCount + 1);
  };

  const subTractSlideCount = () => {
    slideCount === -1
      ? setSlideCount(slideCount)
      : setSlideCount(slideCount - 1);
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="myBag">
      <div className="event">
        <div className="subEvent left">
          <img src="/images/promotion/creditcard.png" alt="banner" />
          <div className="description">
            <h2>Earn a $100 Statement Credit</h2>
            <p>
              after you spend $100 in your first 3 months with a new Kidsney®
              Visa® Card.
            </p>
          </div>
        </div>

        <div className="subEvent right">
          <button
            className="leftBtn"
            onClick={addSlideCount}
            disabled={slideCount >= 1}
          >
            <i className="left fas fa-angle-left" />
          </button>
          <SubEvent slideCount={slideCount} />
          <button
            className="rightBtn"
            onClick={subTractSlideCount}
            disabled={slideCount <= -1}
          >
            <i className="left fas fa-angle-right" />
          </button>
        </div>
      </div>

      {orderProducts.length > 0 ? (
        <main>
          <h2 className="title">My Bag ({orderProducts.length})</h2>
          <div className="contents">
            <div className="orderProducts">
              {orderProducts.map(orderProduct => (
                <OrderProduct
                  key={orderProduct.id}
                  orderProduct={orderProduct}
                />
              ))}
            </div>
            <OrderSummary subTotal={subTotal} total={total} />
          </div>
        </main>
      ) : (
        <main className="empty">
          <i class="fas fa-shopping-bag" />
          <h2>Your Bag is Empty!</h2>
          <p>Not seeing items you've added?</p>
          <p className="signIn">Sign in</p>
          <Button text="Continue Shopping" functionType={goToMain} />
        </main>
      )}
    </div>
  );
};

export default MyBag;
