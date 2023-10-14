import { ApiProperty } from "@nestjs/swagger/dist";
import { IsEmail, IsString } from "class-validator";

export class CreatePetDto {

    @ApiProperty({example: 'Виталий', description: 'Имя пользователя'})
    @IsString({message: 'Должно быть строка'})
    readonly name: string;

    @ApiProperty({example: 'Vitalik@gmail.com', description: 'Почтовый адрес'})
    @IsString({ message: 'Должно быть строка' })
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: '123Vital', description: 'Пароль'})
    @IsString({message: 'Должно быть строка'})
    readonly password: string;

    @ApiProperty({example: '20-11-2000', description: 'Дата рождения'})
    @IsString({message: 'Должно быть строка'})
    readonly birthday: string;

    @ApiProperty({example: 'Зовут Виталий. Заводить питомцев мое хобби.', description: 'Биография'})
    @IsString({message: 'Должно быть строка'})
    readonly biography: string;
}