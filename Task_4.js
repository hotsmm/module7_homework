Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)


Общие требования:

Имена функций, свойств и методов должны быть информативными
Соблюдайте best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

Ответ:

class ElectricalDevice
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isEnabled = false;
  }
  
  plugIn()
  {
    console.log(this.name + " is work!");
    this.isEnabled = true;
  }
  
  getPowerUsed()
  {
    return this.isEnabled ? this.power : 0;
  }
}

const radiator = new ElectricalDevice('radiator', 83)
const iron = new ElectricalDevice('iron', 52);

console.log(radiator.getPowerUsed() + iron.getPowerUsed());

radiator.plugIn();
console.log(radiator.getPowerUsed() + iron.getPowerUsed());

iron.plugIn();
console.log(radiator.getPowerUsed() + iron.getPowerUsed());
