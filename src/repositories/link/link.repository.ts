import { PrismaClient } from "@prisma/client";
import LinkEntity from "../../entitites/link.entity";
import DeleteLinkByIdEntityDto from "./dtos/delete-link-by-id.dto";
import GetLinkByIdDTO from "./dtos/get-link-by-short-url.dto";
import ListLinkByUserIdEntity from "./dtos/list-link-by-user-id.dto";

export default class LinkRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createLink(data: LinkEntity): Promise<LinkEntity> {
    const created = await this.prisma.links.create({
      data: {
        id: data.id,
        userId: data.userId,
        url: data.url,
        shortUrl: data.shortUrl,
        createdAt: data.createdAt
      }
    });
    return created;
  }

  public async deleteLinkById(data: DeleteLinkByIdEntityDto): Promise<string> {
    await this.prisma.links.delete({
      where: { id: data.id }
    });
    return data.id;
  }

  public async getLinkById(data: GetLinkByIdDTO): Promise<LinkEntity | null> {
    const link = await this.prisma.links.findUnique({
      where: { id: data.id }
    });
    return link;
  }

  public async listLinksByUserId(data: ListLinkByUserIdEntity): Promise<LinkEntity[]> {
    const links = await this.prisma.links.findMany({
      where: { userId: data.userId }
    });
    return links;
  }
}
