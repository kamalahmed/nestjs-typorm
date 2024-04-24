import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['id', 'name', 'email', 'isAdmin'], // Fields to include, excluding 'password'
    });
  }

  async findOne(id: number): Promise<User | null> {
    // Most flexible way to retrieve selected data but maybe expensive.
    // return await this.usersRepository
    //   .createQueryBuilder('user')
    //   .select(['user.id', 'user.name', 'user.email']) // Exclude 'password' by not listing it
    //   .where('user.id = :id', { id })
    //   .getOne();

    // Removing password field is faster in the following way.
    const user = await this.usersRepository.findOneBy({ id });
    if (user) {
      delete user.password; // Remove the password field from the object
    }
    return user;
  }
  async findOneByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOneBy({ email });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    if (!user) {
      throw NotFoundException;
    }
    await this.usersRepository.remove(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw NotFoundException;
    }
    Object.assign(user, updateUserDto);
    return await this.usersRepository.save(user);
  }
}
