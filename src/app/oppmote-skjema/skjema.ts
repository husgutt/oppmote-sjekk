import { Elev } from './elev';

export interface Skjema {
    id: string, 
    dato : string;
    elever : Elev[];
    present: boolean[];
    event : string;
}
