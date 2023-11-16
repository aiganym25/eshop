import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Navbar from "./Navbar";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../stores/productsSlices.js";

function Home() {
    const storedProducts = localStorage.getItem("products");
    const products = storedProducts ? JSON.parse(storedProducts) : null;
    return (
        <Container>
            <Navbar />
            <Main>
                {products &&
                    products?.data.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                        />
                    ))}
            </Main>
        </Container>
    );
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  //max-width: 1400px;
  margin: auto;

`;


const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  margin-top: 60px;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: 0;
    padding: 10px 0 0 0 ;
  }
`;
export default Home;