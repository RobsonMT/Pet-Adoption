import { Request, Response } from "express";
import { createMenuObject } from "../helpers";
import { Pet } from "../models";

class SearchController {
  search = async (req: Request, res: Response) => {
    let query: string = req.query.search as string;

    if (!query) {
      res.redirect("/");
      return;
    }

    let searchList = Pet.getFromName(query);

    res.render("pages/page", {
      menu: createMenuObject(""),
      list: searchList,
      query,
    });
  };
}

export default new SearchController();
