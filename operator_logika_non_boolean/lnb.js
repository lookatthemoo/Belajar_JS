let a = 5;
let b = 0;
let c = "Halo";
let d = null;

console.log(a || b);      // 5 (a adalah nilai pertama yang truthy)
console.log(b || c);      // "Halo" (c adalah nilai pertama yang truthy)
console.log(a && d);      // null (d adalah nilai pertama yang falsy)
console.log(c && a);      // 5 (a adalah nilai terakhir yang dievaluasi)
console.log(a ?? b);      // 5 (a bukan null/undefined, jadi diambil)
console.log(d ?? c);      // "Halo" (d adalah null, jadi ambil c)

const peson = {
    firstname: "John",
    lastname: "Doe"
}
const name = person.firstname || person.lastname;
console.log(name); // John