// create a function name ListofTeachers and store 5 teachers in an array and
//print all the teachers using forEach method.

const ListofTeachers=()=>{
    let teachers = ["OOP Teacher", "HCI Teacher", "DCN Teacher", "JS Teacher", "Math Teacher"];
    console.log(teachers);
    teachers.forEach=(teacherlist)=>{
        console.log(teacherlist)
    }
}
ListofTeachers();