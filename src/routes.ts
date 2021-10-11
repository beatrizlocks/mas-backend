import { Router, Request, Response, response } from "express";
import {UserController} from './controller/UserController';

interface UserRequest{
    name:string;
    email:string;
    password:string;
}

const userController = new UserController()
const routes = Router();

routes.post('/user',() => console.log('User route'));
routes.post('/activy',() => console.log('Activy route'));
routes.post('/courseunit',() => console.log('courseunit route'));

routes.get('/user', (request, response) => response.json({
    message:"hello world"
}))

export default routes;
