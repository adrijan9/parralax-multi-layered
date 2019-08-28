import Element from "../../Modules/Html/Element";

class ParralaxItem {
    static create(data, height){
        const { id, depth, background, position } = data;
        let style = {
            height: height,
            "background-image": `url(${background})`
        };

        if(position){
            style["background-position"] = position;
        }

        return Element.create(
            "div",
            {
                id: `item-${id}`,
                classList: "layer",
                style: style,
                depth: depth
            },
            null
        );
    }
}

export default ParralaxItem;