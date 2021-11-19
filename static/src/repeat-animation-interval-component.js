AFRAME.registerComponent('repeat-animation-interval', 
{
    schema: 
    {
        startEvent: {type: 'string'},
        interval:{type:'number', default:1000}
    },

    init: function () 
    {        
        var data = this.data;

        let playAnimation = () => 
        {
            setTimeout(()=>{
                this.el.emit(data.startEvent)
            }, data.interval)
        }

        this.el.addEventListener('animationcomplete',playAnimation)
    }
});