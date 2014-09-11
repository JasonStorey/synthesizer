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

    return {
        Element: Element
    };
});