/*SC : Grok */

// Inisialisasi array untuk contoh
let arr = [1, 2, 3, 4];

// Operasi untuk Menambah Elemen
// Menambahkan di akhir
arr.push(5); // arr = [1, 2, 3, 4, 5]
console.log("Push:", arr);

// Menambahkan di awal
arr.unshift(0); // arr = [0, 1, 2, 3, 4, 5]
console.log("Unshift:", arr);

// Menyisipkan pada indeks tertentu
arr.splice(2, 0, 2.5); // arr = [0, 1, 2.5, 2, 3, 4, 5]
console.log("Splice (tambah):", arr);

// Operasi untuk Menghapus Elemen
// Menghapus elemen terakhir
let last = arr.pop(); // last = 5, arr = [0, 1, 2.5, 2, 3, 4]
console.log("Pop:", arr, "Dihapus:", last);

// Menghapus elemen pertama
let first = arr.shift(); // first = 0, arr = [1, 2.5, 2, 3, 4]
console.log("Shift:", arr, "Dihapus:", first);

// Menghapus pada indeks tertentu
arr.splice(1, 2); // arr = [1, 3, 4]
console.log("Splice (hapus):", arr);

// Operasi untuk Mengubah Array
// Mengganti elemen
arr[1] = 10; // arr = [1, 10, 4]
console.log("Ganti elemen:", arr);

// Mengurutkan
arr.sort((a, b) => a - b); // arr = [1, 4, 10]
console.log("Sort:", arr);

// Membalikkan urutan
arr.reverse(); // arr = [10, 4, 1]
console.log("Reverse:", arr);

// Mengisi array dengan nilai
arr.fill(0, 1, 3); // arr = [10, 0, 0]
console.log("Fill:", arr);

// Reset array untuk contoh berikut
arr = [1, 2, 3, 4];

// Operasi untuk Mengakses atau Mencari
// Mengambil elemen berdasarkan indeks
let elemen = arr[1]; // elemen = 2
console.log("Elemen indeks 1:", elemen);

// Memeriksa elemen
let hasThree = arr.includes(3); // hasThree = true
console.log("Ada 3?:", hasThree);

// Mencari indeks
let index = arr.findIndex(x => x > 2); // index = 2
console.log("Indeks elemen > 2:", index);

// Mencari elemen
let found = arr.find(x => x > 2); // found = 3
console.log("Elemen > 2:", found);

// Operasi untuk Transformasi
// Memetakan elemen
let doubled = arr.map(x => x * 2); // doubled = [2, 4, 6, 8]
console.log("Map:", doubled);

// Menyaring elemen
let evens = arr.filter(x => x % 2 === 0); // evens = [2, 4]
console.log("Filter:", evens);

// Mengurangi array
let sum = arr.reduce((acc, x) => acc + x, 0); // sum = 10
console.log("Reduce (jumlah):", sum);

// Membuat salinan bagian array
let slice = arr.slice(1, 3); // slice = [2, 3]
console.log("Slice:", slice);

// Operasi untuk Menggabungkan atau Memisahkan
// Menggabungkan array
let arr2 = [5, 6];
let combined = arr.concat(arr2); // combined = [1, 2, 3, 4, 5, 6]
console.log("Concat:", combined);

// Menggabungkan ke string
let joined = arr.join("-"); // joined = "1-2-3-4"
console.log("Join:", joined);

// Operasi untuk Iterasi
// Iterasi tanpa hasil baru
arr.forEach(x => console.log("ForEach:", x));

// Memeriksa semua elemen
let allPositive = arr.every(x => x > 0); // allPositive = true
console.log("Semua positif?:", allPositive);

// Memeriksa satu elemen
let hasEven = arr.some(x => x % 2 === 0); // hasEven = true
console.log("Ada genap?:", hasEven);

// Operasi untuk Menyalin atau Mengelola Struktur
// Membuat salinan array
let copy = [...arr]; // copy = [1, 2, 3, 4]
console.log("Copy:", copy);

// Mengubah panjang
arr.length = 2; // arr = [1, 2]
console.log("Ubah panjang:", arr);

// Operasi Khusus
// Mengakses elemen dari akhir
let lastElement = arr.at(-1); // lastElement = 2
console.log("Elemen terakhir (at):", lastElement);

// Memeriksa apakah array
let isArray = Array.isArray(arr); // isArray = true
console.log("Apakah array?:", isArray);