export interface Student{
    id:number;
    studentname:string;
    markslist:marksList[];
}
export interface marksList{
  year:any;
  marks:marks[];

}
export interface marks{
    subject:string;
    marks:any;
}