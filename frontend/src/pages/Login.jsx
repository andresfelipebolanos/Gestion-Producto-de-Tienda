import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token); // Guardar el token
      window.location.reload();
      navigate("/products"); // Redirigir a la página de productos
    } catch (err) {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm foznt-medium text-gray-700"
          >
            Correo
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={() => navigate(`/`)}
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Iniciar Sesión
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate(`/register`)}
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
          >
            ¿No tienes una cuenta?. Resgistrate!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
