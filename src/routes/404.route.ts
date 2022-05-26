import { Request, Response, Router } from "express";

const router = Router();

router.get("/*", (req: Request, res: Response) => {
  res.render("pages/404");
});

export default router;
