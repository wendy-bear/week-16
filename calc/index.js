
function selectName() {
    if (document.getElementById("carname").value == "80") {
      let parent = document.querySelector('#gearfuel-type');
      let gearfuelType = document.createElement("div");
        
      parent.appendChild(gearfuelType);

      gearfuelType.innerHTML = "<label>Вид КПП:<br><input id='radiobutton' name='kpp' value='5' type='radio'>Ручная</input><br><input id='radiobutton' name='kpp' value='8' type='radio'>Автомат</input><label><br><label>Вид топлива:<br><input id='radiobutton1' name='fuel' value='5' type='radio'>Бензин</input><br><input id='radiobutton1' name='fuel' value='8' type='radio'>ДТ</input><label>";
      document.getElementById("power-reserve").innerHTML = "";
      document.getElementById("gearfuel-type1").innerHTML = "";
      
      }
  if (document.getElementById("carname").value == "100") 
    { 
        let parent1 = document.querySelector('#gearfuel-type1');
        let gearfuelType = document.createElement("div");
        
        parent1.appendChild(gearfuelType);

        gearfuelType.innerHTML = "<label>Вид КПП:<br><input id='radiobutton' name='kpp' value='5' type='radio'>Ручная</input><br><input id='radiobutton' name='kpp' value='8' type='radio'>Автомат</input><label><br><label>Вид топлива:<br><input id='radiobutton1' name='fuel' value='5' type='radio'>Бензин</input><br><input id='radiobutton1' name='fuel' value='8' type='radio'>ДТ</input><label>";
       document.getElementById("power-reserve").innerHTML = "";
      document.getElementById("gearfuel-type").innerHTML = "";
      
    }

    if (document.getElementById("carname").value == "150") 
    {  
        let parentPower = document.querySelector('#power-reserve');
        let powerReserve = document.createElement("div");

        parentPower.appendChild(powerReserve);

        powerReserve.innerHTML = "<label>Запас хода:<br><input id='radiobutton2' name='reserve' value='5' type='radio'>больше 100 км</input><br><input id='radiobutton2' name='reserve' value='10' type='radio'>100-500</input><label>";
      document.getElementById("gearfuel-type").innerHTML = "";
      document.getElementById("gearfuel-type1").innerHTML = "";
        
    }
    
}


function calcSum() {

    let prices = []; 

  function colSelect() {
    let selectCarName = document.getElementById("carname");

    if (selectCarName.options[selectCarName.selectedIndex].value == '80') {
        prices.push(+selectCarName.options[selectCarName.selectedIndex].value);
  }
  if (selectCarName.options[selectCarName.selectedIndex].value == '100') {
    prices.push(+selectCarName.options[selectCarName.selectedIndex].value);
}
if (selectCarName.options[selectCarName.selectedIndex].value == '150') {
    prices.push(+selectCarName.options[selectCarName.selectedIndex].value);
}

if (document.getElementById("radiobutton").checked == true) {
    prices.push(+document.getElementById("radiobutton").value);
}
if (document.getElementById("radiobutton1").checked == true) {
    prices.push(+document.getElementById("radiobutton1").value);
}

//if (document.getElementById("radiobutton2").checked == true) {  // не понимаю на что тут ругается(((
//    prices.push(+document.getElementById("radiobutton2").value);
//}

if (document.getElementById("newcar").checked == true) {
    prices.push(+document.getElementById("newcar").value);
}
if (document.getElementById("usecar").checked == true) {
    prices.push(+document.getElementById("newcar").value);
}

if (document.getElementById("DTP").checked) {
    prices.push(+document.getElementById("DTP").value);
}

if (document.getElementById("repainting").checked) {
    prices.push(+document.getElementById("repainting").value);
}
if (document.getElementById("mindamage").checked) {
    prices.push(+document.getElementById("mindamage").value);
}


let sumArr = 0;
  for(let price of prices) {
  sumArr = sumArr + price;
  }

alert(sumArr);
}
colSelect();

}

