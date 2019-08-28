class CheckHelper {
    static isString(str){
        return typeof str === 'string' || str instanceof String;
    }
}

export default CheckHelper;