import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addBasket} from "../stores/backetSlice.js";
// import Rating from "@material-ui/lab/Rating";

function Card({product}) {

    const dispatch = useDispatch();


    const addToBasket = (product) => {
         dispatch(addBasket(product))
    };
    return (
        <Container>
            <Image>
                <img src={product.url} alt="" />
            </Image>
            <Description>
                <h5>{product.title.shortTitle}</h5>
                <p> {product.price.cost} tenge</p>

                <button onClick={() => addToBasket(product)}>Add to Cart</button>
            </Description>
        </Container>
    );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

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
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #50a3ec;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
  }
`;
export default Card;