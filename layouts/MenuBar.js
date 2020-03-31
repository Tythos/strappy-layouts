/*
*/

define(function(require, exports, module) {
    let template = require("hbs!layouts/MenuBar.hbs");
    let Layout = require("Layout");

    class MenuBar extends Layout {
        constructor() {
            super(template);
            this.items = [];
        }

        item(src, onClick) {
            this.items.push([src, onClick]);
            return this;
        }

        attach() {
            let items = this.subdom.querySelectorAll(".MenuBarItem");
            Array.from(items).forEach(function(item, ndx) {
                item.addEventListener("click", function(event) {
                    event.layout = this;
                    this.items[ndx][1](event);
                }.bind(this));
            }, this)
        }

        render() {
            this.parameters.items = this.items.map(function(item) {
                return item[0];
            });
            return super.render();
        }
    }

    return MenuBar;
});
