import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(private messageRepository: MessagesRepository) {}

  async findOne(id: string) {
    return this.messageRepository.findOne(id);
  }

  async findAll() {
    return this.messageRepository.findAll();
  }

  async create(content: string) {
    return this.messageRepository.create(content);
  }
}
