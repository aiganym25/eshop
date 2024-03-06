import Navbar from "./Navbar.jsx";
import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUserName, setAuthEmail } from "../stores/userSlice.js";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const ProfileP = () => {
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const dispatch = useDispatch();
  const authUsername = useSelector((state) => state.authUsername.authUsername);
  const email = useSelector((state) => state.authUsername.email);
  const [newUsername, setNewUsername] = useState(authUsername);
  const [newEmail, setNewEmail] = useState(email);
  const handleSave = () => {
    if (newUsername !== authUsername || newEmail !== email) {
      axios
        .put("http://localhost:3003/update-profile", {
          newUsername,
          newEmail,
          authUsername,
        })
        .then((res) => {
          dispatch(setAuthUserName(newUsername));
          dispatch(setAuthEmail(newEmail));
        })
        .catch((err) => alert(err));
    }
    setIsEditingUsername(false);
    setIsEditingEmail(false);
  };

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
        My Profile
      </h1>
      <UserInfo>
        <div style={{ display: "flex" }}>
          <Label>Username:</Label>
          <UserValue>
            {isEditingUsername ? (
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            ) : (
              <>
                <Username>{authUsername}</Username>
                <EditIcon onClick={() => setIsEditingUsername(true)}>
                  <FaEdit />
                </EditIcon>
              </>
            )}
          </UserValue>
        </div>
        <div style={{ display: "flex" }}>
          <Label>Email:</Label>
          <UserValue>
            {isEditingEmail ? (
              <input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            ) : (
              <>
                <Email>{email}</Email>
                <EditIcon onClick={() => setIsEditingEmail(true)}>
                  <FaEdit />
                </EditIcon>
              </>
            )}
          </UserValue>
        </div>
        {(isEditingUsername || isEditingEmail) && (
          <SaveButton onClick={handleSave}>Save</SaveButton>
        )}
      </UserInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(234, 237, 237);
`;

const UserInfo = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 24px;
  margin-bottom: 5px;
  margin-right: 10px;
`;

const UserValue = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

const Email = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

const EditIcon = styled.span`
  cursor: pointer;
`;

const SaveButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export default ProfileP;
