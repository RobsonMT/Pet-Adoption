import { Request, Response } from "express";
import { createMenuObject } from "../helpers";

class PageController {
  home = (req: Request, res: Response) => {
    res.render("pages/page", {
      menu: createMenuObject("all"),
      banner: {
        title: "Todos os animais",
        background: "allanimals.jpg",
      },
    });
  };

  dogs = (req: Request, res: Response) => {
    res.render("pages/page", {
      menu: createMenuObject("dog"),
      banner: {
        title: "Cachorros",
        background: "banner_dog.jpg",
      },
    });
  };

  cats = (req: Request, res: Response) => {
    res.render("pages/page", {
      menu: createMenuObject("cat"),
      banner: {
        title: "Gatos",
        background: "banner_cat.jpg",
      },
    });
  };

  fishes = (req: Request, res: Response) => {
    res.render("pages/page", {
      menu: createMenuObject("fish"),
      banner: {
        title: "Peixe",
        background: "banner_fish.jpg",
      },
    });
  };
}

export default new PageController();
