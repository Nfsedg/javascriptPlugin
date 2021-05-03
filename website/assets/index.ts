import MediaPlayer from 'edgarpechmediaplayer'
import AutoPlay from 'edgarpechmediaplayer/plugins/AutoPlay'
import AutoPause from 'edgarpechmediaplayer/plugins/AutoPause'
import Ads from 'edgarpechmediaplayer/plugins/ads'

const video = document.querySelector('video')
const button: HTMLElement = document.querySelector('button')
const mutebtn: HTMLElement = document.getElementById('mute')
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads(),
] })

button.onclick = () => player.togglePlay();
mutebtn.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}