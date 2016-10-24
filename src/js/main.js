setInterval(function () {

    var today = new Date(), //gets the browser's current time
    	electionDay = new Date("Nov 8 2016 16:00:00 GMT-0700 (PDT)"), //sets the countdown
    	msPerDay = 24 * 60 * 60 * 1000,
    	timeLeft = (electionDay.getTime() - today.getTime()),
    	daysLeft = Math.floor(timeLeft / msPerDay),
    	hrsLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
    	minsLeft = Math.floor((timeLeft / 1000 / 60) % 60),
    	secsLeft = Math.floor((timeLeft / 1000) % 60);
	
	document.getElementById("countdown-header").innerHTML = (
		"<div class='time'><div class='days'>"    +  daysLeft  + "</div><div class='text'>DAYS</span></div></div>"  + 
		"<div class='time'><div class='hours'>"   +  hrsLeft   + "</div><div class='text'>HOURS</span></div></div>" + 
		"<div class='time'><div class='minutes'>" +  minsLeft  + "</div><div class='text'>MINUTES</span></div></div>" +
		"<div class='time'><div class='seconds'>" +  secsLeft  + "</div><div class='text'>SECONDS</span></div></div>"
	);

}, 1000);