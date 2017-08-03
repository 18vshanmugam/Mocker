chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    if(command = "mock") {
        chrome.tabs.executeScript(null, {file: "mockAndCopy.js"});
    }
});
      
console.log("here");