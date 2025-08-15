import UserEntity from "../../entitites/user.entity";
import CreateUserRepositoryDto from "../../repositories/user/dtos/create-user.repository.dto";
import type LoginUserRepositoryDto from "../../repositories/user/dtos/login-user.repository.dto";
import UserRepository from "../../repositories/user/user.repository";

export default class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ){}

  public async createUser(data: CreateUserRepositoryDto) {
    const newUser = new UserEntity(data.email, data.name, data.password);
    return await this.userRepository.createUser(newUser.getUser());
  }

  public async loginUser(data: LoginUserRepositoryDto){
    return await this.userRepository.loginUser(data);
  }
}