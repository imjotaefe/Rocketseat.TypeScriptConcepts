import { Request, Response } from 'express'
import createUser from './services/createUser';

export function helloWorld( request: Request, response: Response ){
  const user = createUser({name: 'joão', email: 'teste@gmail.com', password: '123', techs: [{tech: 'Java', experience: 100}]});
  return response.json(user)
}