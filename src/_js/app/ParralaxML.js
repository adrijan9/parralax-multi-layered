import CheckHelper from "./Helpers/CheckHelper";
import ParralaxWindow from "./Components/ParralaxWindow/ParralaxWindow";

class ParallaxML {
    constructor(config = {}){
        this.windowWidth = window.innerWidth;
        this._config = config || {};
        this._layers = config.layers || [];
        this._style = config.style || {};
        this._style.responsive = this._style.responsive ? this._style.responsive : [];

        this._container = this.container();
        this._content = this.content();

        this._container.insertBefore(ParralaxWindow.create(this), this._container.childNodes[0]);
    }

    container(){
        if(CheckHelper.isString(this._config.container)){
            return document.querySelector(this._config.container);
        }
        return this._config.container;
    }

    content(){
        if(this._config.content) {
            if(CheckHelper.isString(this._config.content)){
                return document.querySelector(this._config.content);
            }
            return this._config.content;
        }else {
            return document.querySelector(".content");
        }
    }
}

export default ParallaxML;