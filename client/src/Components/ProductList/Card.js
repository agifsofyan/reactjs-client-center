import React, { useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/ProductAction';

const Card = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.product.productList);
  const loading = useSelector((state) => state.product.loading);

  const list = productList.slice(0,4);

  const renderCards = () => {
    return list.map((val,index) => {
      return (
        <React.Fragment>
          {
            loading
            ?
            <Skeleton variant="rect" style={{
              width: '20%',
              height: '25rem',
              borderRadius: '15px',
              margin: '1.5rem',
            }}/>
            :
            <div key={index} style={styles.cardContainer}>
              <img src={val.image_url[0]} alt='card pic' style={styles.image} />
              <div style={styles.title}>
                {val.headline}
              </div>
              <div style={styles.subtitle}>
                {val.subheadline}
              </div>
              <div style={styles.priceContainer}>
                <div style={styles.price}>
                  Rp. {val.price}
                </div>
                <div style={styles.discount}>
                  {/* {val.discount} */}
                  Hemat 80%
                </div>
                <div style={styles.discPrice}>
                  Rp. {val.sale_price}
                </div>
              </div>
              <a href={`/product-detail?slug=${val.slug}`} key={val.id} style={{textDecoration:'none'}}>
                <div style={styles.joinBtn}>
                    Join Now
                </div>
              </a>
            </div>
          }
        </React.Fragment>
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
    textDecoration: 'line-through',
    textDecorationColor: 'red',
  },
  discount: {
    color: 'white',
    margin: '0.7em 0.9em',
    fontSize: '0.7em',
    fontWeight: '600',
    borderRadius: '0.75em',
    padding: '0.4em',
    backgroundColor: '#464646',
  },
  discPrice: {
    margin: '0.7em 0.9em',
    fontSize: '0.7em',
    padding: '0.4em 0em',
  },
  joinBtn: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    margin: '0.6em 1em',
    color: 'white',
    fontWeight: '600',
    borderRadius: '0.5em',
    backgroundColor: '#ff4500',
    boxShadow: '0 0 5px #ff4500',
  },
};

export default Card;
