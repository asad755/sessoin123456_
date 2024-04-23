let teacher = {
    name: "John",
    experience: "10",

    teach() {
        console.log("The responsibilaty of a Good teacher and  Teaching...");
    },
    check(marks: number, name:string) {
        console.log(`youer name ${name} & Marks are : ${marks}`);
    }
}
teacher.teach();
teacher.check(100, "John");