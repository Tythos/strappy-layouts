/*
*/

define(function(require, exports, module) {
    let template = require("hbs!layouts/FloatingWindow.hbs");
    let Layout = require("Layout");

    class FloatingWindow extends Layout {
        constructor() {
            super(template);
            this.parameters.dx = 100;
            this.parameters.dy = 100;
            this.parameters.maxHeight = 0.5 * window.innerHeight;
            this.parameters.maxWidth = 0.5 * window.innerWidth;
            this.parameters.title = "Untitled Window";
            this.parameters.titleHeight = 16; // content height will be computed automatically from grid square minus this
            this.initMouse = null, this.initWin = null;
            this._content = null;
            return this;
        }

        content(subdom) {
            this._content = subdom;
            return this;
        }

        attach() {
            let close = this.subdom.querySelector(".FloatingClose");
            close.addEventListener("click", function(event) {
                this.subdom.hidden = true;
            }.bind(this));
            this.title = this.subdom.querySelector(".FloatingTitle");
            this.title.addEventListener("mousedown", this.onTitleMousedown.bind(this));
        }

        onTitleMousedown(event) {
            /* Starts tracking mouse displacment and updating floating window position accordingly
            */
            let win = this.subdom.querySelector(".FloatingLayout");
            this.initMouse = [event.pageX, event.pageY];
            this.initWin = [parseInt(win.style.left), parseInt(win.style.top)];
            this.title.addEventListener("mouseup", this.onMouseUp.bind(this));
            this.title.addEventListener("mouseleave", this.onMouseLeave.bind(this));
            window.addEventListener("mousemove", this.onMouseMove.bind(this));
        }

        onMouseUp(event) {
            /*
            */
            this.initMouse = null;
            this.initWin = null;
        }

        onMouseMove(event) {
            /*
            */
            if (this.initMouse && this.initWin) {
                event.preventDefault();
                let dx = event.pageX - this.initMouse[0];
                let dy = event.pageY - this.initMouse[1];
                let win = this.subdom.querySelector(".FloatingLayout");
                win.style.left = `${this.initWin[0]+dx}px`;
                win.style.top = `${this.initWin[1]+dy}px`;
            }
        }

        onMouseLeave(event) {
            /*
            */
            //console.log(event);
            //this.initMouse = null;
            //this.initWin = null;
        }

        render() {
            // compute dimensions based on how many floating windows exist
            let floatings = window.document.querySelectorAll("FloatingLayout")
            let n = Array.from(floatings).length;
            this.parameters.left = (n + 1) * this.parameters.dx;
            this.parameters.top = (n + 1) * this.parameters.dy;

            // render and attach subdom
            super.render();
            if (this._content) {
                this.subdom.querySelector(".FloatingContent").appendChild(this._content);
            }
            return this.subdom;
        }
    }

    return FloatingWindow;
});
