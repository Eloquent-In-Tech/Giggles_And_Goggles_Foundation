import React from 'react'

function Maps() {
  return (
    <div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.535332955765!2d-0.20301892418091783!3d51.46668731367774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f70bbab6897%3A0xff0b1a0676545f38!2sHurlingham%20Club%2C%20London%20SW6%203PR%2C%20UK!5e0!3m2!1sen!2sng!4v1697725551861!5m2!1sen!2sng" 
            width="1360" 
            height="500" 
            style={{border:"0"}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

        </iframe>
    </div>
  )
}

export default Maps