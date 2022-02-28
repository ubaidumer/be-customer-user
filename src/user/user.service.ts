import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}
  async register(body) {
    try {
      await this.userRepository.create<User>(body);
      return { response: 'Successfully logged in', status: 200 };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
  async login(body) {
    try {
      const data = await this.userRepository.findOne<User>({
        where: { email: body.email },
      });
      if (!data) {
        throw new HttpException('Email Not Found!', HttpStatus.BAD_REQUEST);
      }

      if (data.password !== body.password) {
        throw new HttpException('Incorrect Password!', HttpStatus.BAD_REQUEST);
      }
      return { response: 'Successfully logged in', status: 200 };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
  async activate(param) {
    try {
      const data = await this.userRepository.findOne<User>({
        where: { id: param.id },
      });
      if (!data) {
        throw new HttpException('User Not Found!', HttpStatus.BAD_REQUEST);
      }

      await this.userRepository.update(
        {
          is_active: 1,
        },
        {
          where: {
            id: 1,
          },
        },
      );

      return { response: 'Successfully updated user', status: 200 };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
