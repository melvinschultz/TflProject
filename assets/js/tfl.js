

<script>
   function get_times() {
  	  $.ajax({
  		    type: 'GET',
  		    url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUNFD/Arrivals?app_key=%20a73f7a36fab42a930bf7cf8b1616d995&app_id=be29441e',
  		    dataType: 'Json',
  		    success: function(data) {
  			     $.each(data, function(key, value) {
  				      var line = value.lineName;
  				      var stop_name = value.stationName;
                var destination = value.destinationName
  				      var time = value.timeToStation;
  				      $("#board").append(line+ "" +stop_name+ "" +destination+ "" +time+ "<br>")
  			     });
  		    }
  	    });
    }

  </script>

   time < 1 ? time = "due" : time = time+ "min";