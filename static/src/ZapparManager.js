const scene = document.querySelector('a-scene');
const placementUI = document.getElementById("zappar-placement-ui");

scene.addEventListener("loaded",()=>{
    placementUI.style.visibility = "visible";
    
    //Listen for when the user taps the UI
    placementUI.addEventListener("click", start);
})

function start() 
{
    // Set placement mode to false on our instant tracker
    const instantTracker = document.getElementById("instant-tracker");
    instantTracker.setAttribute("zappar-instant", "placement-mode: false");

    document.getElementById("landing").emit("hide");
    document.getElementById("SceneWrapper").emit("showElements");

    // And remove the placement UI
    placementUI.remove();
}