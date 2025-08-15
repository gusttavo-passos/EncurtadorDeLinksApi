import { Request, Response } from "express";

import LinkService from "../services/link/link.service";

import type GetLinkShortUrlDTO from "../repositories/link/dtos/get-link-by-short-url.dto";

export default class LinkController {
  constructor(
    private readonly linkService: LinkService,
  ){}

  createLink = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await this.linkService.createLink(req.body);
      return res.status(201).send({'link': result});
    } catch(e: any){
      return res.status(400).send({
        error: e.message || "An error occurred while creating the link."
    })
  }
}

  getLinkShortUrl = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const result = await this.linkService.getLinkShortUrlId(req.params as GetLinkShortUrlDTO);
      if(!result){
        return res.status(404).send("Link não encontrado");
      }
      res.redirect(302, result.url);
    } catch (e: any) {
      return res.status(400).send({
        error: e.message || "An error occurred while retrieving the link."
      });
    }
  }
}