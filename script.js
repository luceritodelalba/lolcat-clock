//time
var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 7; // 7AM
var lunchTime = 12; // 12PM
var partyTime = 21; // 9PM
var napTime = lunchTime + 2; // 2PM

//partyTime
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

//timeselectors
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

//main function
var updateClock = function()
{ // text
	var messageText;
	var timeEventJS = document.getElementById("timeEvent");

	//image
	var lolcat = document.getElementById("lolcat");
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

	// conditions
	if (time == partyTime){
		image = "https://images.pexels.com/photos/38278/tiger-head-wildlife-animal-38278.jpeg?w=940&h=650&auto=compress&cs=tinysrgb%22";
		messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
		image = "https://images.pexels.com/photos/271955/pexels-photo-271955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb";
		messageText = "SHHHH! IZ NAP TIME...";
	} else if (time == lunchTime) {
		image = "https://i0.wp.com/consciouscat.net/wp-content/uploads/2017/03/cat-eating-table-e1489581489747.jpg?resize=550%2C366";
		messageText = "OMMNOMNOM! IZ FEED ME TIME";
	} else if (time == wakeupTime) {
	image="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?w=940&h=650&auto=compress&cs=tinysrgb";
		messageText = "NO! WHY IZ TIME TO GETTUP?";
	} else if (time < noon) {
		image = "https://media.giphy.com/media/LZaA5gGjbUJOw/giphy.gif";
		messageText = "I IZ CAT. ALL MORNING IS MORNING SNOOZE TIME.";
	} else if (time < evening) {
	   image = "https://icatcare.org/sites/default/files/kcfinder/images/images/cat-garden.jpg";
		messageText = "IZ EXPLORING TIME!";
	} else {
image = "https://images.pexels.com/photos/219770/pexels-photo-219770.jpeg?w=940&h=650&auto=compress&cs=tinysrgb";
	   messageText = "IZ SPY ON NEIGHBOUR CAT TIME";
	}

	//run
	timeEventJS.innerText = messageText;
	lolcat.src = image;

	//end main function

//clock
	var showCurrentTime = function()
	{
		// display the string on the webpage
		var clock = document.getElementById('clock');

		var currentTime = new Date();

		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		// Set Minutes
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}

		// Set Seconds
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}

		// put together the string that displays the time
		var clockTime = "it's " + hours + ':' + minutes + ':' + seconds;

		clock.innerText = clockTime;
	};
	showCurrentTime();
};
//run
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);
//end of clock

//party function
var partyEvent = function() {

   if (isPartyTime == false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY OVER? :(";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   }
};
//selector functions
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

//run partybutton
partyTimeButton.addEventListener("click", partyEvent);

//run selector event listeners

napTimeSelector.addEventListener("change", napEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
