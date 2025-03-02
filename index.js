



let toFahrenheit = document.getElementById("toFahrenheit");
let toCelsius = document.getElementById("toCelsius");

let result = document.getElementById("result");





document.getElementById("convert").onclick = function(){


    let user_value = document.getElementById("textBox").value;
    user_value = Number(user_value);

function toFah(user_value){
    return (user_value * 9/5) + 32;
}

function toCel(user_value){
    return ((user_value - 32) * 5)/9;
}

let f = toFah(user_value);
f = f.toFixed(2);

let c = toCel(user_value);
c = c.toFixed(2);



    if(toFahrenheit.checked){
        result.textContent = `Fahrenheit is ${f}°F`;
    }
    else if(toCelsius.checked){
        result.textContent = `Celsius is ${c}°C`;
    }


}



