import { LinkEntity } from "../../entitites/link.entity";
import CreateLinkDto from "../../repositories/link/dtos/create-link.dto";
import DeleteLinkByIdDto from "../../repositories/link/dtos/delete-link-by-id.dto";
import GetLinkByIdDTO from "../../repositories/link/dtos/get-link-by-short-url.dto";
import ListLinkByUserIdDto from "../../repositories/link/dtos/list-link-by-user-id.dto";
import LinkRepository from "../../repositories/link/link.repository";

export default class LinkService {
  constructor(
    private readonly linkRepository: LinkRepository
  ){}

  public async createLink(data: CreateLinkDto){
    const newLink = new LinkEntity(data.url, data.userId);
    return await this.linkRepository.createLink(newLink);
  }

  public async getLinkShortUrlId(data: GetLinkByIdDTO){
    return await this.linkRepository.getLinkById(data);
  }

  public async listLinksByUserId(data: ListLinkByUserIdDto){
    return await this.linkRepository.listLinksByUserId(data);
  }

  public async deleteLinkById(data: DeleteLinkByIdDto){
    return await this.linkRepository.deleteLinkById(data);
  }
}