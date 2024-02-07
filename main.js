browser.storage.sync.get({
    disableCamera: true,
    disableMicrophone: true,
    autoJoin: true
})
    .then(start);

let videoDisabled = false;
let audioDisabled = false;

document.addEventListener('load', () => {
    start();
})

function start(settings) {
    if (settings.disableCamera) {
        const videoInterval = setInterval(() => {
            const element = document.querySelector('div[aria-label^="Turn off camera"]');
            // if (element.getAttribute('data-is-muted') === 'true') {
            if(element) {
                element.click();
            } else {
                clearInterval(videoInterval);
                videoDisabled = true;
            }
        }, 1000);
    }
    if(settings.disableMicrophone) {
        const audioInterval = setInterval(() => {
            const element = document.querySelector('div[aria-label^="Turn off microphone"]');
            // if (element.getAttribute('data-is-muted') === 'true') {
            if(element) {
                element.click();
            } else {
                clearInterval(audioInterval);
                audioDisabled = true;
            }
        }, 1000);
    }
    if(settings.autoJoin) {
        autoJoin(settings);
    }
}

function autoJoin(settings) {
    const autoJoinInterval = setInterval(() => {
        if(audioDisabled && videoDisabled) {
            let found = false;
            document
              .querySelectorAll('button')
              .forEach(button => {
                if (button.innerText === 'Join now') {
                    found = true;
                    button.click();
                }
              });
            if(!found) {
                clearInterval(autoJoinInterval);
            }
        }
    }, 500);
}