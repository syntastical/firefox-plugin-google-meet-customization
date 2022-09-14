browser.storage.sync.get({
    disableCamera: true,
    disableMicrophone: true,
    autoJoin: true
})
    .then(start);

function start(settings) {
    const interval = setInterval(() => {
        if(settings.disableCamera) {
            const element = document.querySelector('div[aria-label^="Turn off camera"]');
            if (element) {
                clearInterval(interval);
            }
            element.click();
        }
        if(settings.disableMicrophone) {
            const element = document.querySelector('div[aria-label^="Turn off microphone"]');
            if (element) {
                clearInterval(interval);
            }
            element.click();
        }
        autoJoin(settings);
    }, 500);
}

function autoJoin(settings) {
    const interval = setInterval(() => {
        if(settings.autoJoin) {
            document.querySelectorAll('button').forEach(button => {
                if(button.innerText === 'Join now') {
                    clearInterval(interval);
                    button.click();

                }
            })
        }
    }, 500);
}