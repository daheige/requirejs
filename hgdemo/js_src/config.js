require.config({
    paths: {
        "jquery": "libray/jquery-1.12.4.min",
        "jquery-cookie" : "libray/jquery.cookie",
        "jquery-rotate" : "libray/jquery-rotate-2.2",
        "scale_750": "libray/scale_750"
    },
    //解决浏览器不支持的依赖关系
    shim: {
        'jquery-cookie': ['jquery'],
        'jquery-rotate': ['jquery'],
        'dropload': ['jquery'],
    },
    waitSeconds: 100 // ie load modules timeout bug fixed
});
