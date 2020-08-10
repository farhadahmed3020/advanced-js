const students = [
    { id :21 , name:'Omar sunny'},
    { id :31 , name:'Maannaaa'},
    { id :41 , name:'Moyouri'},
    { id :71 , name:'Dibjol'}
];
const names = students.map (s => s.name);
const ids = students.filter ( s => s.id >40);
console.log(ids);
console.log(names);
