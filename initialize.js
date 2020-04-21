var db = firebase.firestore();
var employeesRef = db.collection("employees");

employeesRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id);
    });
})

// employeesRef.doc("R.Dikles").set({
//     fName: "Ranice",
//     lName: "Dikles",
//     email: "aa@g.com",
//     age: 37,
//     gender: 'Female',
//     yearsOfExperience: 9,
//     isFullTime: true
// });

// employeesRef.doc("B.Smith").set({
//     fName: "Bob",
//     lName: "Smith",
//     email: "bb@g.com",
//     age: 28,
//     gender: 'Male',
//     yearsOfExperience: 8,
//     isFullTime: true
// });

// employeesRef.doc("J.Smith").set({
//     fName: "John",
//     lName: "Smith",
//     email: "jj@g.com",
//     age: 34,
//     gender: 'Male',
//     yearsOfExperience: 3,
//     isFullTime: true
// });