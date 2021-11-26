document.addEventListener("DOMContentLoaded", function() 
{
    const target = document.querySelector("#image-target")
    const sceneWrapper = document.querySelector("#SceneWrapper")

    target.addEventListener("targetFound", event => {
        console.log("Target detected")
        sceneWrapper.emit("showElements");
    });

    target.addEventListener("targetLost", event => {
        console.log("Target lost")
        sceneWrapper.emit("hideElements");
    });
});