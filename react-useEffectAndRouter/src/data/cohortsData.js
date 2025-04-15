const studentsCohortRanger = [
    { name: 'abdullah', age: 30, height: 9 },
    { name: 'juggernaut', age: 40, height: 9.5 },
    { name: 'redox', age: 50, height: 7 },
    { name: 'dolly', age: 55, height: 8 },
    { name: 'leaky', age: 40, height: 60 }
]

const studentsCohortIdan = [
    { name: 'zimbi', age: 34, height: 9 },
    { name: 'latty', age: 50, height: 9 },
    { name: 'idreesa', age: 80, height: 7 },
    { name: 'jagunjagun', age: 30, height: 8 },
    { name: 'alapata', age: 62, height: 40 }
]

const cohortsData = [
    {
      id: 1,
      name: "Ranger",
      mentor: "Abdulkabir",
      students: studentsCohortRanger,
      studentsNum: studentsCohortRanger.length 
    },
    {
      id: 2,
      name: "Ranger Derby",
      mentor: "juggernaut",
      students: studentsCohortIdan,
      studentsNum: studentsCohortIdan.length
    }
  ];

  export default cohortsData;
