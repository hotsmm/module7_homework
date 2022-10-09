Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:
•	Имена классов, свойств и методов должны быть информативными;
•	Соблюдать best practices;
•	Использовать синтаксис ES6.

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
