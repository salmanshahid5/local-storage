let key = prompt('enter key you want to set');
let value = prompt('enter value you want to set');

localStorage.setItem(key,value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// removeitem is also method of local storage
if(key == red || key == blue){
    localStorage.removeItem("key");
}