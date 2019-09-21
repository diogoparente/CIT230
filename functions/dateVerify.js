function dates() {
    var dayName = "Sunday";
      var month = "January";
      var dayNumber = 1;
      var year = 2019;
      var date1 = " ";
      
      var date1 = new Date();
      var year = date1.getFullYear();
      document.getElementById("currentYear").innerHTML = year;

      date2 = document.lastModified;
      document.getElementById("dateModified").innerHTML = date2;
}