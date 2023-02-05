import {Module} from '@nestjs/common';
import {AuthenticationService} from './authentication.service';
import {AuthenticationController} from './authentication.controller';
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {ConfigModule} from "@nestjs/config";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";
import {JwtRefreshTokenStrategy} from "./jwt-refresh-token.strategy";

@Module({
  imports: [
    UserModule,
    PassportModule,
    ConfigModule,
    JwtModule.register({})
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy, JwtRefreshTokenStrategy]
})
export class AuthenticationModule {
}
