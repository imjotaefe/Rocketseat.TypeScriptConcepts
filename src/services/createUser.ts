
interface TechObject {
  tech: string,
  experience: number,
}

interface CreateUserInterface {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | TechObject>
}

export default function createUser({ name= '', email, password, techs}: CreateUserInterface){
  const user = {
    name,
    email,
    password,
    techs
  }

  return user;
}