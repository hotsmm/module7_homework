Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.

function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const neighbour1 = {
    name: "Alex", 
    floor: 6,
    flat: 182,
  };

console.log(showProps(neighbour1, "floor"));  
console.log(showProps(neighbour1, "street")); 

