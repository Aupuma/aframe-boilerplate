AFRAME.registerComponent('video-controller', 
{
    schema: 
    {
        deviceButtons: {default: ['click', 'triggerdown']}
    },
    
    init: function () 
    {
        let el = this.el;
        let videoSource = this.el.getAttribute('material').src;
        let playImg = el.object3D.children[0];

        let togglePlayback = () => 
        {
            if(videoSource.paused || videoSource.ended)
            {
                videoSource.play();
                playImg.visible = false;
            }
            else
            {
               videoSource.pause();
               playImg.visible = true;
            }
        }
  
        el.setAttribute("class","clickable");
      
        // ON ANY data.deviceButtons, toggle Playback
        this.data.deviceButtons.forEach(function (btn) 
        {
            el.addEventListener(btn, togglePlayback);
        });
  
        videoSource.addEventListener('ended', function (evt) 
        { 
            playImg.visible = false;
        });
    }
});