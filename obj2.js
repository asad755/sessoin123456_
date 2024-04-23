var teacher = {
    name: "John",
    experience: "10",
    teach: function () {
        console.log("The responsibilaty of a Good teacher and  Teaching...");
    },
    check: function (marks, name) {
        console.log("youer name ".concat(name, " & Marks are : ").concat(marks));
    }
};
teacher.teach();
teacher.check(100, "John");
