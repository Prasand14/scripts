// var a = [1, 2, 3, 4, 5, 6, 7]

// for (i = 0; i < a.length; i++) {
//   console.log(a[i])
//   break
// }

// var obj = {
//   name: 'Prasand',
//   dept: 'Mech',
//   college: 'Amrita University',
//   address: [
//     { no: 1, street: 'Guindy' },
//     { no: 2, street: 'Madurai' },
//   ],
// }
// console.log(obj['name'])

// ARRAY OF OBJECTS [5 STUDENTS]

var student_List = [
  {
    name: 'User1',
    dept: 'CSE',
    mobile: 424812313242,
    email: 'user1@gmail.com',
    college: 'Amrita University',
    address: [
      { no: 1, street: 'Coimbatore' },
      { no: 2, street: 'Bangalore' },
    ],
    marks: [44, 16, 53, 90],
  },
  {
    name: 'User2',
    dept: 'CSE',
    mobile: 4248328745242,
    email: 'user2@gmail.com',
    college: 'Amrita University',
    address: [
      { no: 1, street: 'Coimbatore' },
      { no: 2, street: 'Bangalore' },
    ],
    marks: [22, 34, 55, 66],
  },
  {
    name: 'User3',
    dept: 'CSE',
    mobile: 42128828745242,
    email: 'user3@gmail.com',
    college: 'Amrita University',
    address: [
      { no: 1, street: 'Coimbatore' },
      { no: 2, street: 'Bangalore' },
    ],
    marks: [74, 82, 53, 84],
  },
]

for (i = 0; i < student_List.length; i++) {
  console.log(student_List[i].name, student_List[i].marks)
}
