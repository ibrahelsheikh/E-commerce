import {Router} from "express";

import {getAllProducts} from "../controllers/productController.js";

const ProductsRouter = Router();

ProductsRouter.route("/").get(getAllProducts);

export {ProductsRouter};