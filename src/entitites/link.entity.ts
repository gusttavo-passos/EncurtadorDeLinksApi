import { z } from "zod";

const LinkEntityTypeSchema = z.object({
  id: z.string(),
  userId: z.uuid(), 
  url: z.url(),
  shortUrl: z.string().min(1),
  createdAt: z.date(),
});

type LinkEntityType = z.infer<typeof LinkEntityTypeSchema>

export default LinkEntityType;

export class LinkEntity {
  id: LinkEntityType["id"];
  userId: LinkEntityType["userId"];
  url: LinkEntityType["url"];
  shortUrl: LinkEntityType["shortUrl"];
  createdAt: LinkEntityType["createdAt"];


  constructor(url: LinkEntityType["url"], userId: LinkEntityType["userId"]) {
    this.id = crypto.randomUUID().slice(0, 4);
    this.url = url;
    this.userId = userId;
    this.shortUrl = `http://localhost:3001/${(this.id)}`;
    this.createdAt = new Date();
  }
}