import Element from "../../Modules/Html/Element";
import ParralaxItems from "./ParralaxItems";
import Errors from "../../Constants/Errors";

class ParralaxWindow {
    static create(app){
        app.heroHeight = ParralaxWindow.getHeight(app);
        app._content.style.top = app.heroHeight;
        app.generatedItems = ParralaxItems.items(app);

        if(app.generatedItems.length === 0){
            console.warn(Errors.NO_ITEMS_WARNING);
        }

        return Element.create(
            "div",
            {
                id: "hero-container",
                classList: "hero-container"
            },
            Element.create(
                "div",
                {
                    id: "hero",
                    classList: "hero",
                    style: {
                        height: app.heroHeight
                    }
                },
                app.generatedItems
            )
        );
    }

    static getHeight(app){
        let defaultHeight = app._style.height,
            responsive = app._style.responsive;

        if(responsive.length > 0){
            for(let r in responsive){
                let currentResponsive = responsive[r];
                if(app.windowWidth >= currentResponsive.screen){
                    defaultHeight = currentResponsive.height;
                }
            }
        }

        return `${defaultHeight}px`;
    }

    static onResize(app){

    }
}

export default ParralaxWindow;