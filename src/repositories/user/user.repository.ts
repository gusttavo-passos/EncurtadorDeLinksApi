import { UserEntityType } from "../../entitites/user.entity";
import LoginUserRepositoryDto from "./dtos/login-user.repository.dto";

export default class UserRepository {
  private users: UserEntityType[] = [];

  public async createUser(data: UserEntityType): Promise<UserEntityType | null> {
    this.users.push(data);
    return data;
  }

  public async loginUser(data: LoginUserRepositoryDto): Promise<UserEntityType | null> {
    const user = this.users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    return user || null;
  }
}