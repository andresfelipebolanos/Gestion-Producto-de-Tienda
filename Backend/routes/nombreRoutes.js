const express = require("express");
const User = require("../models/User");
const { verifyToken } = require("../middlewares/authMiddleware"); // Middleware para validar el token

const router = express.Router();

// Ruta para obtener el usuario autenticado
router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -email -telefono"
    ); // Excluir contraseña
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
});

module.exports = router;
