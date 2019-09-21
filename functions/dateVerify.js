function dates() {
      var date1 = new Date();
      var year = date1.getFullYear();
      document.getElementById("currentYear").innerHTML = year;

      date2 = document.lastModified;
      document.getElementById("dateModified").innerHTML = date2;
}