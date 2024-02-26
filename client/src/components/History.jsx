import Navbar from "./Navbar.jsx";
import CurrencyFormat from "react-currency-format";
import styled from "styled-components";
import { useSelector } from "react-redux";

const History = () => {
  const boughtProducts = useSelector((state) => state.products.boughtProducts);
  console.log(boughtProducts);

  return (
    <Container>
      <Navbar />
      <Main>
        <ShoppingCart>
          <h2>History of bought products</h2>
          {boughtProducts.length === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              There are no bought products yet
            </div>
          ) : (
            boughtProducts.map((product) => (
              <Product>
                <Image>
                  <img src={product.url} alt="" />
                </Image>
                <Description>
                  <h4>{product.title.longTitle}</h4>
                </Description>
              </Product>
            ))
          )}
        </ShoppingCart>
      </Main>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: rgb(234, 237, 237);
`;
const Main = styled.div`
  display: flex;
  padding: 15px;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ShoppingCart = styled.div`
  padding: 30px;
  background-color: #fff;
  flex: 1;

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
  padding-top: 20px;
`;

const Image = styled.div`
  flex: 0.15;
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
