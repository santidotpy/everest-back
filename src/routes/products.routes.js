import { Router } from "express";
import { passportError, authorization } from "../utils/messageError.js";
import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
  mockingProducts,
  getProductsJSON,
} from "../controllers/products.controller.js";
import { validateProduct } from "../middlewares/validations.js";

const routerProd = Router();

routerProd.get("/products", getProducts);

// obtener un producto por id
routerProd.get("/product", getProductById);

// obtener productos en formato json
routerProd.get("/products-json", getProductsJSON);

// agregar productos
routerProd.post(
  "/products",
  passportError("jwt"),
  authorization(),
  validateProduct,
  addProduct
);

// eliminar un producto
routerProd.delete(
  "/products",
  passportError("jwt"),
  authorization(),
  deleteProduct
);

// actualizar un producto
routerProd.put(
  "/products",
  passportError("jwt"),
  authorization(),
  updateProduct
);

// post para agregar 50 productos de prueba a la base de datos usando faker
routerProd.post(
  "/mockingproducts",
  passportError("jwt"),
  authorization(),
  mockingProducts
);

export default routerProd;
