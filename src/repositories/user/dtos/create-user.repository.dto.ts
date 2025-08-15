import z from "zod";

const CreateUserRepositoryDtoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type CreateUserRepositoryDto = z.infer<typeof CreateUserRepositoryDtoSchema>;

export default CreateUserRepositoryDto