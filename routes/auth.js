/*
  Rutas de Usuarios / Auth
  host + /api/auth
*/

const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const { crearUsuario, loginUsuario, revalidarToken } = require("../controllers/auth");

router.post(
  "/new",
  [ // Middlewares
    check("name",     "El nombre es obligatorio").not().isEmpty(),
    check("name",     "El nombre debe de ser mayor a 2 caracteres").isLength({ min: 3 }),
    check("email",    "El email es obligatorio ó esta mal escrito").isEmail(),
    check("password", "El password debe de ser mayor a 6 caracteres").isLength({ min: 6 }),
  ],
  crearUsuario
);

router.post(
  "/",
  [ // Middlewares
    check("email",    "El email es obligatorio ó esta mal escrito").isEmail(),
    check("password", "El password debe de ser mayor a 6 caracteres").isLength({ min: 6 }),
  ],
  loginUsuario
);

router.get("/renew", revalidarToken);

module.exports = router;