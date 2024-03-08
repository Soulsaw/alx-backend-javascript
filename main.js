const q1 = ["Jan", "Feb", "Mars"]
const q2 = ["Avr", "Mai", "Juin"]
const q3 = ["Jui", "Aout", "Sept"]
const q4 = ["Oct", "Nov", "Dec"]

const year = [...q1, ...q2, ...q3, ...q4]
console.log(year)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
for (let val of keys)
{
	console.log(val);
}