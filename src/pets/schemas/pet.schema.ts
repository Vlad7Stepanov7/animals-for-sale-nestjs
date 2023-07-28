import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type PetDocument = HydratedDocument<Pet>;

@Schema() 
export class Pet {
    
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    id: string;        

    @ApiProperty({example: 'Мурчик', description: 'Имя питомца'})
    @Prop()
    name: string;

    @ApiProperty({example: 'Вислоухий', description: 'Порода питомца'})
    @Prop()
    breed: string;

    @ApiProperty({example: 'Кот', description: 'Тип питомца'})
    @Prop()
    type: string;

    @ApiProperty({example: '3000', description: 'Арендная цена питомца'})
    @Prop()
    rentPrice: string;

}

export const PetSchema = SchemaFactory.createForClass(Pet)