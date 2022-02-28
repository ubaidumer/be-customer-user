import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as Validator from 'validatorjs';

export const CreateUserValidationDecorator = createParamDecorator(
  async (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const body = request.body;
    const rules = {
      name: ['required', 'string'],
      password: ['required', 'string'],
      role: ['required', 'string'],
      email: ['required', 'email'],
    };
    const messages = {
      required: ':attribute is required!',
      string: ':attribute must be string!',
      numeric: ':attribute must be numeric!',
    };
    const validate = await new Validator(body, rules, messages);
    const result = validate.passes();
    if (result == false) {
      throw new HttpException(validate.errors, HttpStatus.NOT_ACCEPTABLE);
    }
    return body;
  },
);
