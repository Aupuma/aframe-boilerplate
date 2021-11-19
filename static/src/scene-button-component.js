AFRAME.registerComponent('scene-button', 
{
    schema: 
    {
        sceneGroupEl:{type: 'selector'}
    },

    init: function () 
    {        
        var data = this.data;
        var mainButtonsGroup = document.querySelector('#MainButtonsGroup')

        let animateButton = () =>
        {
            this.el.emit('pushed');
            setTimeout(openSceneGroup,200)
        }

        let openSceneGroup = () => 
        {
            mainButtonsGroup.emit('hide')
            data.sceneGroupEl.emit('sceneChosen')
        }

        this.el.setAttribute('class','clickable');
        this.el.addEventListener('click', animateButton);
    },
});