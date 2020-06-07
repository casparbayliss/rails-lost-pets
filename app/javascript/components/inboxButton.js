console.log("app/javascript/components/inboxButton.js is working");

const collapseButton = document.querySelector("#collapse-inbox-button");
const conversationsList = document.querySelector("#conversations-list")
const expandButton = document.querySelector("#expand-inbox-button");
console.log(document.cookie);
// This is to get rid of the Google Adwords that has inserted
// itself into my cookies
// Split it into an array
// Set the regex as the beginning of my custom cookies
const regex = /^displayed/
const removeGoogle = (cookieArray) => {
	var j = 0;
	while (j < cookieArray.length) {
		if (regex.test(cookieArray[j]) == false ) {
			cookieArray.splice(j, 1);
		} else {
			j++;
		};
	};
	console.log("line 25: " + cookieArray);
	return cookieArray;
};

const hiddenInboxBoolean = () => {
	console.log("hiddenInboxBoolean has been activated");
	// If clause checks that user is logged in
	if (conversationsList) {
		console.log("conversationsList exists");
		// Split the cookies to remove Google
		var cookieArray = document.cookie.split("; ");
		console.log("line 32: " + cookieArray);
		// Remove Google adwords
		removeGoogle(cookieArray);
		console.log("line 34: " + cookieArray);
		// If the cookies say that the inbex should be displayed:
		if (cookieArray[0] == "displayed=yes") {
			// document.cookie = "displayed=";
			conversationsList.style.display = "block";
			collapseButton.style.display = "block";
			expandButton.style.display = "none";
			console.log("line37: " + cookieArray)
			clickInboxCross(cookieArray);
		// Else if the cookies show not to be displayed:
		} else if (cookieArray[0] == "displayed=no") {
			console.log("line40: " + cookieArray);
			// Setting the views
			// Setting the conversation list to not visible
			conversationsList.style.display = "none";
			// Allowing the expand button
			expandButton.style.display = "block";
			// Removing the collapse button
			collapseButton.style.display = "none";
			clickInboxTitle(cookieArray);
		// Otherwise set the cookies to not be displayed:
		} else {
			document.cookie = "displayed=no";
			hiddenInboxBoolean();
		};
	};
};

const clickInboxTitle = (cookieArray) => {
	console.log("Inbox title ready to be clicked");
	// If clause checks that the expand button is there
	if (expandButton) {
		expandButton.addEventListener("click", () => {
			// Set the cookie to be displayed
			document.cookie = "displayed=yes";
			console.log("Expand button clicked");
			console.log("line53: " + document.cookie);
			// Feed back to create a constant loop
			hiddenInboxBoolean();
		});
	};
};

const clickInboxCross = () => {
	console.log("Inbox cross is ready");
	if (collapseButton) {
		collapseButton.addEventListener("click", () => {
			console.log("close inbox button has been clicked");
			// Set the cookie to not be displayed
			document.cookie = "displayed=no";
			console.log("Line 67: " + document.cookie)
			// Feed back to create a constant loop
			hiddenInboxBoolean();
		});
	};
};


export { hiddenInboxBoolean };