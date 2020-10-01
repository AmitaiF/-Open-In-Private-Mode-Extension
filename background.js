chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://stackoverflow.com/";
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
	chrome.windows.create({"url": url, "incognito": true, "state":"maximized"});
  });
  
});