var obj = {};
var name = ""
Object.defineProperty(obj, 'name', {
    get:function getName() {
        return name;
    },
    set:function(newValue){
        name = newValue
    }
});