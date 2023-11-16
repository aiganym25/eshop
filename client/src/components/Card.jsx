import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addBasket} from "../stores/backetSlice.js";
import { FaHeart } from 'react-icons/fa';
import {useState} from "react";
import {addLikedProducts, removeFromLikedProducts} from "../stores/productsSlices.js";
// import Rating from "@material-ui/lab/Rating";

function Card({product}) {
    const dispatch = useDispatch();
    const { likedProducts } = useSelector(state => state.products);

    const isProductLiked = likedProducts.some(productL => productL.id === product.id);

    const addLikeToProduct = () => {
        if (!isProductLiked) {
            dispatch(addLikedProducts(product));
        } else {
            dispatch(removeFromLikedProducts(product));
        }
    };

    const addToBasket = (product) => {
         dispatch(addBasket(product))
    };
    return (
        <Container>
            <FaHeart
                onClick={addLikeToProduct}
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    color: isProductLiked ? 'red' : 'dimgrey',
                    cursor: 'pointer',
                    width: '30px',
                    height: '30px',
                    margin: '10px',
                }}
            />
            <Image>
                <img src={product.url} alt="" />
            </Image>
            <Description>
                <h5>{product.title.shortTitle}</h5>
                <h2>{product.title.longTitle}</h2>
                <p> {product.price.cost} tenge</p>

                <button onClick={() => addToBasket(product)}>Add to Cart</button>
            </Description>
        </Container>
    );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  cursor: pointer;
  //z-index: 10;
`;
const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 18px;
    font-weight: 600;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #6fa9dc;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
  }
`;
export default Card;