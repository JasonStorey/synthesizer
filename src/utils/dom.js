define(['jquery'], function($) {

    function Element(node) {
        this.domElement = $(node);
    }

    Element.prototype.addClass = function addClass(classname) {
        this.domElement.addClass(classname);
    };

    Element.prototype.append = function append(child) {
        this.domElement.append(child.domElement);
    };

    Element.prototype.on = function on(event, fn) {
        this.domElement.on(event, fn);
    };

    return {
        Element: Element
    };
});