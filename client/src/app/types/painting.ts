import { User } from "./user";

export interface Painting {
    
    title: string,
    author: User,
    year: number,
    technique: string,
    price: number,
    description: string,
    imageUrl: string,
    _id: string,
    likes: string[]; // Array of user IDs who liked the painting
}