import { Controller, Get, Post, Body } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Controller('animals')
export class AnimalsController {
    constructor(private readonly animalsService: AnimalsService) { }
    
    @Get()
    findAll() {
        return this.animalsService.findAll();
    }

    @Post()
    create(@Body() animalDto: CreateAnimalDto) {
        return this.animalsService.create(animalDto);
    }

}
