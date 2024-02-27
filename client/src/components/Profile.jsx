import Navbar from "./Navbar.jsx";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard.jsx";
import axios from "axios";
import { setProducts } from "../stores/productsSlices.js";
import { useDispatch } from "react-redux";

const Profile = () => {
  const storedProducts = JSON.parse(localStorage.getItem("products"));
  const dispatch = useDispatch();
  const [isChanged, setIsChanged] = useState(false);
  console.log("storedProducts", storedProducts);

  // useEffect(async () => {
  //   const productsData = await axios.get("http://localhost:3003/getProducts");
  //   dispatch(setProducts(productsData));
  //   localStorage.setItem("products", JSON.stringify(productsData));
  // }, [setIsChanged, isChanged]);

  return (
    <Container>
      <Navbar />
      <h1
        style={{
          marginLeft: "40px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        My products
      </h1>
      <Main>
        {storedProducts.data &&
          storedProducts.data.map((product) => (
            <ProfileCard
              key={product.id}
              product={product}
              setIsChanged={setIsChanged}
            />
          ))}
        {Array.isArray(storedProducts) &&
          storedProducts.map((product) => (
            <ProfileCard
              key={product.id}
              product={product}
              setIsChanged={setIsChanged}
            />
          ))}
      </Main>
    </Container>
  );
};
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
  grid-template-columns: repeat(5, 280px);
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
    padding: 10px 0 0 0;
  }
`;

export default Profile;
