let userName = "";
let dailyBudget = 0;
let dailyExpense = 0;

function getUserData() {
  userName = prompt("Lütfen adınızı giriniz:");
  dailyBudget = Number(prompt("Günlük bütçeniz ne kadar? (TL)"));
  dailyExpense = Number(prompt("Bugün ne kadar harcadınız? (TL)"));

  if (userName && !isNaN(dailyBudget)) {
    alert("Veriler kaydedildi. 'Günü Hesapla' butonuna basabilirsiniz.");
  } else {
    alert("Lütfen geçerli bilgiler giriniz!");
  }
}

function calculateDay() {
  let resultArea = document.getElementById("result-area");
  let statusMsg = document.getElementById("status-msg");
  let warningBox = document.getElementById("warning-box");

  document.getElementById("display-name").innerText =
    "Merhaba, " + userName + "!";
  document.getElementById("budget-val").innerText = dailyBudget;
  document.getElementById("expense-val").innerText = dailyExpense;

  let remaining = dailyBudget - dailyExpense;

  if (dailyExpense > dailyBudget) {
    statusMsg.innerText = "Bütçe Aşıldı!";
    statusMsg.className = "danger";
    warningBox.innerText =
      "Dikkat! " + Math.abs(remaining) + " TL zarardasınız.";
    warningBox.style.backgroundColor = "#ffebee";
  } else if (dailyExpense === dailyBudget) {
    statusMsg.innerText = "Sınırda!";
    statusMsg.className = "danger";
    warningBox.innerText = "Bütçenin tamamını kullandınız.";
    warningBox.style.backgroundColor = "#fff3e0";
  } else {
    statusMsg.innerText = "Güvendesiniz";
    statusMsg.className = "success";
    warningBox.innerText =
      "Harika! Bugün " + remaining + " TL tasarruf ettiniz.";
    warningBox.style.backgroundColor = "#e8f5e9";
  }

  resultArea.style.display = "block";
  console.log("Hesaplama yapıldı: " + userName);
}

function resetPanel() {
  let confirmReset = confirm("Paneli sıfırlamak istiyor musun?");

  if (confirmReset) {
    userName = "";
    dailyBudget = 0;
    dailyExpense = 0;
    document.getElementById("result-area").style.display = "none";
    alert("Panel başarıyla sıfırlandı.");
  }
}
