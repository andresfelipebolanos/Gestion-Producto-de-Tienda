import { useState, useEffect } from "react";

const Name = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // Obtener el token de localStorage
        const response = await fetch("http://localhost:5000/name", {
          headers: {
            Authorization: `Bearer ${token}`, // Enviar token en los headers
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error obteniendo el usuario", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="p-6">
      {user ? (
        <h1 className="text-3xl font-bold">¡Bienvenido, {user.nombre}!</h1>
      ) : (
        <p className="text-3xl font-bold">¡Bienvenido a su Tienda Virtual!</p>
      )}
    </div>
  );
};

export default Name;
