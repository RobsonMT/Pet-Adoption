import { Request, Response } from "express";
import { createMenuObject } from "../helpers";
import { Pet } from "../models";

class PageController {
  home = (req: Request, res: Response) => {
    let allList = Pet.getAll();

    res.render("pages/page", {
      menu: createMenuObject("all"),
      banner: {
        title: "Todos os animais",
        background: "pets.jpg",
      },
      list: allList,
    });
  };

  dogs = (req: Request, res: Response) => {
    let dogsList = Pet.getFromType("dog");

    res.render("pages/page", {
      menu: createMenuObject("dog"),
      banner: {
        title: "Cachorros",
        background: "bannerDog.jpg",
      },
      list: dogsList,
    });
  };

  cats = (req: Request, res: Response) => {
    let catsList = Pet.getFromType("cat");

    res.render("pages/page", {
      menu: createMenuObject("cat"),
      banner: {
        title: "Gatos",
        background: "bannerCat.jpg",
      },
      list: catsList,
    });
  };

  fishes = (req: Request, res: Response) => {
    let fishesList = Pet.getFromType("fish");

    res.render("pages/page", {
      menu: createMenuObject("fish"),
      banner: {
        title: "Peixe",
        background: "bannerFish.jpg",
      },
      list: fishesList,
    });
  };
}

export default new PageController();
