import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProductForm = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    inventory: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Token no encontrado. Por favor, inicia sesión.");
          navigate("/login");
          return;
        }
        const response = await axios.get(
          `http://localhost:5000/products/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        alert("No se pudo cargar el producto.");
      }
    };
    console.log("ID del producto:", id);
    fetchProduct();
  }, [id]);

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
      await axios.put(`http://localhost:5000/products/${id}`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Producto actualizado exitosamente");
      navigate("/products"); // Redirigir a la lista de productos
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      alert("Ocurrió un error al actualizar el producto");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Producto</h1>
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
          Actualizar Producto
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
