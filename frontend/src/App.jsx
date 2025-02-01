import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductForm from "./pages/ProductForm";
import EditProductForm from "./pages/EditProductForm";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token"); // Verificar si hay un token

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products"
          element={isAuthenticated ? <Products /> : <Navigate to="/login" />}
        />
        <Route
          path="/products/new"
          element={isAuthenticated ? <ProductForm /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/products" />} />
        <Route
          path="/products/edit/:id"
          element={
            isAuthenticated ? <EditProductForm /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
