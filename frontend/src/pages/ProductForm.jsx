import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    inventory: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/products", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Producto agregado exitosamente");
      navigate("/products"); // Redirigir a la lista de productos
    } catch (error) {
      console.error("Error al agregar producto:", error);
      alert("Ocurrió un error al agregar el producto: Inicie sesion");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Agregar Producto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Descripción:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Precio:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Categoría:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Cantidad:</label>
          <input
            type="number"
            name="inventory"
            value={product.inventory}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
