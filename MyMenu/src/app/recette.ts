export interface Recette{
    id:number;
    titre:string;
    temps_prep:number;
    portions:number;
    url:string;
    ingredients:string[];
    instructions:string[];
}