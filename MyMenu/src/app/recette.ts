export interface Recette{
    id:number;
    titre:string;
    temps_prep:string;
    portions:number;
    url:string;
    ingredients:string[];
    instructions:string[];
}