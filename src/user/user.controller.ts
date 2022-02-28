import { Controller, Param, Post, Put } from '@nestjs/common';
import { LoginUserValidationDecorator } from 'src/decorator/user/login.decorator';
import { LoginUserDto } from 'src/dto/user/login.dto';
import { CreateUserValidationDecorator } from '../decorator/user/register.decorator';
import { CreateUserDto } from '../dto/user/register.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async registerUser(@CreateUserValidationDecorator() body: CreateUserDto) {
    return await this.userService.register(body);
  }
  @Post('/login')
  async loginUser(@LoginUserValidationDecorator() body: LoginUserDto) {
    return await this.userService.login(body);
  }
  @Put('/activate/:id')
  async activateUser(@Param() param) {
    return await this.userService.activate(param);
  }
}
