import { ApiProperty } from "@nestjs/swagger/dist";
import { IsString } from "class-validator";

export class CreatePetDto {

    @ApiProperty({ example: 'Мурчик', description: 'Имя питомца' })
    @IsString({message: 'Должно быть строка'})
    readonly name: string;

    @ApiProperty({ example: 'Вислоухий', description: 'Порода питомца' })
    @IsString({message: 'Должно быть строка'})
    readonly breed: string;

    @ApiProperty({ example: 'Кот', description: 'Тип питомца' })
    @IsString({message: 'Должно быть строка'})
    readonly type: string;

    @ApiProperty({ example: '3000', description: 'Арендная цена питомца' })
    @IsString({message: 'Должно быть строка'})
    readonly rentPrice: string;
}