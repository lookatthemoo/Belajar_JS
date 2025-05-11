//misalnya kamu mau mendefinisikan variabel dengan nilai default
// jika variabel tersebut bernilai null atau undefined maka kita bisa menggunakan nullish coalescing operator
// nullish coalescing operator adalah operator yang digunakan untuk memberikan nilai default pada variabel

let nama = null;
let hasil = nama ?? "Tamu";
console.log(hasil);

let umur = 0;
let defaultUmur = umur ?? 18;
console.log(defaultUmur);

let data = undefined;
let output = data ?? "Tidak ada data";
console.log(output);