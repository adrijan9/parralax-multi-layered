import ParralaxItem from "../ParralaxItem/ParralaxItem";

class ParralaxItems {
    static items(app){
        return app._layers.items.reduce((s, item, index) => {
            item.id = index;
            s.push(ParralaxItem.create(item, app.heroHeight));
            return s;
        }, []);
    }
}

export default ParralaxItems;