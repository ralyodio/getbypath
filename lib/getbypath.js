module.exports = function(obj, path, create){
    var keys = path.split('.');

    //lookup object
    keys.some(function(k){
        var nestedProp = obj[k];
        if (typeof nestedProp != 'undefined') {
            obj = nestedProp;
        } else if (create && typeof obj == 'object') {
            obj = obj[k] = {};
        } else {
            obj = undefined;
            return true;
        }
    });

    return obj;
};
