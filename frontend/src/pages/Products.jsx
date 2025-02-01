import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const deleteProduct = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        alert("Producto eliminado con éxito");
        fetchProducts(); // Actualizar la lista después de eliminar
        window.location.reload();
      } catch (error) {
        console.error("Error eliminando producto:", error);
        alert("No se pudo eliminar el producto");
      }
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token"); // Obtener el token del localStorage
        const response = await axios.get("http://localhost:5000/products", {
          headers: {
            Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <table className="table-auto w-full border bg-gray-200">
        <caption className="text-2xl font-bold mb-4 bg-gray-200">
          Lista de Productos
          <hr />
          <button
            onClick={() => navigate("/products/new")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
          >
            Agregar Nuevo Producto
          </button>
        </caption>

        <thead>
          <tr>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">Descripción</th>
            <th className="px-4 py-2 border">Precio</th>
            <th className="px-4 py-2 border">Categoría</th>
            <th className="px-4 py-2 border">Cantidad</th>
            <th className="px-4 py-2 border">Editar / Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="px-4 py-2 border">{product.name}</td>
              <td className="px-4 py-2 border">{product.description}</td>
              <td className="px-4 py-2 border">${product.price}</td>
              <td className="px-4 py-2 border">{product.category}</td>
              <td className="px-4 py-2 border">{product.inventory}</td>
              <td>
                <button
                  onClick={() => navigate(`/products/edit/${product._id}`)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mr-2"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
