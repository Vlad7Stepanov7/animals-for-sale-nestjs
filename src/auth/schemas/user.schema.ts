import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema() 
export class User {
    
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    id: string;        

    @ApiProperty({example: 'Виталий', description: 'Имя пользователя'})
    @Prop()
    name: string;

    @ApiProperty({example: 'Vitalik@gmail.com', description: 'Почтовый адрес'})
    @Prop()
    email: string;

    @ApiProperty({example: '123Vital', description: 'Пароль'})
    @Prop()
    password: string;

    @ApiProperty({example: '20-11-2000', description: 'Дата рождения'})
    @Prop()
    birthday: string;

    @ApiProperty({example: 'Зовут Виталий. Заводить питомцев мое хобби.', description: 'Биография'})
    @Prop()
    biography: string;

}

export const UserSchema = SchemaFactory.createForClass(User)