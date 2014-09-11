define(['utils/dom'], function(dom) {
    function Trigger() {
        this.element = new dom.Element('<div>');
        this.element.addClass('trigger-container');
    }

    Trigger.prototype.draw = function draw(container) {
        container.append(this.element);
    };

    return Trigger;
});