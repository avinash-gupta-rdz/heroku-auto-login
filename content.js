if (window.location.origin === 'https://cli-auth.heroku.com') {
    if (document.querySelector('.login-button') != null) {
        document.querySelector('.login-button').click();
    }
    if ((document.querySelector('.tc.gray-90') != null) && (document.querySelector('.tc.gray-90').textContent == `
    You can close this page and return to your CLI. It should now be logged in.
  `)) {
        chrome.runtime.sendMessage({
            closeThis: true, minThis: true
        });

    }
}
if ((window.location.origin === 'https://accounts.google.com') && (window.location.pathname.startsWith("/AccountChooser"))) {
    choose_account();
}

if ((window.location.origin === 'https://dashboard.heroku.com') && document.querySelector("h4") && document.querySelector("h4").textContent && (document.querySelector("h4").textContent == 'Your session has expired') && document.querySelector("button")) document.querySelector("button").click();


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function choose_account() {
    await sleep(1000);
    chrome.storage.sync.get(['email'], function(result) {
        if (result.email) {
            console.log(result.email)
            document.querySelectorAll(`div[data-email$='${result.email}']`)[0].click();
        } else {
            alert("Please configure default Email")
        }

    })
}