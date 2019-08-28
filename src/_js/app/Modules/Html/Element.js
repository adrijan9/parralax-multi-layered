import ObjectHelper from "../../Helpers/ObjectHelper";

class Element {
    static create(type, attributes = null, child = null){
        let element = document.createElement(type);
        if(attributes != null) {
            for (let key in attributes) {
                let value = attributes[key];
                if(key === "onclick"){
                    element.onclick = value;
                }else if(key === "onchange"){
                    element.onchange = value;
                }else if(key === "style"){
                    element.setAttribute("style", Element.createStyleFromObject(value));
                }else {
                    if(element[key]){
                        element[key] = value;
                    }else {
                        element.setAttribute(key, value);
                    }
                }
            }
        }

        if(child !== null){
            if(typeof child === "string"){
                element.innerHTML = child;
            }else {
                if(child !== null){
                    if(ObjectHelper.isArray(child)){
                        child.map(function(inChild){
                            if(child !== null){
                                if(typeof inChild === "string"){
                                    element.innerHTML = inChild;
                                }else {
                                    element.appendChild(inChild);
                                }
                            }
                        });
                    }else {
                        element.appendChild(child);
                    }
                }
            }
        }

        return element;
    }

    static createStyleFromObject(obj){
        let styleString = "";

        for(let style in obj){
            let styleValue = obj[style];
            styleString += `${style}: ${styleValue};`;
        }

        return styleString;
    }
}

export default Element;