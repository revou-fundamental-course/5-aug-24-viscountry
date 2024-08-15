// INI JAVASCRIPT

// Untuk buat variabel
const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

// Untuk menghandle saat user menekan tombol submit dan reset
form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

//Saat tombol reset ditekan maka akan kembali seperti semula
function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "";
}

//Saat tombol submit ditekan maka fungsi ini akan berjalan
function onFormSubmit(e) {
  e.preventDefault();

//untuk membuat variabel
  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);
  const age = parseFloat(form.age.value)

//untuk membuat alert dikarenakan user tidak melengkapi data
  if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <=0) {
    alert("Tolong lengkapi data diri anda! :D");
    return;
  }
//untuk melakukan perhitungan BMI dan membuat hasil deskrispi
  const heightInMeters = height / 100; // cm -> m
  const bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi);

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `<strong>${desc}</strong>`;
}

//hasil-hasil deskripsi sesudah mendapatkan hasil BMI
function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight (anda kekurangan berat badan)";
  } else if (bmi < 25) {
    return "healthy (Selamat! Berat badan anda ideal)";
  } else if (bmi < 30) {
    return "overweight (anda kelebihan berat badan)";
  } else {
    return "obese (Jaga kesehatan anda! anda mengalami obesitas)";
  }
}