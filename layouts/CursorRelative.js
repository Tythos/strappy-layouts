/*
*/

define(function(require, exports, module) {
    let template = require("hbs!layouts/CursorRelative.hbs");
    let Layout = require("Layout");
    let coords = { "x": 0, "y": 0 };

    window.addEventListener("mousemove", function(event) {
        coords.x = event.pageX;
        coords.y = event.pageY;
    });

    class CursorRelative extends Layout {
        constructor() {
            super(template);
            this.parameters.dr = 48; // radius from cursor to each subdom placement
            this.parameters.dx = 32; // desired width of subdom items; used for placement only, will not effect overflow
            this.parameters.dy = 32; // desired height of subdom items; used for placement only, will not effect overflow
            this.items = [];
            return this;
        }

        item(subdom) {
            /* In all likelyhood, users will want to implement an array of
               different cursor-relative approaches. This Layout will,
               therefore, more likely serve as a subclass, and item() will not
               be directly invoked in most cases. By default, this implements a
               spider-menu-style distribution of subdom item placement about
               the mouse cursor. That means that, once the menu is opened,
               motion of the subdom elements STOPS so the user can select a
               specific option. Other use cases could be labels or tooltips.
            */
            this.items.push(subdom);
            return this;
        }

        render() {
            /*
            */
            this.parameters.items = (new Array(this.items.length)).fill(null);
            this.parameters.x = coords.x;
            this.parameters.y = coords.y;
            super.render();
            let items = this.subdom.querySelectorAll(".CursorRelativeItem");
            let n = this.items.length;
            Array.from(items).forEach(function(item, ndx) {
                let ang = 2 * Math.PI * ndx / n;
                item.style.left = (this.parameters.dr * Math.cos(ang) - 0.5 * this.parameters.dx) + "px";
                item.style.top = (this.parameters.dr * Math.sin(ang) - 0.5 * this.parameters.dy) + "px";
                item.appendChild(this.items[ndx]);
            }, this);
            return this.subdom;
        }
    }

    return CursorRelative;
});
