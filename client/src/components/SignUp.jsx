import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios"
import {setAuthUserName} from "../stores/userSlice.js";
import {useDispatch} from "react-redux";
import {setProducts} from "../stores/productsSlices.js";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3003/auth/signup", { email, password, fullName })
      .then((res) =>  {
          navigate("/login");
          dispatch(setAuthUserName(fullName));
      })
      .catch((err) => console.warn(err));
  };
  return (
    <FormContainer>
      <h3>Sign-Up </h3>
      <InputContainer>
        <p>FullName</p>
        <input
          type="text"
          placeholder="John Smith"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
      </InputContainer>
      <InputContainer>
        <p>Email</p>
        <input
          type="email"
          placeholder="example@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </InputContainer>
      <InputContainer>
        <p>Password</p>
        <input
          type="password"
          placeholder="****"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </InputContainer>
      <LoginButton onClick={signup}>Sign up</LoginButton>

      <SignUpContainer>
        Already have an account?
        <span onClick={() => navigate("/login")}>Log in</span>
      </SignUpContainer>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 35%;
  border: 1px solid lightgray;
  border-radius: 10px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: auto;
  margin-top: 60px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    /* align-self: flex-start; */
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
    align-self: flex-start;
    margin-bottom: 10px;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;

    &:hover {
      border: 1px solid #65c2eb;
    }
  }
`;

const LoginButton = styled.div`
  width: 70%;
  height: 35px;
  background-color: #40b6e8;
  border: none;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  padding-top: 8px;
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 15px;

  span {
    cursor: pointer;
    margin-left: 5px;
    font-weight: 700;
    color: black;
  }
`;
