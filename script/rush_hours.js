const Day = 'Day_Proxy';
const Night = 'Night_Proxy';

if (h>=21 || h<1) {
  var RushHoursNew = Night;
} else {
  var RushHoursNew = Day;
}

$surge.setSelectGroupPolicy('RushHours', RushHoursNew);
$notification.post("Script called", "RushHours.js", "' RushHours' switched to '" + RushHoursNew + "'");
console.log("rush_hours.js script: ' RushHours' switched to '" + RushHoursNew + "'");

$done();
