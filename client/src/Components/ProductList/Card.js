import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/ProductAction';

const Card = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productGetList = useSelector((state) => state.product.productGetList);

  const renderCards = () => {
    return productGetList.map((val,index) => {
      return (
        <div key={index} style={styles.cardContainer}>
          <img src={val.image} alt='main pic' style={styles.image} />
          <div style={styles.title}>
            {val.title}
          </div>
          <div style={styles.subtitle}>
            {val.subtitle}
          </div>
          <div style={styles.priceContainer}>
            <div style={styles.price}>
              {val.price}
            </div>
            <div style={styles.discount}>
              {val.discount}
            </div>
            <div style={styles.discPrice}>
              {val.discPrice}
            </div>
          </div>
          <div style={styles.joinBtn}>
            Join Now
          </div>
        </div>
      );
    });
  };

  return (
    <div style={styles.wrapper}>
      {renderCards()}
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardContainer: {
    border: '1px solid #8F8F8F',
    width: '20%',
    height: '25rem',
    borderRadius: '15px',
    margin: '1.5rem',
  },
  image: {
    borderRadius: '15px 15px 0 0',
    width: '100%',
    height: '65%',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '600',
    marginTop: '0.5em',
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '0.9em',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  price: {
    margin: '0.7em 0.9em',
    fontSize: '0.7em',
    padding: '0.4em 0em',
  },
  discount: {
    color: 'white',
    margin: '0.7em 0.9em',
    fontSize: '0.7em',
    fontWeight: '600',
    borderRadius: '0.5em',
    padding: '0.4em',
    backgroundColor: '#464646',
  },
  discPrice: {
    margin: '0.7em 0.9em',
    fontSize: '0.7em',
    padding: '0.4em 0em',
  },
  joinBtn: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0.6em 1em',
    color: 'white',
    fontWeight: '600',
    borderRadius: '0.75em',
    backgroundColor: '#ff4500',
  },
};

export default Card;
