/* Audio play/pause handler for the VIBE button.
     - Targets audio element with id="Vibebutton"
     - Button with id="VibeTrigger" toggles play/pause
     - Handles promise rejection when browsers block autoplay
*/
document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('Vibebutton');
    var vibeBtn = document.getElementById('VibeTrigger');
    var grayBtn = document.getElementById('gray');
    var vibeBox = document.querySelector('.VIBE');
    var otherButton = document.querySelector('.button');
    var header = document.querySelector('h1');

    if (!audio || !vibeBtn) return; // nothing to do if essential elements missing

    // Update button text based on audio state
    function updateButton() {
        vibeBtn.textContent = audio.paused ? 'musiikkia millä työskentelin?' : 'Pysäytä';
    }

    // Ensure correct initial label
    updateButton();

    vibeBtn.addEventListener('click', function () {
        if (audio.paused) {
            // try to play; modern browsers return a promise
            var p = audio.play();
            if (p !== undefined) {
                p.catch(function (err) {
                    // Autoplay may be blocked; inform in console and update UI
                    console.warn('Playback prevented:', err);
                    // Optionally show a visual message to user here
                }).then(function () {
                    updateButton();
                });
            } else {
                updateButton();
            }
        } else {
            audio.pause();
            updateButton();
        }
    });

    // gray button toggles grayscale on body
    if (grayBtn) {
        // set initial label
        grayBtn.textContent = 'Gray';
        grayBtn.addEventListener('click', function () {
            document.body.classList.toggle('is-gray');
            // toggle text for clarity
            grayBtn.textContent = document.body.classList.contains('is-gray') ? 'Gray' : 'Normal';
        });
    }

    // Keep button label in sync if playback state changes via other controls
    audio.addEventListener('play', function () { setVibeState(true); updateButton(); });
    audio.addEventListener('pause', function () { setVibeState(false); updateButton(); });
    audio.addEventListener('ended', function () { setVibeState(false); updateButton(); });

    // toggle a class on <body> so CSS can fade an overlay while audio plays
    // and toggle a class on the .VIBE box so it can run the party animation
    function setVibeState(isPlaying) {
        document.body.classList.toggle('vibe-playing', !!isPlaying);
        if (vibeBox) {
            vibeBox.classList.toggle('VIBE-playing', !!isPlaying);
        }
        if (otherButton) {
            otherButton.classList.toggle('party-on', !!isPlaying);
        }
        if (header) {
            header.classList.toggle('music-color', !!isPlaying);
        }
    }

    // initialize body class according to current audio state
    setVibeState(!audio.paused);
});