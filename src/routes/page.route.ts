import { Router } from "express";
import { pageController } from "../controllers";

const router = Router();

router.get("/", pageController.home);
router.get("/dogs", pageController.home);
router.get("/cats", pageController.cats);
router.get("/fishes", pageController.fishes);

export default router;
