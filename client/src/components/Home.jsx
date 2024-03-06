import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

function Home() {
  const storedProducts = JSON.parse(localStorage.getItem("products"));
  const searchQuery = useSelector((state) => state.searchQuery.searchQuery);
  const filterByCategory = useSelector(
    (state) => state.category.filterByCategory,
  );
  const authUsername = useSelector((state) => state.authUsername.authUsername);

  const filteredProducts = storedProducts.data
    ? storedProducts.data.filter((product) => {
        return (
          (filterByCategory === "All" ||
            product.category === filterByCategory) &&
          (product.title.longTitle
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
            product.title.shortTitle
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))
        );
      })
    : storedProducts.filter((product) => {
        return (
          (filterByCategory === "All" ||
            product.category === filterByCategory) &&
          (product.title.longTitle
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
            product.title.shortTitle
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))
        );
      });

  const likedProducts = useSelector((state) => state.products.likedProducts);
  const recommendations = storedProducts.data
    ? storedProducts.data.filter((product) =>
        likedProducts.some(
          (likedProduct) => likedProduct.category === product.category,
        ),
      )
    : storedProducts.filter((product) =>
        likedProducts.some(
          (likedProduct) => likedProduct.category === product.category,
        ),
      );

  return (
    <Container>
      <Navbar />
      {recommendations && recommendations.length !== 0 && (
        <Recommendation>
          <h2>Recommended for You!!! </h2>
          <ul>
            {recommendations.map((recommendation) => (
              <li key={recommendation.id}>{recommendation.title.shortTitle}</li>
            ))}
          </ul>
        </Recommendation>
      )}
      <div
        style={{
          fontWeight: 700,
          fontSize: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Hello, {authUsername}
      </div>
      <Main>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Main>
    </Container>
  );
}

const Recommendation = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  padding: 20px;
  box-sizing: border-box;
`;

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
    padding: 10px 0 0 0;
  }
`;
export default Home;
