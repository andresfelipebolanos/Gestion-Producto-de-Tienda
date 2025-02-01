const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Configuración inicial
dotenv.config();
const app = express(); // Inicializa la aplicación Express

// Rutas
const productRoutes = require("./routes/productRoutes"); // Importa rutas de productos
const authRoutes = require("./routes/authRoutes"); // Importa rutas de autenticación
const nombreRoutes = require("./routes/nombreRoutes");
// Middlewares
app.use(express.json()); // Permite procesar JSON en las solicitudes
app.use(cors()); // Habilita CORS

// Rutas
app.use("/products", productRoutes); // Registra las rutas de productos
app.use("/auth", authRoutes); // Registra las rutas de autenticación
app.use("/name", nombreRoutes);
// Conexión a MongoDB y arranque del servidor
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(PORT, () =>
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error);
    process.exit(1); // Cierra el proceso si no se puede conectar a la base de datos
  });
