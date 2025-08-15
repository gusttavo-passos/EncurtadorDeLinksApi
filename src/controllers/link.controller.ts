import { Request, Response } from "express";

import LinkService from "../services/link/link.service";

import GetLinkByIdDTO from "../repositories/link/dtos/get-link-by-id.dto";

export default class LinkController {
  constructor(
    private readonly linkService: LinkService,
  ){}

  async createLink(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.linkService.createLink(req.body);
      return res.status(201).send({'link': result});
    } catch(e: any){
      return res.status(400).send({
        error: e.message || "An error occurred while creating the link."
    })
  }
}

  async getLinkById(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.linkService.getLinkById(req.query as GetLinkByIdDTO);
      return res.status(200).send({
        link: result?.shortUrl
      });
    } catch (e: any) {
      return res.status(400).send({
        error: e.message || "An error occurred while retrieving the link."
      });
    }
  }
}