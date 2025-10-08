import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private user = ['Tuan', 'Giang'];

  findAll() {
    return this.user;
  }
}
