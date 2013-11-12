var _ = require('underscore');

module.exports = function(obj, path){
    var keys = path.split('.');

    //lookup object
    _.each(keys, function(k){
        obj = obj[k];
    });

    return obj;
};