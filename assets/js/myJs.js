// function getTimes
function getTimes() {
  $.ajax({
    type: 'GET',
    url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUNFD/Arrivals?app_key=%20a73f7a36fab42a930bf7cf8b1616d995&app_id=be29441e',
    dataType: 'Json',
    success: function (data) {
      $("#board").html("");
      var sorted = data.sort(function (a, b) {
        if (a.timeToStation > b.timeToStation) {
          return 1;
        }
        if (a.timeToStation < b.timeToStation) {
          return -1;
        }

        return 0;
      });

      $.each(data, function (key, value) {
        var time;
        if (value.timeToStation < 900) {
          if (value.timeToStation > 60) {
            time = parseInt(value.timeToStation / 60) + "min";
            $("#board").append(key + " /// " + value.lineName + " / " + value.stationName + " => " + value.destinationName + "<br>" + value.platformName + " " + time + "<br>");
          } else {
            time = "due";
            $("#board").append(key + " /// " + value.lineName + " / " + value.stationName + " => " + value.destinationName + "<br>" + value.platformName + " " + time + "<br>");
          }
        }
        console.log(key + " /// " + value.lineName + " / " + value.stationName + " => " + value.destinationName + " / " + value.platformName + " " + parseInt(value.timeToStation / 60) + "min");
      });
    }
  });
}
// END function getTimes


// function getClock
function getClock() {
  var date = new Date();

  var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };

  var dateFormatted = date.toLocaleTimeString("en-UK", options);

  document.getElementById('clockbox').innerHTML = dateFormatted;
}
// END function getClock


// window.onload
window.onload = function () {
  getClock();
  setInterval(getClock, 60000);
}
// END window.onload
