export interface Student{
    name:string;
    id:number;
    qualification:qual[];
}
export interface qual{
    title:string;
    year:number;
    id:number;
    subjects:sub[];
}
export interface sub{
    id:number
    subname:string
    duration:string
}