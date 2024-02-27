import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../stores/backetSlice.js";
import { RiEdit2Fill } from "react-icons/ri";

import {
  addLikedProducts,
  removeFromLikedProducts,
  setProducts,
} from "../stores/productsSlices.js";
import { Box, Modal, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ProfileCard({ product, setIsChanged }) {
  console.log(product);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    longTitle: product.title.longTitle,
    shortTitle: product.title.shortTitle,
    price: product.price.cost,
  });

  const editProductCard = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLongTitleChange = (e) => {
    setEditedProduct({ ...editedProduct, longTitle: e.target.value });
  };
  const handleShortTitleChange = (e) => {
    setEditedProduct({ ...editedProduct, shortTitle: e.target.value });
  };

  const handlePriceChange = (e) => {
    setEditedProduct({ ...editedProduct, price: e.target.value });
  };
  const handleCategoryChange = (e) => {
    setEditedProduct({ ...editedProduct, category: e.target.value });
  };

  const saveChanges = () => {
    // Prepare the data to be sent in the request body
    const updatedProductData = {
      id: product.id,
      updatedProductData: {
        title: {
          longTitle: editedProduct.longTitle,
          shortTitle: editedProduct.shortTitle,
        },
        price: { cost: editedProduct.price },
      },
    };

    // Make a POST request to the /editProduct endpoint
    fetch("http://localhost:3003/editProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProductData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update product");
        }
        return response.json();
      })
      .then((updatedProduct) => {
        // Handle success
        console.log("Product updated successfully:", updatedProduct);
        // const productsData = fetch("http://localhost:3003/getProducts");
        dispatch(setProducts(updatedProduct));
        localStorage.setItem("products", JSON.stringify(updatedProduct));
        setIsChanged(true);
        handleClose(); // Close the modal after saving changes
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating product:", error);
      });
  };

  return (
    <Container>
      <RiEdit2Fill
        onClick={editProductCard}
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          color: "dimgrey",
          cursor: "pointer",
          width: "30px",
          height: "30px",
          margin: "10px",
        }}
      />
      <Image>
        <img src={product.url} alt="" />
      </Image>
      <Description>
        <h5>{product.title.shortTitle}</h5>
        <h2>{product.title.longTitle}</h2>
        <p> {product.price.cost} tenge</p>
      </Description>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            backgroundColor: "white",
            border: "5px solid #6fa9dc",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div style={{ padding: "20px" }}>
            <h2>Edit Product</h2>

            <form>
              <input
                type="text"
                value={editedProduct.longTitle}
                onChange={handleLongTitleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "20px",
                  marginTop: "20px",
                  border: "1px solid #000",
                }}
              />
              <input
                type="text"
                value={editedProduct.shortTitle}
                onChange={handleShortTitleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "20px",
                  border: "1px solid #000",
                }}
              />
              <input
                type="number"
                value={editedProduct.price}
                onChange={handlePriceChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #000",
                }}
              />
            </form>
            {/*<div*/}
            {/*  style={{*/}
            {/*    display: "inline-block",*/}
            {/*    height: "35px",*/}
            {/*    width: "100%",*/}
            {/*    border: "none",*/}
            {/*    borderRadius: "5px 0 0 5px",*/}
            {/*    cursor: "pointer",*/}
            {/*    marginTop: "20px",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <select*/}
            {/*    style={{*/}
            {/*      width: "100%",*/}
            {/*      padding: "8px",*/}
            {/*      border: "1px solid #000",*/}
            {/*      borderRadius: "0 5px 5px 0",*/}
            {/*      cursor: "pointer",*/}
            {/*    }}*/}
            {/*    onChange={handleCategoryChange}*/}
            {/*    value={product.category}*/}
            {/*  >*/}
            {/*    {categories.map((category) => (*/}
            {/*      <option*/}
            {/*        key={category}*/}
            {/*        value={category}*/}
            {/*        style={{ cursor: "pointer" }}*/}
            {/*      >*/}
            {/*        {category}*/}
            {/*      </option>*/}
            {/*    ))}*/}
            {/*  </select>*/}
            {/*</div>*/}
          </div>

          <button
            style={{
              width: "100%",
              height: "33px",
              backgroundColor: " #6fa9dc",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: 700,
            }}
            onClick={saveChanges}
          >
            Save Changes
          </button>
        </Box>
      </Modal>
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
export default ProfileCard;
