chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        if(url && (url.match("http://*/*") || url.match("https://*/*"))){
            chrome.windows.create({"url": url, "incognito": true, state: 'maximized'});
        }
    });
});