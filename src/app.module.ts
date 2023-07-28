import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`.${process.env.NODE_ENV}.env`
    }),
    MongooseModule.forRoot(process.env.DB_HOST),
    PetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

