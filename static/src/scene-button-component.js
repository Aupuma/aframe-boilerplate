AFRAME.registerComponent('scene-button', 
{
    schema: 
    {
        sceneToShow:{type: 'selector'},
        sceneToHide:{type: 'selector'}
    },

    init: function () 
    {        
        var data = this.data;

        let animateButton = () =>
        {
            this.el.emit('push');
            setTimeout(changeScene,200)
        }

        let changeScene = () => 
        {
            data.sceneToShow.setAttribute('visible',true);
            data.sceneToShow.emit('show');

            data.sceneToHide.emit('hide');
            setTimeout(makeOldInvisible,225);
        }

        let makeOldInvisible = () =>
        {
            data.sceneToHide.setAttribute('visible',false);
        }

        this.el.setAttribute('class','clickable');
        this.el.addEventListener('click', animateButton);
    },
});