// TypeScript Version: 2.8
// Setup unit test với ts-jest
// Static type checking

// const arrNumber: number[] = [1,4,3,6,8,5,7,9,2];

// const sortArrNumber = (arr: number[]): number[] => {
//     return arr.sort((a, b) => a - b);
// }

// console.log(sortArrNumber(arrNumber));

const arrNumber: number[] = [1,5,6,8,9,10,15,5,10,8,9];

// Lọc phần tử trùng nhau với filter và indexOf

// const duplicateFilter = (arr: number[]): number[] => {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// Lọc phần tử trùng nhau với Array.from(new Set(arr))

const duplicateFilter = (arr: number[]): number[] => {
    return Array.from(new Set(arr));
}
console.log(duplicateFilter(arrNumber));