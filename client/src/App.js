import { Route, Routes } from "react-router-dom";
import { Main, Board, Wish } from "./pages";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/board" element={<Board />} />
      <Route path="/wish" element={<Wish />} />
    </Routes>
  );
};

export default App;
