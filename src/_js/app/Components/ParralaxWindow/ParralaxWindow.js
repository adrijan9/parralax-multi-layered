import Element from "../../Modules/Html/Element";
import ParralaxItems from "./ParralaxItems";
import Errors from "../../Constants/Errors";
import Attributes from "../../Constants/Attributes";

class ParralaxWindow {
    static create(app){
        app.heroHeight = ParralaxWindow.getHeight(app);
        app._content.style.top = app.heroHeight;
        app.generatedItems = ParralaxItems.items(app);

        if(app.generatedItems.length === 0){
            console.warn(Errors.NO_ITEMS_WARNING);
        }

        app.parralaxWindowHero = Element.create(
            "div",
            {
                id: "hero",
                classList: "hero",
                style: {
                    height: app.heroHeight
                }
            },
            app.generatedItems
        );

        app.parralaxWindow = Element.create(
            "div",
            {
                id: "hero-container",
                classList: "hero-container"
            },
            app.parralaxWindowHero
        );

        return app.parralaxWindow;
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
        app.parralaxWindowHero.style.height = `${app.currentBreakpoint.height}px`;
        app._content.style.top = `${app.currentBreakpoint.height}px`;
    }

    static onScroll(app, pageYOffset){
        let items = app.generatedItems;

        if(items.length && app._scrollable){
            for (let i = 0; i < items.length; i++) {
                let layer = items[i],
                    depth = Number(layer.getAttribute(Attributes.DEPTH_ATTRIBUTE)),
                    movement = -(pageYOffset * depth),
                    translate3d = `translate3d(0, ${movement}px, 0)`;

                layer.style['-webkit-transform'] = translate3d;
                layer.style['-moz-transform'] = translate3d;
                layer.style['-ms-transform'] = translate3d;
                layer.style['-o-transform'] = translate3d;
                layer.style.transform = translate3d;
            }
        }
    }
}

export default ParralaxWindow;