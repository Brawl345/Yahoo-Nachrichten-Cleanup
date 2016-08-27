// ==UserScript==
// @name       Yahoo Nachrichten Cleanup
// @version    1.0
// @namespace  https://github.com/Brawl345/Yahoo-Nachrichten-Cleanup
// @author	   iCON, Edward (orig)
// @description  Entfernt nervige Nachrichtenquellen von Yahoo! Nachrichten
// @include		 http*://de.nachrichten.yahoo.com/*
// @downloadURL  https://raw.githubusercontent.com/Brawl345/Yahoo-Nachrichten-Cleanup/master/cleanup.user.js
// @updateURL  https://raw.githubusercontent.com/Brawl345/Yahoo-Nachrichten-Cleanup/master/cleanup.user.js
// @icon https://raw.githubusercontent.com/Brawl345/Yahoo-Nachrichten-Cleanup/master/icon.png
// @grant          unsafeWindow
// ==/UserScript==

setInterval(removeSpam, 2000);
function removeSpam() {
var spanTags = document.getElementsByTagName('span');
var spamNames = ['Abendzeitung', 'Business Insider', 'Yahoo Nachrichten', 'Yahoo Video, Bitprojects', 'Yahoo, spot on news', 'Yahoo', 'Cover Media Video'];
var found;
for (var i = 0; i < spanTags.length; i++) {
  if (contains(spamNames, spanTags[i].textContent)) {
    found = spanTags[i];
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