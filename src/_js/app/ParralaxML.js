import CheckHelper from "./Helpers/CheckHelper";
import ParralaxWindow from "./Components/ParralaxWindow/ParralaxWindow";
import Classes from "./Constants/Classes";
import Errors from "./Constants/Errors";

class ParallaxML {
    constructor(config = {}){
        this.windowWidth = window.innerWidth;
        this._config = config || {};
        this._layers = config.layers || [];
        this._style = config.style || {};
        this._style.responsive = this._style.responsive || [];
        this._style.layer = this._style.layer || {};

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
        let resize = false;
        window.onresize = () => {
            clearTimeout(resize);
            resize = setTimeout(() => {
                ParralaxWindow.onResize(app);
            }, 250);
        }
    }
}

export default ParallaxML;