import LinkEntity from "../../entitites/link.entity";
import DeleteLinkByIdEntityDto from "./dtos/delete-link-by-id.dto";
import GetLinkByIdDTO from "./dtos/get-link-by-id.dto";
import ListLinkByUserIdEntity from "./dtos/list-link-by-user-id.dto";

export default class LinkRepository {

  private links: LinkEntity[] = [];

  public async createLink(data: LinkEntity): Promise<LinkEntity> {
    this.links.push(data);
    return data;
  }

  public async deleteLinkById(data: DeleteLinkByIdEntityDto): Promise<string>{
    this.links = this.links.filter(link => link.id !== data.id);
    return data.id;
  }
  
  public async getLinkById(data: GetLinkByIdDTO): Promise<LinkEntity | null> {
    const link = this.links.find(link => link.id === data.id);
    return link || null;
  }

  public async listLinksByUserId(data: ListLinkByUserIdEntity): Promise<LinkEntity[]>{
    return this.links.filter(link => link.userId === data.userId);
  }

}