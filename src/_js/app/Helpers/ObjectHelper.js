class ObjectHelper {
    static isArray(data) {
        return (Object.prototype.toString.call(data) === "[object Array]");
    }
}

export default ObjectHelper;