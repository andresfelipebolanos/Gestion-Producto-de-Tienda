1.Gestion de Productos de Tienda

Este es un sistema de gestión de productos para una tienda, desarrollado 
como una aplicación fullstack utilizando React en el frontend y Node.js con 
Express en el backend. La base de datos utilizada es MongoDB.

2.Características:
-Autenticación con JWT: Registro e inicio de sesión seguro.
-CRUD de productos: Crear, leer, actualizar y eliminar productos.
-Interfaz: Uso de Tailwind CSS.
-Manejo de estado: Axios para las peticiones HTTP al backend.
-Rutas protegidas: Acceso restringido según la autenticación.

3.Tecnologías Utilizadas

3.1.Frontend:
-React con Vite
-React Router
-Axios
-Tailwind CSS

3.2.Backend:
-Node.js con Express
-MongoDB con Mongoose
-JSON Web Tokens (JWT)
-bcrypt para el encriptado de contraseñas

4. Como configurar:
Obligatorio tener mongoDB instalado previamente

4.1.Configurar el Backend:escribir los siguiente comandos en un terminal:
-cd backend
-npm install
4.1.1.Configura las variables de entorno en un archivo .env dentro del directorio backend:

PORT=5000
MONGO_URI=tu_conexion_a_mongodb
JWT_SECRET=tu_secreto_jwt	

4.1.2. Inicia el servidor:
-npm start

4.2.Configurar el Frontend:
-cd frontend
-npm install
-npm run dev

5.Como se usa:
Puedes ver los productos guardados siempre, asi no inicies sesion.
Para registrarte llena el formulario de registro.
Para iniciar sesion usa tu correo y contraseña que asignaste en el registro.
Para acceder a las opciones de agregar, editar o eliminar debes iniciar sesion.
Para agregar o editar llena el formulario respectivo y guarda presionando el boton.



