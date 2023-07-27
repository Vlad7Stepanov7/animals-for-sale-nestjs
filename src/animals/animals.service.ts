import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './schemas/animal.schema';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Injectable()
export class AnimalsService {
    constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) { }
    
    async create(createAnimalDto: CreateAnimalDto) {
        const animal = await this.animalModel.create(createAnimalDto);
        return animal;
    }

    async findAll(): Promise<Animal[]> {
        return this.animalModel.find().exec();
    }
}
