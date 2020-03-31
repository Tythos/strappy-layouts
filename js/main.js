/*
*/

require.config({
    "paths": {
        "hbs": "lib/hbs-loader-v1.0.0.min",
    }
});

let deps = [
    "../layouts/Primary",
    "../layouts/Banner",
    "../layouts/MenuBar",
    "../layouts/Gridded",
    "../layouts/Anchored",
    "../layouts/CursorRelative",
    "../layouts/FloatingWindow"
];

require(deps, function(Primary, Banner, MenuBar, Gridded, Anchored, CursorRelative, FloatingWindow) {
    function testPrimary() {
        window.document.body.appendChild((new Primary())
            .render()
        );
    }

    function testBanner() {
        window.document.body.appendChild((new Banner())
            .param("label", "unclasss")
            .param("background", "#27b727")
            .param("isbottom", true)
            .render()
        );
    }

    function testMenuBar() {
        function onMenuClick(event) {
            console.log("menu item clicked:", event);
        }

        window.document.body.appendChild((new MenuBar())
            .item("img/icon1.png", onMenuClick)
            .item("img/icon2.png", onMenuClick)
            .item("img/icon3.png", onMenuClick)
            .render()
        )
    }

    function testGridded() {
        let div = window.document.createElement("div");
        let p = null;
        p = window.document.createElement("p");
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla ante in felis sagittis, in tristique metus aliquam. Aliquam interdum libero et erat elementum convallis. Nulla facilisi. Pellentesque et elit in dui egestas tincidunt et sit amet lacus. Nullam rutrum semper posuere. Mauris iaculis tellus sit amet dui sodales pulvinar. Integer feugiat turpis vitae est consectetur, non consectetur sapien porta. Suspendisse non vestibulum velit. Quisque pulvinar, felis sed aliquet facilisis, odio ante lacinia ipsum, nec faucibus tortor nisl a purus. Morbi dapibus justo id enim auctor condimentum. In id elementum tellus.";
        div.appendChild(p);
        p = window.document.createElement("p");
        p.textContent = "Donec rutrum, mi vel scelerisque tempus, libero risus sagittis elit, nec scelerisque eros lectus vitae diam. Sed facilisis nisl nulla, in hendrerit ligula commodo eget. Morbi porta maximus libero vel porta. Sed velit nibh, sagittis at cursus a, dignissim id libero. Pellentesque quis arcu sagittis, viverra nulla non, malesuada risus. Suspendisse gravida, neque a ultricies elementum, ante lorem bibendum nibh, eget tincidunt purus eros in odio. Nullam elementum libero vel velit condimentum, sit amet commodo lectus efficitur. Aenean malesuada commodo neque. Praesent sit amet tempor ipsum, id tincidunt nunc. In hac habitasse platea dictumst.";
        div.appendChild(p);
        p = window.document.createElement("p");
        p.textContent = "Vivamus ligula massa, facilisis sit amet turpis sed, tincidunt tincidunt turpis. Fusce mollis elit non erat porta, ut congue ex vestibulum. Fusce vitae quam placerat velit aliquet maximus. Vivamus sollicitudin, lorem vitae vulputate ullamcorper, tortor erat rutrum mi, eu eleifend urna odio vel massa. Quisque feugiat ultrices ligula sed tempor. Nullam posuere at velit et dapibus. Ut fermentum consectetur nisi sed efficitur. Nam laoreet, ante vel lacinia hendrerit, mauris tortor placerat ipsum, sed sodales sapien dui et dui. Proin et efficitur nibh.";
        div.appendChild(p);
        p = window.document.createElement("p");
        p.textContent = "Praesent nec auctor arcu, id sodales dolor. Integer ultrices suscipit metus, a consectetur arcu vulputate ut. Vestibulum elementum euismod arcu. Vestibulum a nibh ut justo lobortis vestibulum. Donec cursus lobortis ullamcorper. Nullam finibus elementum venenatis. Vivamus cursus dictum tellus id accumsan. Fusce placerat mi sit amet condimentum consequat. Mauris ultricies eros ut orci pulvinar, sed elementum sem mollis. Nullam mauris massa, pharetra vitae aliquam in, dapibus in neque. Cras ac sollicitudin ligula, nec aliquet lectus. Etiam vitae hendrerit diam, sed rutrum augue. Cras magna tortor, suscipit eget sagittis sit amet, laoreet a arcu. Donec mattis egestas cursus. Vivamus mollis justo eu sollicitudin euismod.";
        div.appendChild(p);
        p = window.document.createElement("p");
        p.textContent = "Nam interdum lacinia ipsum. In imperdiet metus nec ligula vehicula, semper finibus nisl faucibus. Nullam tristique orci vestibulum dolor cursus hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum porta felis eu purus feugiat vulputate. Vivamus molestie tempor quam, quis porta purus lacinia ac. Duis quis tempor turpis. Phasellus commodo eu lectus eu ultricies. Cras euismod ultricies diam, eu finibus arcu blandit vel. Sed interdum suscipit commodo. Curabitur tempor et purus sit amet egestas. Mauris tortor ipsum, scelerisque vel mauris sed, auctor ultricies leo.";
        div.appendChild(p);

        window.document.body.appendChild((new Gridded())
            .param("i", 1)
            .param("m", 2)
            .param("j", 2)
            .param("n", 2)
            .param("title", "Some Lorem Ipsum")
            .content(div)
            .render()
        );
    }

    function testAnchored() {
        let img = window.document.createElement("img");
        img.setAttribute("src", "img/strappy_logo.png");
        window.document.body.appendChild((new Anchored())
            .param("isleft", false)
            .param("dx", 100)
            .param("dy", 0)
            .content(img)
            .render()
        );
    }

    function testCursorRelative() {
        let img1 = window.document.createElement("img"); img1.setAttribute("src", "img/icon4.png");
        let img2 = window.document.createElement("img"); img2.setAttribute("src", "img/icon5.png");
        let img3 = window.document.createElement("img"); img3.setAttribute("src", "img/icon6.png");
        window.addEventListener("contextmenu", function(event) {
            event.preventDefault();
            window.document.body.appendChild((new CursorRelative())
                .item(img1)
                .item(img2)
                .item(img3)
                .render()
            );
        });
    }

    function testFloatingWindow() {
        let div = window.document.createElement("div");
        let p = null;
        p = window.document.createElement("p");
        p.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam vulputate magna. Morbi fermentum diam a vulputate eleifend. Sed vehicula, diam sed feugiat convallis, ante velit aliquet magna, et convallis diam purus eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tincidunt vestibulum orci at ornare. Sed facilisis, dolor eget vulputate mattis, enim ante vehicula arcu, sed accumsan risus purus nec nisi. In ac ipsum blandit, bibendum enim in, ultrices arcu. Nullam nec suscipit dolor. Suspendisse ornare, libero sed fermentum luctus, leo quam consectetur nisi, et feugiat velit nulla nec diam. Donec ullamcorper varius sem et tristique. Praesent lorem neque, fermentum at est et, hendrerit ultricies tortor. Nulla pretium dui eu venenatis porttitor. Vestibulum luctus, lorem eget congue volutpat, enim massa suscipit lectus, vel sollicitudin elit erat ac eros. Nam velit urna, fermentum eget sollicitudin non, fermentum eget mauris.";
        div.appendChild(p);
        p = window.document.createElement("p");
        p.textContent = "Morbi fringilla augue eu libero molestie, eu aliquam libero porttitor. Phasellus sit amet velit sit amet est fermentum porttitor. Donec in volutpat eros, a fringilla urna. Aliquam ultrices quam et hendrerit iaculis. Vivamus sed tortor consequat, sodales nunc vel, efficitur lectus. Quisque porta, lorem eu scelerisque tempus, turpis ipsum molestie augue, non eleifend nibh velit congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat enim dui, ac rutrum orci ultrices placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent a urna ut purus lacinia egestas ut eget nisi. Donec eu enim et magna maximus auctor. Quisque ac feugiat libero, vitae volutpat risus. Sed imperdiet justo tellus, ac bibendum elit pulvinar in.";
        div.appendChild(p);
        p = window.document.createElement("p");
        p.textContent = "Maecenas id leo et nisi tristique ultrices eget vel nibh. Sed luctus, metus vitae porta volutpat, sem urna dignissim erat, vitae mollis sapien urna nec dolor. Aenean ex libero, vestibulum gravida libero sed, elementum semper neque. Quisque eget magna dolor. Nunc magna lectus, molestie eu augue eget, consequat euismod ligula. Quisque vulputate molestie libero at rutrum. Ut eu egestas libero. Proin dapibus dui quis sem lacinia finibus. Nunc accumsan neque ut turpis luctus, ac luctus arcu sagittis. Morbi justo felis, vulputate quis convallis eu, feugiat ac justo. Proin facilisis elementum ipsum non suscipit.";
        div.appendChild(p);
        p = window.document.createElement("p");
        p.textContent = "Sed tristique sem arcu, sed imperdiet felis pretium id. Quisque ex magna, vehicula at velit at, auctor placerat nisl. In feugiat neque lacus, quis scelerisque ante bibendum nec. Nulla vitae pulvinar felis. Nunc lacinia enim turpis. Integer tempus justo non erat tristique, eu efficitur tellus viverra. Sed porttitor lobortis pellentesque. Aliquam non commodo nisl. Curabitur euismod id dolor non tempor. Donec porta quam a leo aliquet mattis. Cras hendrerit tortor enim. Proin facilisis mollis faucibus.";
        div.appendChild(p);
        p = window.document.createElement("p");
        p.textContent = "Nunc imperdiet sed turpis sed commodo. Cras hendrerit tincidunt metus at elementum. Suspendisse quis sem a diam mattis rutrum tincidunt at tortor. Sed orci mauris, rutrum ac bibendum a, congue vel tellus. Duis malesuada, tortor vel laoreet aliquet, nisl tellus tempor elit, in sagittis mi purus vel velit. Etiam ornare varius dui, et feugiat sem posuere id. Aliquam erat volutpat. Etiam commodo mi non ligula mollis lobortis. Praesent augue lacus, consectetur sed orci sit amet, blandit sagittis nulla. Etiam et justo quis sapien finibus venenatis in id turpis. Morbi congue sapien euismod magna vulputate tempus.";
        div.appendChild(p);
        window.document.body.appendChild((new FloatingWindow())
            .content(div)
            .render()
        );
    }

    testPrimary();
    testBanner();
    testMenuBar();
    //testGridded();
    testAnchored();
    //testCursorRelative(); // disabled to ensure other clicks go through to inspector
    testFloatingWindow();
});
