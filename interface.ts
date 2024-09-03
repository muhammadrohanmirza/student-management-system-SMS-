
export interface entryTest{
    isPassed: boolean,
    obtainMarks:number,
    totalMarks:number,
}

export interface student {
id:number;
firstname:string;
lastname:string;
    rollno:number;
    email:string;
    isOnsiteAllow: boolean;
    entryTest: entryTest;
}



