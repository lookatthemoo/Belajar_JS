let obj = {
  nama: "Budi",
  alamat: {
    kota: "Jakarta"
  }
};

console.log(obj.alamat?.kota);
console.log(obj.alamat?.kodePos);
console.log(obj.teman?.nama);

let arr = [1, 2, 3];
console.log(arr?.[0]);
console.log(arr?.[5]);