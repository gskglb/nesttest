import { Controller, Get, Post, Req, Res, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { request } from 'http';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){
    }

    @Get()
    async getAllUser(): Promise<{ id: number, name: string }[]>  {
        return await this.usersService.getAllUser();
    }

    // @Get('/:id')
    // async getUser(@Req() req ): Promise<{id: number, name: string}> {
    //     console.log(req.params.id);
    //     return await this.usersService.getUser(+req.params.id);
    // }

    @Get('/:id')
    async getUser(@Param('id') id ): Promise<{id: number, name: string}> {
        id = parseInt(id);
        return await this.usersService.getUser(id);
    }
}
