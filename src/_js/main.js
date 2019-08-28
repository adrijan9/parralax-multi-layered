(function(){
    let parralax = new ParallaxML({
        container: document.querySelector(".parralax"),
        style: {
            height: 320,
            responsive: [
                {
                    screen: 768,
                    height: 800
                }
            ]
        },
        layers: [
            {
                depth: "0.10",
                background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg"
            },
            {
                depth: "0.20",
                background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png",
                position: "left bottom"
            },
            {
                depth: "0.50",
                background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png"
            },
            {
                depth: "0.80",
                background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png",
                position: "right bottom"
            },
            {
                depth: "0.85",
                background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png"
            },
            {
                depth: "1.00",
                background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png"
            }
        ]
    });
})();