import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home.jsx";
import { Provider } from "react-redux";
import store from "./stores/RootStore.js";
import ProtectedRoutes from "./routes/ProtectedRoute.jsx";
import Checkout from "./components/Checkout.jsx";
import History from "./components/History.jsx";
import LikedCards from "./components/LikedCards.jsx";
import Profile from "./components/Profile.jsx";
import ProfileP from "./components/ProfileP.jsx";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container>
          <Routes>
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="history" element={<History />} />
            <Route path="/liked-products" element={<LikedCards />} />
            <Route path="/profile" element={<ProfileP />} />
          </Routes>
        </Container>
      </Provider>
    </BrowserRouter>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default App;
