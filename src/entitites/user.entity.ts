import z from "zod";

const UserEntitySchema = z.object({
  id: z.uuid(),
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(8),
});

export type UserEntityType = z.infer<typeof UserEntitySchema>;

export default class UserEntity {
  private id: UserEntityType["id"];
  private name: UserEntityType["name"];
  private email: UserEntityType["email"];
  private password: UserEntityType["password"];

  constructor(name: UserEntityType["name"], email: UserEntityType["email"], password: UserEntityType["password"]) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public getUser(){
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    }
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }
}