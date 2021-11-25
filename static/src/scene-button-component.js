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
            data.sceneToHide.emit('hide')
            data.sceneToShow.emit('show')
        }

        this.el.setAttribute('class','clickable');
        this.el.addEventListener('click', animateButton);
    },
});