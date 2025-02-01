import { Link } from "react-router-dom";
import Name from "./name";
import logoImg from "/Users/andre/OneDrive/Escritorio/proyectos de programacion 2025/Gestion Productos de Tienda/frontend/src/assets/tienda2.png";
const Navbar = () => {
  const SesionCerrar = () => {
    localStorage.removeItem("token"); // Eliminar el token
    navigate(`/login`);
    window.location.reload();
  };
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="p-1">
          <img id="Logo" src={logoImg} />
        </div>
        <Link to="/" className="text-white text-2xl font-bold">
          Tienda Virtual
        </Link>
        <Name />
        <br />
        {/* Menú de navegación */}
        <div className="space-x-4">
          <Link to="/products" className="text-white hover:text-gray-300">
            Productos
          </Link>
          <Link
            to="/login"
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-300 hover:text-black"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white"
          >
            Registrarse
          </Link>
          <button
            onClick={SesionCerrar}
            type="button"
            className="w-full bg-red-500 text-white p-2 rounded-lg  hover:bg-white hover:text-red-500"
          >
            Desconectarse
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
