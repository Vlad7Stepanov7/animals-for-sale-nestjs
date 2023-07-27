import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnimalDocument = HydratedDocument<Animal>;

@Schema() 
export class Animal {

    @Prop()
    name: string;

    @Prop()
    breed: string;

    @Prop()
    type: string;

    @Prop()
    rentPrice: string;

}

export const AnimalSchema = SchemaFactory.createForClass(Animal)