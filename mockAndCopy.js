
function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}

var toMock = getSelectionText();

var mocked = "";

var nextMock = false;
var tripleMock = 0;

for(char in toMock) {
    if(nextMock && tripleMock < 3) {
        let rand = Math.random();
        if(rand <= .37) {
            mocked += toMock[char].toLowerCase();
            tripleMock++;
        } else {
            mocked += toMock[char].toUpperCase();
            nextMock = false;
            tripleMock = 0;
        }
    } else if (tripleMock == 3) {
        mocked += toMock[char].toUpperCase();
        tripleMock = 0;
    } else {
        mocked += toMock[char].toLowerCase();
        nextMock = true;
    }
    
    if(char == toMock.length-1) {
        console.log("here?!")
        console.log('mocked: ', mocked);
        Copied = mocked.createTextRange();
        Copied.execCommand("Copy");

    }
}


alert(mocked)

