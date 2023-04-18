import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Add } from "./pages/Add";
import { Edit } from "./pages/Edit";
import { List } from "./pages/List";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<List />} />
        <Route path="/admin/add" element={<Add />} />
        <Route path="/admin/edit/:id" element={<Edit />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
