import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { pets } from "../models/pets";

export const search = (req: Request, res: Response) => {
    if (!req.query.q) {
        res.redirect("/");
        return;
    }

    let query: string = req.query.q as string;
    let list = pets.getFromName(query);

    res.render("pages/page", {
        menu: createMenuObject(""),
        list,
        query,
    });
};
