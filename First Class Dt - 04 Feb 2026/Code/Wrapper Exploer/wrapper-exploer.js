console.log('Node module wrapper demo');

console.log("__Filename",__filename);
console.log("__Dirname",__dirname);

module.exports.greet = function(name){
    console.log(`Hello ${name}`);
    
}