// task 1
const name = "Real Madrid";
let stadium = "Santiago Bernabeu";
const country = "Spain";
const year = 1902;
let coach;
let captain = null;
let shop = {
    name:"Magnum",
    'year of foundation':2007,
}
shop['country']="Kazakhstan";
shop.city="Almaty";
shop.name = "Small";
delete shop['year of foundation'];
console.log(shop);
shop ={
    name:"Alser",
}
console.log(shop);

// task 2
let vehicle = {
    brandName: "BMW",
    model: "X5",
};
vehicle.model = "M1";
delete vehicle.model

// task 3
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let sum=0;
for(let key in salaries){
    console.log(key+`: `+salaries[key]);
    sum+=salaries[key];
}
console.log(sum);