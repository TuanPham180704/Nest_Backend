import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Tuan', email: 'tuanhihi@gmail.com' },
    { id: 2, name: 'Giang', email: 'gianghaha@gmail.com' },
  ];
  findAll() {
    return this.users;
  }
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
  create(userData: { name: string; email: string }) {
    const newUser = { id: this.users.length + 1, ...userData };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, updateData: { name: string; email: string }) {
    const user = this.users.find((user) => user.id === id);
    if (!user) return null;
    Object.assign(user, updateData);
    return user;
  }
  remove(id: number) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return { message: 'User not found' };
    const deleted = this.users[index];
    this.users.splice(index, 1);
    return { message: 'Deleted successfully', deleted };
  }
}
