/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult,DeleteResult} from 'typeorm';
<<<<<<< Updated upstream
import { CreateInvItemDto } from 'src/dto/create-invitem.dto';
import { UpdateInvItemDto } from 'src/dto/update-invitem.dto';
import { invItem } from 'src/entities/invItem.entity'; 
import { InjectRepository } from '@nestjs/typeorm';


=======
import { invItem } from 'src/entities/invItem.entity';
import { InjectRepository } from '@nestjs/typeorm';
>>>>>>> Stashed changes
@Injectable()
export class InvItemService {
    constructor (
        @InjectRepository(invItem)
        private invItemRepository: Repository<invItem>
    ) { }
<<<<<<< Updated upstream
    async create(createInvItemDto: CreateInvItemDto): Promise<void> {
        const invEntity = await this.invItemRepository.create(createInvItemDto);
        await this.invItemRepository.save(invEntity);
=======
    async create(contact: invItem): Promise<invItem> {
        return await this.invItemRepository.save(contact);
>>>>>>> Stashed changes
    }
    async  readAll(): Promise<invItem[]> {
        return await this.invItemRepository.find();
    }
<<<<<<< Updated upstream
    async update(createInvItemDto: CreateInvItemDto): Promise<void> {
=======
    async update(contact: invItem): Promise<UpdateResult> {

        return await this.invItemRepository.update(contact.id,contact);
>>>>>>> Stashed changes
    }
    async delete(id): Promise<DeleteResult> {
        return await this.invItemRepository.delete(id);
    }
}
