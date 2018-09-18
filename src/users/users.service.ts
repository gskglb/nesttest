import { Injectable , Component, HttpException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {id: 1, name: 'Adi'},
        {id: 2, name: 'Ash'},
        {id: 3, name: 'Guru'},
    ];

    getAllUser(){
        return Promise.resolve(this.users);
    }

    getUser(id: number){
        const user = this.users.find( (tuser) => tuser.id === id);
        if (!user){
            throw new HttpException('User Not Found', 404);
        }
        return Promise.resolve(user);
    }

    addUser(user){
        this.users.push(user);
        return Promise.resolve();
    }
}
