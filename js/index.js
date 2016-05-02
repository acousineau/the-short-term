var countdown = function() {
  var now = moment();
  var releaseDate = moment('2016-05-13');
  var duration = moment.duration(releaseDate - now, 'milliseconds');

  document.getElementById("countdown").innerHTML = 
    duration.days() + ':' +
    duration.hours() + ':' +
    duration.minutes() + ':' +
    duration.seconds()
}

countdown();
setInterval(countdown, 1000);
