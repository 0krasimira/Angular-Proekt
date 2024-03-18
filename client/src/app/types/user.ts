import { Painting } from './painting';

export interface User {
  
  paintings: Painting[];
  _id: string;
  email: string;
  username: string;
  password: string;

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