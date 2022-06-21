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

// const a = [1,2,3]
// console.time('loog')
// for( var item of a ) {
//     console.log(item);
// }
// console.timeEnd('loog')

// console.time('boog')
// a.forEach(item => console.log(item))
// console.timeEnd('boog')

// const human = [
//     { id: 1, name: 'A', gender: 'nam'},
//     { id: 2, name: 'B', gender: 'nam'},
//     { id: 3, name: 'C', gender: 'nu'},
//     { id: 4, name: 'D', gender: 'nu'},
//     { id: 5, name: 'E', gender: 'nam'},
// ]
// interface AccProps {
//     humans: string;
//     gender: string
// }
// interface ItemProps {
//     id: number;
//     name: string;
//     gender: string
// }
// console.time('map')
// let accMap: AccProps[] = [];
// human.forEach((item: ItemProps) => {
//     const { id, name, gender } = item;
//     if(gender === 'nam') {
//         const person = {
//             humans: name + id.toString(),
//             gender
//         }
//         accMap.push(person)
//     }
// })
// console.log('output',accMap);
// console.timeEnd('map')

// console.time('reduce')
// const OutPutReduce = human.reduce((acc: AccProps[], item: ItemProps) => {
//     const { id, name, gender } = item;
//     // console.log(typeof id.toString());
    
//     gender === 'nam' && acc.push({
//         humans: name + id.toString(),
//         gender
//     })    
//     return acc
// }, []);
// console.log('OutPutReduce', OutPutReduce)
// console.timeEnd('reduce')

// const a = 'Hello!!';
// const b = 5;
// const c = true;

// interface ArrTypes {
//     a?: string;
//     b?: number;
//     c?: boolean;
// }
// const arr: ArrTypes[] = [];

// arr.push(a as ArrTypes)
// console.log(arr);
interface InputProps {
    firstName: string;
    lastName: string;
    job?: job;
    isActive?: boolean;
}
type job = 'JavaScript' | 'TypeScript'
function validateEmail(input: InputProps): string | undefined {
    if(input.isActive) {
        return undefined;
    } else {
        return `${input.firstName}.${input.lastName}@gmail.com`;
    }
}

console.log(validateEmail({
    firstName: 'hoan',
    lastName: 'lekhaihoan',
    isActive: false
}));
