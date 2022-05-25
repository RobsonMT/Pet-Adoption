import { Request, Response } from "express";

class SearchController {
  search = async (req: Request, res: Response) => {
    return res.send("cats");
  };
}

export default new SearchController();
