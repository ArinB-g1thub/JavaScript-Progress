// Create showLastSubject, store 5 subjects, print last subject.

function showLastSubject(){
    let Subjects = ["JS", "Java", "Python", "OS", "HCI"];
    
    console.log("List of Subjects: ")

    for (let i = 0; i<Subjects.length; i++){

        console.log(`${i+1}. ${Subjects[i]}`);
    }
    console.log();
    let LastSubject = Subjects[Subjects.length - 1];
    console.log("Last Subject is: " + LastSubject);

}
showLastSubject();