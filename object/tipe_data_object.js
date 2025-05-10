const person ={}

// ubah property atau atribut
person["nama"] = "Zidan"
person["umur"] = 30
person["alamat"] = "indonesia"

console.table(person)

delete person["umur"]
console.table(person)