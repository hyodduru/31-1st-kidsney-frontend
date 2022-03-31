import React, { useState, useEffect } from 'react';

import './RecoProductList.scss';
import Product from '../../Components/Product/Product';

const RecoProductList = () => {
  const [products, setProducts] = useState();
  const [direction, setDirection] = useState();

  const getData = async () => {
    const data = await (await fetch('/data/productData.json')).json();
    setProducts(data);
  };

  useEffect(() => getData(), []);

  const handleDirection = e => {
    const { dir: className } = e.target;
    setDirection(className);
    //console.log(dir);
  };

  return (
    <div className="RecoProductList">
      <h2>You May Also Like</h2>
      <div className="list">
        <button onClick={handleDirection}>
          <i className="fas fa-angle-left" />
        </button>
        <div className="products">
          {products &&
            products.map(product => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  direction={direction}
                />
              );
            })}
        </div>
        <button onClick={handleDirection}>
          <i className="fas fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

export default RecoProductList;
