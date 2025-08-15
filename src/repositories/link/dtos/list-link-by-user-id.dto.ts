import z from "zod";

const ListLinkByUserIdSchema = z.object({
  userId: z.uuid(),
})

type ListLinkByUserIdDto = z.infer<typeof ListLinkByUserIdSchema>;

export default ListLinkByUserIdDto;