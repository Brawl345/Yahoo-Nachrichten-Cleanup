// ==UserScript==
// @name       Yahoo Nachrichten Cleanup
// @version    1.1.0
// @namespace  https://github.com/Brawl345/Yahoo-Nachrichten-Cleanup
// @author	   iCON, Edward (orig)
// @description  Entfernt nervige Nachrichtenquellen von Yahoo! Nachrichten
// @include		 http*://de.nachrichten.yahoo.com/*
// @downloadURL  https://raw.githubusercontent.com/Brawl345/Yahoo-Nachrichten-Cleanup/master/cleanup.user.js
// @updateURL  https://raw.githubusercontent.com/Brawl345/Yahoo-Nachrichten-Cleanup/master/cleanup.user.js
// @icon https://raw.githubusercontent.com/Brawl345/Yahoo-Nachrichten-Cleanup/master/icon.png
// @grant          unsafeWindow
// ==/UserScript==

setInterval(removeSpam, 3000);
function removeSpam() {
var divTags = document.getElementsByTagName('div');
var divNames = ['Abendzeitung', 'Business Insider DE', 'Yahoo Nachrichten', 'Yahoo Nachrichten Deutschland', 'Yahoo Style Deutschland', 'Yahoo Sport Deutschland', 'Formel 1 | Yahoo Sports DE', 'Yahoo Video, Bitprojects', 'Yahoo, spot on news', 'Yahoo', 'Cover Media Video', 'Euronews Videos', 'WENN', 'Yahoo Stars', 'Zoomin.tv', 'yahoo-nachrichten-de', 'BLZ', 'KSTA', 'Yahoo Stars Deutschland', 'Jan Rübel'];
var found;
for (var i = 0; i < divTags.length; i++) {
  if (contains(divNames, divTags[i].textContent)) {
    found = divTags[i];
    parentBlock = getParent(getParent(getParent(found)));
    removeAllChildren(parentBlock);
  }
}
}

function getParent(o) {
  return o.parentNode;
}

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}

function removeAllChildren(o) {
	while (o.firstChild) {
  o.removeChild(o.firstChild);
}

}
