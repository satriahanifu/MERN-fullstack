import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Todo from "./pages/Todo";
import Signup from "./pages/Signup";
import Herbie from "./pages/Herbie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/herbie" element={<Herbie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
