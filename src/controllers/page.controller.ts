import { Request, Response } from "express";

class PageController {
  home = async (req: Request, res: Response) => {
    return res.send("home");
  };

  dogs = async (req: Request, res: Response) => {
    return res.send("dogs");
  };

  cats = async (req: Request, res: Response) => {
    return res.send("cats");
  };

  fishes = async (req: Request, res: Response) => {
    return res.send("fishes");
  };
}

export default new PageController();
