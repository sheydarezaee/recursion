// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof(obj) !== 'function' && obj !== undefined) {
    if (obj === null) {
      return ""+obj;
    } else if(typeof(obj) == 'boolean') {
      return ""+obj;
    } else if(typeof(obj) == 'string') {
      return '"' + obj + '"';
    } else if (typeof(obj) == 'number'){
      return ""+obj;
    } else if (Array.isArray(obj)){
      var lastIndex = obj.length - 1;
      var separator = ',';

      return obj.reduce(function(initial, item, index){
        var checkedItem = stringifyJSON(item);

        if (lastIndex !== index){
          initial += checkedItem + separator;
        } else {
          initial += checkedItem;
        }
        return initial;
      }, '[') + ']';
    } else if (typeof(obj) == 'object'){
      var lastIndex = Object.keys(obj).length - 1;
      return Object.keys(obj).reduce(function(initial, key, index) {
        if(typeof(obj[key]) !== 'function' && obj[key] !== undefined){

          initial += '"' + key + '"' + ':';
          initial += stringifyJSON(obj[key]);

          if(lastIndex !== index) {
            initial += ',';
          }
        }

        return initial;
      }, '{') + '}';
    }
  }
};

