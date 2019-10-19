function dates() {
  var date1 = new Date();
  var year = date1.getFullYear();
  document.getElementById("currentYear").innerHTML = year;

  date2 = document.lastModified;
  document.getElementById("dateModified").innerHTML = date2;

  // Current Date: dayName, Number Month Year
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var currentDate = new Date()
  var currentDay = days[currentDate.getDay()];
  var currentNumDay = currentDate.getDate();
  var currentMonth = months[currentDate.getMonth()];
  var currentYear = currentDate.getFullYear();
  document.getElementById("currentDate").innerHTML = currentDay + ", " + currentNumDay + " " + currentMonth + " " + currentYear;

  //Hide or show the alert for pancakes
  if (currentDate.getDay() == 5)
    document.getElementById("pancake").classList.toggle("hideAlert");
}