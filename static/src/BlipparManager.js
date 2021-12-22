// Start() API has to be called, if auto-start="false" attribute is set in the SDK script tag
WEBARSDK.Start();

AFRAME.registerComponent("landingcursor", {
  init: function() {
    WEBARSDK.SetStageReadyCallback(() => {
      console.log('Stage is ready now!!!');
      this.el.emit('landit');
    });

    this.el.addEventListener("animationcomplete__cursorend", e => {
      document.getElementById('SceneWrapper').emit("showElements");
      this.el.setAttribute('visible', false);
    });
  }
});

WEBARSDK.SetGuideViewCallbacks(
  startGuideViewCallback = () => {
    console.log(" Start(ed) hand guide animation");
  },

  stopGuideViewCallback = () => {
    console.log(" Stop(ped) hand guide animation");
  }
);