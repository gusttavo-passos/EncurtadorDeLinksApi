import z from "zod";

const GetLinkByShortUrlDtoSchema = z.object({
  id: z.string(),
});

type GetLinkShortUrlDTO = z.infer<typeof GetLinkByShortUrlDtoSchema>;

export default GetLinkShortUrlDTO;