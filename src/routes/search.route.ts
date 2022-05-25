import { Router } from "express";
import { searchController } from "../controllers";

const router = Router();

router.get("/search", searchController.search);

export default router;
