/*jslint browser:true*/
'use strict';

var arrivalTime = new XMLHttpRequest();
var tObj;

// GET THE ARRIVAL TIME
arrivalTime.open('GET','https://api.tfl.gov.uk/StopPoint/940GZZLUNFD/Arrivals?app_key=%20a73f7a36fab42a930bf7cf8b1616d995&app_id=be29441e', true);
arrivalTime.responseType = 'text';
arrivalTime.send(null);

arrivalTime.onload = function() {
	if (arrivalTime.status === 200){
		tObj = JSON.parse(arrivalTime.responseText);
		console.log(tObj);
		document.getElementById('board').innerHTML = tObj.timeToStation;
	} //end if
}; //end function

