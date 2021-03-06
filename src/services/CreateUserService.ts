import {getRepository} from 'typeorm';
import {User} from '../models/User';
import { hash } from "bcryptjs";
interface UserData {
    name: string;
    email: string;
    password: string;
}
class  CreateUserService {
public async execute( {name,email, password}:UserData)
{
const usersRepository = getRepository(User);
const checkUserExists = await usersRepository.findOne({email})

if (checkUserExists){
    throw new Error('Email adrres already exist');
}

const hashedPassword = await hash(password, 8);

const user= usersRepository.create({
    name,
    email,
    password: hashedPassword
});
await usersRepository.save(user);
return user;
}
}
export { CreateUserService};