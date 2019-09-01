import CheckHelper from "./Helpers/CheckHelper";
import ParralaxWindow from "./Components/ParralaxWindow/ParralaxWindow";
import Classes from "./Constants/Classes";
import Errors from "./Constants/Errors";

class ParallaxML {
    constructor(config = {}){
        this.windowWidth = window.innerWidth;
        this._config = config || {};
        this._layers = config.layers || {};
        this._layers.items = this._layers.items || [];
        this._scrollable = typeof this._layers.scrollable === "undefined" ? true : this._layers.scrollable;
        this._style = config.style || {};
        this._style.responsive = this._style.responsive || [];
        this._style.responsive = this._style.responsive.sort((a, b) => a.screen - b.screen);

        this._container = this.container();
        if(!this._container){
            throw new Error(Errors.NO_CONTAINER_FOUND);
        }

        this._content = this.content();
        if(!this._content){
            throw new Error(Errors.NO_CONTENT_FOUND);
        }

        this._container.insertBefore(ParralaxWindow.create(this), this._container.childNodes[0]);

        this.onResize(this);
        this.onScroll(this);
    }

    container(){
        if(CheckHelper.isString(this._config.container)){
            return document.querySelector(this._config.container);
        }
        return this._config.container;
    }

    content(){
        if(typeof this._config.content !== "undefined") {
            if(CheckHelper.isString(this._config.content)){
                return document.querySelector(this._config.content);
            }
            return this._config.content;
        }else {
            return document.querySelector(Classes.CONTENT_CLASS);
        }
    }

    onResize(app){
        let resize = false,
            currentBreakpoint = {
                screen: 0
            };

        window.onresize = () => {
            let windowWidth = window.innerWidth;
            for (let i = 0; i < app._style.responsive.length; i++) {
                let testPoint = app._style.responsive[i],
                    nextPoint = app._style.responsive[(i + 1)];

                nextPoint = typeof nextPoint === "undefined" ?
                    app._style.responsive[(app._style.responsive.length - 1)] :
                    nextPoint;

                if(windowWidth >= testPoint.screen && windowWidth <= nextPoint.screen){
                    if(testPoint.screen !== currentBreakpoint.screen){
                        currentBreakpoint = testPoint;
                    }
                }
            }


            clearTimeout(resize);
            resize = setTimeout(() => {
                app.currentBreakpoint = currentBreakpoint;

                ParralaxWindow.onResize(app);
            }, 250);
        }
    }

    onScroll(app){
        window.addEventListener('scroll', function (event) {
            ParralaxWindow.onScroll(app, this.pageYOffset);
        });
    }
}

export default ParallaxML;