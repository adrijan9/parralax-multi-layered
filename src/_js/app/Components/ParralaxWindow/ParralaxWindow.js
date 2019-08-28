import Element from "../../Modules/Html/Element";
import ParralaxItems from "./ParralaxItems";

class ParralaxWindow {
    static create(app){
        app.heroHeight = ParralaxWindow.getHeight(app);
        console.log(app._content);
        app._content.style.top = app.heroHeight;

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
                ParralaxItems.items(app)
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
}

export default ParralaxWindow;