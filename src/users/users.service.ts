import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfilesService } from '../profiles/profiles.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly profilesService: ProfilesService
  ) { }

  async create(createUserDto: CreateUserDto) {
    // Create a new user with profile
    const user = this.userRepository.create(createUserDto);
    user.profile = await this.profilesService.create({});
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find({ 
      relations: ['profile']
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({ 
      where: { id },
      relations: ['profile']
    });
  }

  update(id: number, updateUserDto: Partial<UpdateUserDto>) {
   return this.userRepository.update({id}, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({id});
  }
}
