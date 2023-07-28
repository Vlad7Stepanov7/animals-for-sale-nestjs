import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './schemas/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
    constructor(@InjectModel(Pet.name) private animalModel: Model<Pet>) { }
    
    async create(createPetDto: CreatePetDto): Promise<Pet> {
        const animal = await this.animalModel.create(createPetDto);
        return animal;
    }

    async findAll(): Promise<Pet[]> {
        return this.animalModel.find().exec();
    }

    async findById(id: string): Promise<Pet> {
        return this.animalModel.findById(id);
    }

    async update(id: string, updatePetDto: UpdatePetDto): Promise<Pet> {
        return this.animalModel.findByIdAndUpdate(id, updatePetDto, { new: true });
    }

    async remove(id: string): Promise<Pet> {
       return this.animalModel.findByIdAndRemove(id);
    }
}
