(function(){
    let parralax = new ParallaxML({
        container: document.querySelector(".parralax-ml"),
        content:  document.querySelector(".content"),
        style: {
            responsive: [
                {
                    screen: 320,
                    height: 320
                },
                {
                    screen: 768,
                    height: 800
                }
            ]
        },
        layers: {
            scrollable: true,
            items: [
                {
                    depth: "0.10",
                    background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg",
                    position: "bottom center"
                },
                {
                    depth: "0.20",
                    background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png",
                    position: "left bottom"
                },
                {
                    depth: "0.50",
                    background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png",
                    position: "bottom center"
                },
                {
                    depth: "0.80",
                    background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png",
                    position: "right bottom"
                },
                {
                    depth: "0.85",
                    background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png",
                    position: "bottom center"
                },
                {
                    depth: "1.00",
                    background: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png",
                    position: "bottom center"
                }
            ]
        }
    });
})();