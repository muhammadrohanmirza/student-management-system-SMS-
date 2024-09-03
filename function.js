import student from "./studentdata.js";
// is say all student ke list and data aatee hay
export const getAllstudentList = () => {
    return student;
};
// is say sirf onsite student walay aaee gay
export const getonsitestudentList = () => {
    const result = student.filter((student) => student.isOnsiteAllow);
    return result;
};
// is say entery test passed walay student aaeee gay 
export const getentrytestpassedstudentlist = () => {
    const result = student.filter((student) => student.entryTest.isPassed);
    return result;
};
// is say sirf student ka data aeee gaaa rollno dalo gay tu aaee gaa
export const getstudentdata = (rollno) => {
    const findstudent = student.find((student) => student.rollno === rollno);
    return findstudent;
};
// is say ya pata calay ga k student onsite hay ya nahiii
export const checkstudentisonsiteallow = (rollno) => {
    const findstudent = student.find((student) => student.rollno === rollno && student.isOnsiteAllow);
    if (findstudent) {
        return true;
    }
    else {
        return false;
    }
};
