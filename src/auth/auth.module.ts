import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [JwtModule.register({
    privateKey:process.env.PRIVATE.KEY || 'SECRET',
  })],
  providers: [AuthService]
})
export class AuthModule {}
