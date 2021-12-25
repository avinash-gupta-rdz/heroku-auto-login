window.onload = function() {

    chrome.storage.sync.get(['email'], function(result) {
        console.log('email from storage ' + result.email);
        document.querySelector('input[type="text"]').value = result.email;
    })

}

document.querySelector('#save_gmail').addEventListener('click', function(e) {
    var gmail = document.querySelector('input[type="text"]').value;
    if ((gmail == "") || (gmail == null) || (gmail == undefined)) {
        alert("Please enter a valid gmail");

    } else {
        chrome.storage.sync.set({ email: gmail }, function() {
            console.log('optionjsemail is ' + gmail);
        })
    }
}, false);


document.querySelector('.close').addEventListener('click', function(e) {
    chrome.runtime.sendMessage({closeThis: true})
}, false);