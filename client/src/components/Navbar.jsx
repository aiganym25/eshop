import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setAuthUserName} from "../stores/userSlice.js";
import {setProducts} from "../stores/productsSlices.js";
import {setSearchQuery} from "../stores/searchQuerySlice.js";
import {setCategories, setFilterByCategory} from "../stores/categorySlice.js";
import { FaUser } from 'react-icons/fa';
function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authUsername = useSelector((state) => state.authUsername.authUsername);
    const basket = useSelector((state) => state.basket.basket);
    const filterByCategory = useSelector(state => state.category.filterByCategory);
    // const categories = useSelector(state => state.category.categories);
    const products = JSON.parse(localStorage.getItem("products"));

    const categories = ['All', ...new Set(products.data.map(product => product.category))]

    const [showOptions, setShowOptions] = useState(false);

    const handleGoToHistory = () => {
        navigate("/history");
    };

    // Function to toggle the visibility of options
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };
    const onSearchInputChange = (e) => {
         dispatch(setSearchQuery(e.target.value));
    }
    const handleCategoryChange = (e) => {
        dispatch(setFilterByCategory(e.target.value));
    };

    const handleSignOut = () => {
        localStorage.removeItem("user");
        dispatch(setAuthUserName(""));
        navigate("/login");
    };

    const handleGoToLikedProducts = () => {
        navigate("/liked-products")
    }



    return (
        <Container>
            <Inner>
                <SearchBar>
                    <FilterContainer>
                        <Select onChange={handleCategoryChange} value={filterByCategory || 'All'}>
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </Select>
                    </FilterContainer>
                    <input type="text" placeholder="Search..." onChange={onSearchInputChange} />
                </SearchBar>
                <RightContainer>

                    <BasketButton onClick={() => navigate("/checkout")}>
                        <img src="./basket-icon.png" alt="" />
                        <p>{basket.length}</p>
                    </BasketButton>
                    <NavButton
                        onClick={toggleOptions}
                    >
                        <FaUser style={{justifyContent: 'center',  marginLeft: '5px', cursor: 'pointer' }} />
                    </NavButton>
                    <OptionsModal visible={showOptions}>
                        <p style = {{ margin: "5px 0 10px 0"}} onClick={handleGoToHistory}>Go to History</p>
                        <p style = {{ margin: "0 0 10px 0"}} onClick={handleGoToLikedProducts}>Liked Products</p>
                        <p style = {{ margin: "0 0 5px 0"}} onClick={handleSignOut}>Sign Out</p>
                    </OptionsModal>
                </RightContainer>
            </Inner>
        </Container>
    );
}
const OptionsModal = styled.div`
  position: absolute;
  z-index: 99;
  top: 100%;
  transform: translateX(-10%);
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
   display: ${props => (props.visible ? 'block' : 'none')};
  
  p{
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #5f7da9;
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

const FilterContainer = styled.div`
  display: inline-block;
  height: 35px;
  width: 100px;
  border: none;
  border-radius: 5px 0 0 5px;
  background: #98b5ec;
  cursor: pointer;

`

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 0 5px 5px 0;
  background: #c2b6b6;
  cursor: pointer;
  
  option{
    cursor: pointer
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
    border-radius: 0 5px 5px 0;
    padding-left: 10px;
    font-size: 16px;

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
  width: 30px;
  height: 30px;
  color: #5f7da9;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-right: 15px;

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