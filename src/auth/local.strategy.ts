import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any>{
        const user = await this.authService.validateUser(username, password);

        if (!user) {
         throw new UnauthorizedException('Invalid user credentials');
        }
        return user;
    }
}


// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-local';
// import { UsersService } from 'src/users/users.service';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly userService: UsersService) {
//     super();
//   }

//   validate(userName: string, password: string) {
//     const user = this.userService.getUserByUserName(userName);
//     if (user == undefined) throw new UnauthorizedException();
//     if (user != undefined && user.password == password) {
//       return user;
//     } else {
//       throw new UnauthorizedException();
//     }
//   }
// }
