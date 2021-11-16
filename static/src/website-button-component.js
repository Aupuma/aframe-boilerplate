AFRAME.registerComponent('website-button', 
{
    schema: 
    {
        url: {type: 'string', default: 'www.google.com'}
    },

    init: function () 
    {        
        var data = this.data;

        let openWebsite = () => 
        {
            window.open(data.url);
        }

        this.el.setAttribute('class','clickable');
        this.el.addEventListener('click', openWebsite);
    },
});