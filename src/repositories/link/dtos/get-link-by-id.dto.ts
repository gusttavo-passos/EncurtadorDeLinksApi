import z from "zod";

const GetLinkByIdDtoSchema = z.object({
  id: z.uuid(),
});

type GetLinkByIdDTO = z.infer<typeof GetLinkByIdDtoSchema>;

export default GetLinkByIdDTO;