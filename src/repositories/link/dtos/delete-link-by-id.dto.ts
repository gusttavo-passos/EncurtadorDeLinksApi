import z from "zod";

const DeleteLinkByIdSchema = z.object({
  id: z.uuid(),
});

type DeleteLinkByIdDto = z.infer<typeof DeleteLinkByIdSchema>;

export default DeleteLinkByIdDto;