// TypeScript Version: 2.8
// Setup unit test với ts-jest
// Static type checking

// const arrNumber: number[] = [1,4,3,6,8,5,7,9,2];

// const sortArrNumber = (arr: number[]): number[] => {
//     return arr.sort((a, b) => a - b);
// }

// console.log(sortArrNumber(arrNumber));

// const arrNumber: number[] = [1,5,6,8,9,10,15,5,10,8,9];

// Lọc phần tử trùng nhau với filter và indexOf

// const duplicateFilter = (arr: number[]): number[] => {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// Lọc phần tử trùng nhau với Array.from(new Set(arr))

// const duplicateFilter = (arr: number[]): number[] => {
//     return Array.from(new Set(arr));
// }
// console.log(duplicateFilter(arrNumber));


// explicit type
/* Khai báo kiểu dữ liệu tường mình ví dụ  */
// const explicitName: string = 'Nguyen Van A'; // khai báo biến explicitName là kiểu dữ liệu string

// Infered type
/* TypeScript có thể tự hiểu được Type của một biến...  */
// const Count = 123; // biến Count là kiểu dữ liệu number


// Searching for a value in an array
// const arrSearch: string[] = ['Lê Khải Hoàn', 'Trương Thị Chuyên', 'Lê Huy Hoàng', 'Lê Phương Trúc'];

// const searchValue = (arr: string[], value: string): any => {
//     const a = arr.filter(item => item.toLowerCase() === value);
//     console.log(a);
    
// }

// searchValue(arrSearch, 'lê khải')

// const a = [
//     {
//         class: '1',
//         value: 'A'
//     },
//     {
//         class: '2',
//         value: 'B'
//     },
//     {
//         class: '3',
//         value: 'C'
//     },
//     {
//         class: '4',
//         value: 'D'
//     }
// ]

// const b = [2, 3, 4, 8, 5]

// const arrClass = a.map(item => item.class);
// console.log(arrClass.filter(item => b.indexOf(Number(item)) !== -1));

const a = [1,2,3]
console.time('loog')
for( var item of a ) {
    console.log(item);
}
console.timeEnd('loog')

console.time('boog')
a.forEach(item => console.log(item))
console.timeEnd('boog')