import { Controller, Get, Post, Body, Put, Delete, Param, UsePipes } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Pet } from './schemas/pet.schema';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@ApiTags('Питомцы')
@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @ApiOperation({ summary: "Создание питомца" })
    @ApiResponse({ status: 201, description: "The pet was successfully created." })
    @ApiResponse({ status: 400, description: 'Error creating pet.'})
    @ApiResponse({ status: 401, description: 'Missing header with authorization token.'})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() petDto: CreatePetDto) {
        return this.petsService.create(petDto);
    }

    @ApiOperation({ summary: "Получение всех питомцев" })
    @ApiResponse({ status: 200, type: [Pet] })
    @ApiResponse({ status: 401, description: 'Missing header with authorization token.'})
    @Get()
    findAll() {
        return this.petsService.findAll();
    }

    @ApiOperation({ summary: "Получение одного питомца" })
    @ApiResponse({ status: 200, type: Pet })
    @ApiResponse({ status: 400, description: 'Invalid ID supplied.' })
    @ApiResponse({ status: 401, description: 'Missing header with authorization token.'})
    @Get(':id')
    findById(@Param('id') id: string) {
        return this.petsService.findById(id);
    }

    @ApiOperation({ summary: "Обновление питомца" })
    @ApiResponse({ status: 200, description: 'The pet was successfully updated.' })
    @ApiResponse({ status: 400, description: 'Contact update failed.' })
    @ApiResponse({ status: 401, description: 'Missing header with authorization token.' })
    @ApiResponse({ status: 404, description: 'Pet not found.' })    
    @Put(':id')
    update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
        return this.petsService.update(id, updatePetDto);
    }

    @ApiOperation({ summary: "Удаление питомца" })
    @ApiResponse({ status: 200, description: 'The pet was successfully deleted.' })
    @ApiResponse({ status: 401, description: 'Missing header with authorization token.'})
    @ApiResponse({ status: 404, description: 'Pet not found.' })
    @ApiResponse({ status: 500, description: 'Server error.'})
    @Delete(':id')
    remove(@Param('id') id: string) {
        this.petsService.remove(id);

        return "Delete seccess";
  }

}
