var corpus1 =
"Hello.\n\
I am TuringType.\n\
I am a naïve simulation of a human typing. I was written in a few minutes (and a few lines of CoffeeScript), so I'm not meant to be very accurate. I'm just a parlor trick you can use in your own projects.\n\
Notice that I occasionally make mistakes. Please excuse me, and note that you can easily change my typing accuracy level and speed.\n\
Watch this...";

var corpus2 =
"Use me like this:\n\
\n\
new TuringType(domElement, 'Just some text.');\n\
\n\
Or pass some options if you feel like it:\n\
\n\
new TuringType(domElement, 'Terrible but fast typist.', { accuracy: 0.3, interval: 20, callback: allDone });\n\
\n\
Enjoy. Click the Github link in the upper right to see my code.";

var cb1 = function(){
    setTimeout(function(){
        el.value = '';
        new TuringType(el, 'You can set me to be wildly inaccurate.', { accuracy: .5, callback: cb2 });
    }, 2000);
}

var cb2 = function(){
    setTimeout(function(){
        el.value = '';
        new TuringType(el, 'Or maybe wildly inaccurate and very fast for an interesting effect.', { accuracy: .3, interval: 15, callback: cb3 });
    }, 2000);
}

var cb3 = function(){
    setTimeout(function(){
        el.value = '';
        new TuringType(el, corpus2);
    }, 2000);
}

var el = document.getElementById('test');
new TuringType(el, corpus1, { callback: cb1 });
