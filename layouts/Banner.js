/*
*/

define(function(require, exports, module) {
    let template = require("hbs!layouts/Banner.hbs");
    let Layout = require("Layout");

    class Banner extends Layout {
        constructor() {
            super(template);
            this.parameters.background = "#555";
            this.parameters.color = "#fff";
            this.parameters.label = "This is a banner";
            this.parameters.isbottom = false;
        }
    }

    return Banner;
});
