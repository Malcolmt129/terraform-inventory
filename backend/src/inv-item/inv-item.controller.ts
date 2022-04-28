/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InvItemService } from './inv-item.service';
import { invItem } from 'src/entities/invItem.entity';
<<<<<<< Updated upstream
import { CreateInvItemDto } from 'src/dto/create-invitem.dto';
import { UpdateInvItemDto } from 'src/dto/update-invitem.dto';
=======
>>>>>>> Stashed changes
@Controller('inv-item')
export class InvItemController {
    constructor(private invItemService: InvItemService){

    }
<<<<<<< Updated upstream
   
   
    @Post('create')
    async create(@Body() createInventoryItem:CreateInvItemDto): Promise<any> {
      return this.invItemService.create(createInventoryItem);
    }
    
    
=======

>>>>>>> Stashed changes
    @Get()
    read(): Promise<invItem[]> {
        return this.invItemService.readAll();
    }
<<<<<<< Updated upstream

    @Put(':id/update')
    async update(@Param('id') id, @Body() createInventoryItem:CreateInvItemDto): Promise<any> {
=======
    @Post('create')
    async create(@Body() contact: invItem): Promise<any> {
      return this.invItemService.create(contact);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() contact: invItem): Promise<any> {
        contact.id = Number(id);
        return this.invItemService.update(contact);
>>>>>>> Stashed changes
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.invItemService.delete(id);
    }
}
