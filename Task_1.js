Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.

const obj = {
	rabbit: "ears",
  fox: "tail"
};
let anymal = Object.create(obj);
anymal.bear = 'paw';
anymal.wolf = 'fang';
anymal.hedgehog = 'needles';
function test(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) console.log(`${key}: ${obj[key]}`);
	}
}
test(anymal);


// Или 

const neighbour1 = {
  Имя: 'Сергей',
  Этаж: '8',
  Квартира: '234'
 }
const key1 = 'Имя';
const key2 = 'Этаж';
const key3 = 'Квартира';
console.log(`${key1}: ${neighbour1[key1]}, ${key2}: ${neighbour1[key2]}, ${key3}: ${neighbour1[key3]}`)

