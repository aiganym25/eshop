import Navbar from "./Navbar.jsx";
import CurrencyFormat from "react-currency-format";
import styled from "styled-components";
import {useSelector} from "react-redux";

const History = () => {

    const boughtProducts = useSelector(state => state.products.boughtProducts);
    console.log(boughtProducts);

    return(<Container>
        <Navbar />
        <Main>
            <ShoppingCart>
                <h2>History of bought products</h2>
                {boughtProducts.map((product) => (
                    <Product>
                        <Image>
                            <img src={product.url} alt="" />
                        </Image>
                        <Description>
                            <h4>{product.title.longTitle}</h4>


                        </Description>
                    </Product>
                ))}
            </ShoppingCart>

        </Main>
    </Container>)
}
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  margin: auto;
  background-color: rgb(234, 237, 237);
  border: 1px solid red;
  position: relative;
`;
const Main = styled.div`
  display: flex;
  padding: 15px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ShoppingCart = styled.div`
  padding: 15px;
  background-color: #fff;
  flex: 0.7;

  @media only screen and (max-width: 1200px) {
    flex: none;
  }

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 0.3;
  img {
    width: 100%;
  }
`;
const Description = styled.div`
  flex: 0.7;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default History;