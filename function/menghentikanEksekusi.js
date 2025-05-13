//menghentikan eksekusi dengan return 

function isContains(array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}
const array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,5]
const searchValue=5
const result = isContains(array, searchValue);
console.log(result); 