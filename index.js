function mult(value) {
  let promptValue = value;

  let promptVL = document.querySelector(".promptVL");
  let meterVL = document.querySelector(".meters");
  let feetsVL = document.querySelector(".feets");
  let gallonVL = document.querySelector(".gallon");
  let litersVL = document.querySelector(".liters");
  let kilosVL = document.querySelector(".kilos");
  let poundsVL = document.querySelector(".pounds");  
}

// Feet to Meters
  meter = promptValue / 3.2808;
  // Meters to Feet
  feet = promptValue * 3.2808;

  // Liters to gallon
  gallon = promptValue / 3.785;

  // gallon to Liters
  liter = promptValue * 3.785;

  // Kilograms to Pounds
  kilo = promptValue * 2.2046;

  // Pound to kilo
  pound = promptValue / 2.2046;

// Display

  // promptVL.textContent = promptValue
  meterVL.textContent = promptValue + " Feet = " + meter.toFixed(3) + " meters";
  feetsVL.textContent =
    promptValue + " meters = " + feet.toFixed(3) + " Feet" + " |";
  gallonVL.textContent =
    promptValue + " liters = " + gallon.toFixed(3) + " gallons" + " |";
  litersVL.textContent =
    promptValue + " gallons = " + liter.toFixed(3) + " liters";
  kilosVL.textContent =
    promptValue + " kilos = " + kilo.toFixed(3) + " pounds" + " |";
  poundsVL.textContent =
    promptValue + " pounds = " + pound.toFixed(3) + " kilos";
  return;
}
