import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setAuthUserName} from "../stores/userSlice.js";

function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authUsername = useSelector((state) => state.authUsername.authUsername);
    const basket = useSelector((state) => state.basket.basket);
    const signOut = () => {
        localStorage.removeItem("user");
        dispatch(setAuthUserName(""));
        navigate("/login");
    };

    return (
        <Container>
            <Inner>
                <SearchBar>
                    <input type="text" placeholder="Search..." />
                </SearchBar>
                <RightContainer>
                    <NavButton
                        onClick={signOut}
                    >
                        <p>Hello,</p>
                        <p>{authUsername ?? "Guest"}</p>
                    </NavButton>
                    <BasketButton onClick={() => navigate("/")}>
                        <img src="./basket-icon.png" alt="" />
                        <p>{basket.length}</p>
                    </BasketButton>
                </RightContainer>
            </Inner>
        </Container>
    );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;


const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0 15px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;

    &::placeholder {
      padding-left: 5px;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 50%;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;

  p {
    &:nth-child(1) {
      font-size: 12px;
    }

    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;

  img {
    width: 30px;
    margin-right: 10px;
  }

  p {
    color: #fff;
    font-weight: 500;
  }
`;
export default Navbar;