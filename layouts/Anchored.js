/*
*/

define(function(require, exports, module) {
    let template = require("hbs!layouts/Anchored.hbs");
    let Layout = require("Layout");

    class Anchored extends Layout {
        constructor() {
            super(template);
            this.parameters.istop = true;
            this.parameters.isleft = true;
            this.parameters.dx = 0;
            this.parameters.dy = 0;
            this._content = null;
            return this;
        }

        content(subdom) {
            this._content = subdom;
            return this;
        }

        render() {
            super.render();
            if (this._content) {
                this.subdom.querySelector(".AnchoredLayout").appendChild(this._content);
            }
            return this.subdom;
        }
    }

    return Anchored;
});
