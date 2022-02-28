import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: typeof Customer,
  ) {}
  async create(body) {
    try {
      await this.customerRepository.create<Customer>(body);
      return { response: 'Successfully Created Customer', status: 200 };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
  async findAll() {
    return await this.customerRepository.findAll();
  }
  async delete(param) {
    try {
      const data = await this.customerRepository.findOne<Customer>({
        where: { id: param.id },
      });
      if (!data) {
        throw new HttpException('Customer Not Found!', HttpStatus.BAD_REQUEST);
      }

      await this.customerRepository.destroy({
        where: {
          id: param.id,
        },
      });

      return { response: 'Successfully Deleted Customer', status: 200 };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
