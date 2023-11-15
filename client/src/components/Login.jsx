import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setAuthUserName} from "../stores/userSlice.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/auth/login", { email, password })
      .then((res) => {
        if (!res.data.error) {
            dispatch(setAuthUserName(res.data.fullName));
            console.log(res.data.fullName);


          localStorage.setItem("user", JSON.stringify(res.data));

          navigate("/");
        } else if (res.data.error) {
          alert(res.data.error);

        }
      })
    .catch((err) => console.warn(err));
  };

  return (
    <FormContainer>
      <h3>Sign-In </h3>
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
      <LoginButton onClick={login}>Login</LoginButton>

      <SignUpContainer>
        Don&apos;t have an account?
        <span onClick={() => navigate("/signup")}>Sign up</span>
      </SignUpContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 35%;
  border: 1px solid lightgray;
  border-radius: 10px;
  height: 350px;
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

export default Login;
