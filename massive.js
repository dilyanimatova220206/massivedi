// array  ->  []
// let arr = [123 , "str" , true, false , [12 , false] ]
// arr.splice(  0 , 4, "IT ACADEMY" , 23 , true)
// console.log(arr)



// arr.unshift("motion") - алдына дагы бир созду кошуп коет
// arr.shift() - алдынан бир созду алып салат
// arr.push( true , false) - артынан бир созду кошот
// arr.pop() - артынан бир созду алат
// console.log(arr)
// console.log(arr[2])
// console.log(arr.pop())
// console.log(arr.shift())


//
// let arr = [1,3,6,7,10]
// arr.splice( 0 , 1 ," 1 , 2, 3")
// arr.splice(1, 2 , "4 , 5, 6")
// arr.splice(3, 5 , "8 , 9, 10")
// console.log(arr)

// let arr = [2,3,5,1,9,6,4,8,7,10,12,24]
// console.log(arr.sort((a,b) => {
//     return  a -b
// }  ))


// function myfn (str) {
//      return str.split('').join('*')
// }
// console.log(myfn('motion'))

// let str = 'motion'
//     if (str % 2 ===0){
//         console.log(true)
//     }else {
//         console.log(false)
//     }



// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.filter(el=>{
//     return  el > 5
// }).reduce((acc , el )=>{
//     return  acc + el
// }))

// arr.pop()
// console.log(arr.pop())


// arr.splice(0,10 , true,false)
// console.log(arr)
//

// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.filter( el =>{
//     return el % 2 === 0
// }))



// function arrx (arr) {
//     let sum = 0
//     for (let arr = 1 ; arr <=10 ; arr++) {
//         console.log(arr % 2 === 0)
//     }
//     return sum
// }
//
// console.log(arrx([1,2,3,4,5,6,7,8,9,10]))



// function countSheeps(arrayOfSheep) {
//  let sum = 0
//  for ( let i = 0 ; i < arrayOfSheep.length ; i++){
//      if (arrayOfSheep[i] ) {
//       sum ++
//      }
//  }
//  return sum
// }
//
//  console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true ]))

// for (let i = 1; i <= 50 ; i++) {
//     console.log(i)
// }

// 1 Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let arr = ["a,b,c"]
// arr.push(1, 2, 3)
//
//
// console.log(arr)


// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// let  a = [1, 2, 3]
//  let b = [4, 5, 6 ]
//
//
// console.log(a.concat(b))


// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let a = [1, 2, 3]
// a.push( 4, 5, 6)
//
// console.log(a)

// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let a = [1, 2, 3]
// a.unshift( 4, 5, 6)
//
// console.log(a)

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let a =   ['js', 'css', 'jq']
// console.log(a.shift())

// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let a = ['js', 'css', 'jq']
// console.log(a.pop())


// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let a =  [1, 2, 3, 4, 5]




// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let a = [1, 2, 3, 4, 5]
// a.splice(1,2)
// console.log(a)
//
// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let a =  [1, 2, 3, 4, 5]
// a.splice(0,1)
// a.splice(3,4)
// console.log(a)
//
// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let a =  [1, 2, 3, 4, 5]
// a.splice(3,0, 'a', 'b', 'c' )
// console.log(a)
//
// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//  let a = [1, 2, 3, 4, 5]
// a.splice(1,0,"a, b")
// a.splice(5,0, "c")
// a.splice(7,0,"e")
// console.log(a)
// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let a =  [3, 4, 1, 2, 7]
// a.sort()
// console.log(a)














// дз

// Во всех задачах используйте только методы map, filter.

// 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.
// let ret =  [315, 64, 75, 43, 65, 63]
// console.log(ret.map(el =>{
//     return el + el
// }))




// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию,
// //     изменяющую букву а в каждом имени на я и выведите в консоль.
// let arr = ['Аскар', 'Баяман', 'Калмамат']
// console.log(arr.map(el =>{
//     return el.toLowerCase().replace(/а/g,"я")
// }))


// let str = "Аскар"
// console.log(str.toLowerCase().replaceAll("а" , "я"))
// console.log(str.toLowerCase().replace("а","я"))


// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, которая выводит только те имена,
//     где есть буква к и выведите в консоль.
// let str = ['Аскар', 'Баяман', 'Калмамат']
// console.log(str.filter((el,idx) =>{
//     return el.includes("к")
// }))




// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.
// let mas =  [4, 54, 49]
// console.log(mas.map(el =>{
//     return el ** 2
// }))

// 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.

// let arr = [3134, 4, -143, -245, -214]
// console.log(arr.filter(el =>{
//     return el < 0
// }))

// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let str =  [3, 51, 30, 54, 60]
// console.log(str.map(el =>{
//     if (el % 2 === 0)
//         console.log(el)
// }))

// 7. Вам дан массив ['tommy', " sarah', lilya', 'gigi']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let arr = ['tommy',"jonniess" , "sarah", "rihanna", 'gii']
// console.log(arr.filter((el) =>{
//     return el.length > 6
// }))

// 8. Вам дан массив c. Посчитайте количество отрицательных чисел в этом массиве.
// let str = [-13, 96, -41, -28, 40]
// console.log(str.filter((el =>{
// return el < 0
// })).length)
// 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
// //     Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// let str = [3, 51, -30, -54, 60]
// console.log(str.filter((el =>{
//     if (el > 30 ){
//         console.log(el ** 2)
//     }
// })))

// 10. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.
// let str =  [55, 44, 55, 44, 15, 49]
// console.log(str.filter(el =>{
//     return str.indexOf(el) === str.lastIndexOf(el)
// }))

// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию,
//     которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).

// let str = [NaN, 0, 77, false, -17, '',undefined, 99, null]
// console.log(str.filter((el , idx) =>{
//     return el
// }))


// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.
// let str = ['Бегимай', 'Баяман', 'Калмамат']
// console.log(str.map((el ) =>{
//     return el.length
// }))






// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.map((el , idx )=>{
//     return el + idx
// }))



































