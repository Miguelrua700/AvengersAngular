import { Power} from "./power";

export interface Hero {
    alias: string;
    strength: string;
    operatingLocation: string;
    weight: number;
    height: number;
    species: string;
    origin: string;
    photo: string;
    currentStatus: string;
    powerList: Power[];
}