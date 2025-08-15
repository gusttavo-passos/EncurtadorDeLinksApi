import z from "zod";

const CreateLinkDtoSchemaDto = z.object({
  url: z.url(),
  userId: z.uuid(),
});

type CreateLinkDto = z.infer<typeof CreateLinkDtoSchemaDto>;

export default CreateLinkDto