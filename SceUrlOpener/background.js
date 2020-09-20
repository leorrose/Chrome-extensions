'use strict';
chrome.browserAction.onClicked.addListener(function(tab) {
	if(tab.url == 'https://moodle.sce.ac.il/'){
		let my_code = `
		if(typeof linkWrapperList !== 'undefined'){
			let linkWrapperList = document.getElementsByClassName('name');
		}
		else{
			linkWrapperList = document.getElementsByClassName('name');
		}
		if(typeof linkList !== 'undefined'){
			let linkList = [];
		}
		else{
			linkList = [];
		}
		for (var i = 0; i < linkWrapperList.length; i++) {
			if(linkWrapperList.item(i).childNodes.length > 0 && linkWrapperList.item(i).childNodes[0].tagName == 'A' && !linkWrapperList.item(i).childNodes[0].textContent.includes('MATLAB'))
				window.open(linkWrapperList.item(i).getElementsByTagName('a')[0].href, '_blank')
		}`
		chrome.tabs.executeScript(null, { code: my_code});
	}
});