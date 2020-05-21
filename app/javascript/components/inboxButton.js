console.log("app/javascript/components/inboxButton.js is working");

const inboxCross = document.querySelector("#inbox-cross");
const conversationsList = document.querySelector("#conversations-list")
const inboxWord = document.querySelector("#inbox-word");
const tempBox = document.querySelector("#temp-box");
console.log(document.cookie);
// This is to get rid of the Google Adwords that has inserted
// itself into my cookies
// Split it into an array
// var allCookies = document.cookie;
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
	var cookieArray = document.cookie.split("; ");
	console.log("line 32: " + cookieArray);
	removeGoogle(cookieArray);
	console.log("line 34: " + cookieArray);
	if (cookieArray[0] == "displayed=yes") {
		// document.cookie = "displayed=";
		conversationsList.style.display = "block";
		inboxCross.style.display = "block";
		console.log("line37: " + cookieArray)
		clickInboxCross(cookieArray);
	} else if (cookieArray[0] == "displayed=no") {
		console.log("line40: " + cookieArray);
		conversationsList.style.display = "none";
		inboxCross.style.display = "none";
		clickInboxTitle(cookieArray);
	} else {
		document.cookie = "displayed=no";
		hiddenInboxBoolean();
	};
};

const clickInboxTitle = (cookieArray) => {
	console.log("Inbox title ready to be clicked");
	if (inboxWord) {
		inboxWord.addEventListener("click", () => {
			document.cookie = "displayed=yes";
			console.log("Inbox title clicked");
			console.log("line53: " + document.cookie);
			hiddenInboxBoolean();
		});
	};
};

const clickInboxCross = () => {
	console.log("Inbox cross is ready");
	if (inboxCross) {
		inboxCross.addEventListener("click", () => {
			console.log("close inbox button has been clicked");
			document.cookie = "displayed=no";
			console.log("Line 67: " + document.cookie)
			hiddenInboxBoolean();
		});
	};
};

export {clickInboxCross};
export { hiddenInboxBoolean };
export { clickInboxTitle };
export { removeGoogle };