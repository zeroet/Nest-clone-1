import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getUsers(@Req() req) {
        return req.user;
    }

    @Post()
    postUser(@Body() data: JoinRequestDto) {
        this.userService.postUsers(data.email, data.nickname, data.password);
    }

    @Post('login')
    logIn() {

    }

    @Post('logout')
    logOut() {

    }
}
