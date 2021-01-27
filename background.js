chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.closeThis) {
        chrome.tabs.remove(sender.tab.id);
        chrome.windows.getCurrent(minimize_win);
    }
});

function minimize_win(windows) {
    console.log(windows.id);
    chrome.windows.update(windows.id, { state: 'minimized' });
}