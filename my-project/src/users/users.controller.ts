import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUser() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserByID(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  createUser(@Body() body: { name: string; email: string }) {
    return this.usersService.create(body);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() body: { name: string; email: string },
  ) {
    return this.usersService.update(Number(id), body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }
}
