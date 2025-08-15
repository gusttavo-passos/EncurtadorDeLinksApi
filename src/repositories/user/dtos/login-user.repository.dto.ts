import z from "zod";

const LoginUserRepositoryDtoSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

type LoginUserRepositoryDto = z.infer<typeof LoginUserRepositoryDtoSchema>;

export default LoginUserRepositoryDto;