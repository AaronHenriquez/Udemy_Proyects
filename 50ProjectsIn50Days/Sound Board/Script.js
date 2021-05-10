const sounds = ['applause','boo','gasp','tada','victory','wrong']

sounds.forEach (sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    //When click on btn, it plays the sound
    btn.addEventListener('click', ()=>{
        //Stops sounds when clicking on other btn
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

/**
 * stopSoungs stops the current sound and set the timer to cero
 */
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime =0;
    })
}