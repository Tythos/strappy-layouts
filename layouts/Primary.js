/*
*/

define(function(require, exports, module) {
    let template = require("hbs!layouts/Primary.hbs");
    let Layout = require("Layout");

    class Primary extends Layout {
        constructor() {
            super(template);
        }
    }

    return Primary;
});
