// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsWithClassName = [];

  //var intoEachNode =
  function intoEachNode(node) {
    node.classList.forEach(function(targetClass) {
      if(targetClass === className) {
        elementsWithClassName.push(node);
      }
    });

    if (node.childNodes.length > 0){
      node.childNodes.forEach(function(child){
        if (child.classList !== undefined){
          intoEachNode(child);
        }
      });
    }
  }

  intoEachNode(document.body);
  console.log(elementsWithClassName);
  return elementsWithClassName;
};


