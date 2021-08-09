let dateAndTime;
let time;
let date;
let seconds;
let minutes;
let hours;
let dateForSmallScreen;
let dateForLargeScreen = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

function modifyTimeFormat(hours, zeroBeforeMinutes, minutes, zeroBeforeSeconds, seconds) {
	return `${hours}:${zeroBeforeMinutes}${minutes}:${zeroBeforeSeconds}${seconds}`;
}

function insertTime(time, meridiem) {
	document.getElementById("time").innerHTML = `${time}&nbsp;${meridiem}`;
}

function screenWidth(dateForSmallScreen) {
	setInterval(() => {
		dateAndTime = new Date();
		seconds = dateAndTime.getSeconds();
		minutes = dateAndTime.getMinutes();
		hours = dateAndTime.getHours();
		if (dateForSmallScreen.matches) {
			date = dateAndTime.toLocaleDateString("en-GB");
			if (minutes <= 9) {
				if (seconds <= 9) {
					if (hours == 12) {
						time = modifyTimeFormat(hours, "0", minutes, "0", seconds);
						insertTime(time, "PM");
					} else if (hours > 12) {
						time = modifyTimeFormat(hours - 12, "0", minutes, "0", seconds);
						insertTime(time, "PM");
					} else if (hours == 0) {
						time = modifyTimeFormat(hours + 12, "0", minutes, "0", seconds);
						insertTime(time, "AM");
					} else {
						time = modifyTimeFormat(hours, "0", minutes, "0", seconds);
						insertTime(time, "AM");
					}
				} else {
					if (hours == 12) {
						time = modifyTimeFormat(hours, "0", minutes, "", seconds);
						insertTime(time, "PM");
					} else if (hours > 12) {
						time = modifyTimeFormat(hours - 12, "0", minutes, "", seconds);
						insertTime(time, "PM");
					} else if (hours == 0) {
						time = modifyTimeFormat(hours + 12, "0", minutes, "", seconds);
						insertTime(time, "AM");
					} else {
						time = modifyTimeFormat(hours, "0", minutes, "", seconds);
						insertTime(time, "AM");
					}
				}
			} else {
				if (seconds <= 9) {
					if (hours == 12) {
						time = modifyTimeFormat(hours, "", minutes, "0", seconds);
						insertTime(time, "PM");
					} else if (hours > 12) {
						time = modifyTimeFormat(hours - 12, "", minutes, "", seconds);
						insertTime(time, "PM");
					} else if (hours == 0) {
						time = modifyTimeFormat(hours + 12, "", minutes, "", seconds);
						insertTime(time, "AM");
					} else {
						time = modifyTimeFormat(hours, "", minutes, "0", seconds);
						insertTime(time, "AM");
					}
				} else {
					if (hours == 12) {
						time = modifyTimeFormat(hours, "", minutes, "", seconds);
						insertTime(time, "PM");
					} else if (hours > 12) {
						time = modifyTimeFormat(hours - 12, "", minutes, "", seconds);
						insertTime(time, "PM");
					} else if (hours == 0) {
						time = modifyTimeFormat(hours + 12, "", minutes, "", seconds);
						insertTime(time, "AM");
					} else {
						time = modifyTimeFormat(hours, "", minutes, "", seconds);
						insertTime(time, "AM");
					}
				}
			}
		} else {
			date = dateAndTime.toLocaleDateString(undefined, dateForLargeScreen);
			if (minutes <= 9) {
				if (seconds <= 9) {
					if (hours == 12) {
						time = modifyTimeFormat(hours, "0", minutes, "0", seconds);
						insertTime(time, "PM");
					} else if (hours > 12) {
						time = modifyTimeFormat(hours - 12, "0", minutes, "0", seconds);
						insertTime(time, "PM");
					} else if (hours == 0) {
						time = modifyTimeFormat(hours + 12, "0", minutes, "0", seconds);
						insertTime(time, "AM");
					} else {
						time = modifyTimeFormat(hours, "0", minutes, "0", seconds);
						insertTime(time, "AM");
					}
				} else {
					if (hours == 12) {
						time = modifyTimeFormat(hours, "0", minutes, "", seconds);
						insertTime(time, "PM");
					} else if (hours > 12) {
						time = modifyTimeFormat(hours - 12, "0", minutes, "", seconds);
						insertTime(time, "PM");
					} else if (hours == 0) {
						time = modifyTimeFormat(hours + 12, "0", minutes, "", seconds);
						insertTime(time, "AM");
					} else {
						time = modifyTimeFormat(hours, "0", minutes, "", seconds);
						insertTime(time, "AM");
					}
				}
			} else {
				if (seconds <= 9) {
					if (hours == 12) {
						time = modifyTimeFormat(hours, "", minutes, "0", seconds);
						insertTime(time, "PM");
					} else if (hours > 12) {
						time = modifyTimeFormat(hours - 12, "", minutes, "0", seconds);
						insertTime(time, "PM");
					} else if (hours == 0) {
						time = modifyTimeFormat(hours + 12, "", minutes, "0", seconds);
						insertTime(time, "AM");
					} else {
						time = modifyTimeFormat(hours, "", minutes, "0", seconds);
						insertTime(time, "AM");
					}
				} else {
					if (hours == 12) {
						time = modifyTimeFormat(hours, "", minutes, "", seconds);
						insertTime(time, "PM");
					} else if (hours > 12) {
						time = modifyTimeFormat(hours - 12, "", minutes, "", seconds);
						insertTime(time, "PM");
					} else if (hours == 0) {
						time = modifyTimeFormat(hours + 12, "", minutes, "", seconds);
						insertTime(time, "AM");
					} else {
						time = modifyTimeFormat(hours, "", minutes, "", seconds);
						insertTime(time, "AM");
					}
				}
			}
		}
		document.getElementById("date").innerHTML = "on " + date;
	}, 1000);
}

dateForSmallScreen = window.matchMedia("(max-width: 491px)");
screenWidth(dateForSmallScreen);
dateForSmallScreen.addListener(screenWidth);
