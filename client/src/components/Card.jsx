import styled from "styled-components";
// import Rating from "@material-ui/lab/Rating";

function Card({ id, image, title, price, rating }) {
    const addToBasket = (e) => {
        e.preventDefault();
    };

    return (
        <Container>
            <Image>
                <img src={image} alt="" />
            </Image>
            <Description>
                <h5>{title.shortTitle}</h5>
                <p>₹ {price.cost}</p>

                <button onClick={addToBasket}>Add to Cart</button>
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