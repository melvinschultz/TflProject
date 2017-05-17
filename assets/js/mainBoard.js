$.connection.hub.logging = true;
$.connection.hub.url = "https://push-api.tfl.gov.uk/signalr/hubs/signalr";

var hub = $.connection.predictionsRoomHub;
hub.client.showPredictions = updateBoard;

$.connection.hub.start()
                .done(function() {
console.log("tfl.predictions: connection started");
    
var lineRooms = [{ "LineId": "northern", "NaptanId": "940GZZLUODS" }];

hub.server.addLineRooms(lineRooms)
          .done(function () {
             console.log("tfl.predictions: Invocation of addLineRooms succeeded");
             return;
          })
         .fail(function (error) {
             console.log("tfl.predictions: Invocation of addLineRooms failed. Error: " + error);
             return;
         });
    
});

function updateBoard(data) {
            $("#board").empty();
            data.sort(sortByTts);
  
            $.each(data, function( index, prediction ) {
              var mins = Math.floor(prediction.TimeToStation/60);
              var due = mins === 0 ? "Due" : mins + "m"; 
                $("#board").append("<tr><td>" + prediction.Towards + "</td><td>" + due + "</td><td>" + prediction.CurrentLocation + "</td></tr>");
            });
    
            console.log(data);
            return true;
};

function sortByTts(a, b) {
  return ((a.TimeToStation < b.TimeToStation) ? -1 : ((a.TimeToStation > b.TimeToStation) ? 1 : 0));
};