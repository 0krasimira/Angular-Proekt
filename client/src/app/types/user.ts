import { Painting } from './painting';



export interface User {
  
  paintings?: Painting[]
  _id: string;
  email: string;
  password: string;
  token: string;
}

export interface UserForAuth extends User {
 
  _id: string;
  email: string;
  password: string;
  token: string;
  paintings?: Painting[]
}



// export interface UserForAuth {
//   firstName: string;
//   email: string;
//   phoneNumber: string;
//   password: string;
//   id: string;
// }

// export interface ProfileDetails {
//   username: string;
//   email: string;
//   tel: string;
// }