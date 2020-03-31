/*
*/

define(function(require, exports, module) {
    let template = require("hbs!layouts/Gridded.hbs");
    let Layout = require("Layout");

    class Gridded extends Layout {
        constructor() {
            super(template);
            this.parameters.i = 1;
            this.parameters.m = 3;
            this.parameters.j = 1;
            this.parameters.n = 3;
            this.parameters.title = "Untitled Window";
            this.parameters.titleHeight = 16; // content height will be computed automatically from grid square minus this
            this._content = null;
            return this;
        }

        content(subdom) {
            this._content = subdom;
            return this;
        }

        attach() {
            let close = this.subdom.querySelector(".GriddedClose");
            close.addEventListener("click", function(event) {
                this.subdom.hidden = true;
            }.bind(this));
        }

        render() {
            // compute dimensions based on grid layout
            let W = window.innerWidth, H = window.innerHeight;
            this.parameters.left = (this.parameters.i - 1) / this.parameters.m * W;
            this.parameters.top = (this.parameters.j - 1) / this.parameters.n * H;
            this.parameters.width = 1 / this.parameters.m * W;
            this.parameters.height = 1 / this.parameters.n * H;

            // back out content height from overall height minus title
            this.parameters.contentHeight = this.parameters.height - this.parameters.titleHeight;

            // render and attach subdom
            super.render();
            if (this._content) {
                this.subdom.querySelector(".GriddedContent").appendChild(this._content);
            }
            return this.subdom;
        }
    }

    return Gridded;
});
