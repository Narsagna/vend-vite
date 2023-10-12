import { Router } from 'express';
import controller from './controller.js';

const router = Router();

router.post("/", controller.addProduct); // create product
router.get("/", controller.getProduct); // retrieve product
router.get("/:id", controller.getProductById); // retrieve product by id
router.put("/:id", controller.updateProduct); // update product by id
router.delete("/:id", controller.deleteProduct); // delete product by id

export default router; // note this syntax for exporting
