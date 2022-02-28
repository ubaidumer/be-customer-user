import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCustomerValidationDecorator } from 'src/decorator/customer/create.decorator';
import { CreateCustomerDto } from 'src/dto/customer/create.dto';
import { CustomerService } from './customer.service';
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('/create')
  async createCustomer(
    @CreateCustomerValidationDecorator() body: CreateCustomerDto,
  ) {
    return await this.customerService.create(body);
  }
  @Get()
  async findCustomer() {
    return await this.customerService.findAll();
  }
  @Delete('/:id')
  async deleteCustomer(@Param() param) {
    return await this.customerService.delete(param);
  }
}
