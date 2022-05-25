import { Request, Response, Router } from "express";

const router = Router();

router.get("/*", (req: Request, res: Response) => {
  res.send("Página não encontrada!");
});

export default router;
