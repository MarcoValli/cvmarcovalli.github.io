$(function() {
    $("a[href*=#]:not([href=#]):not([data-parent=#accordion])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash),
                b = this.hash.slice(1);
            if (a = a.length ? a : $("[name=" + b + "]"), "gotop" === b && $("html,body").stop().animate({
                scrollTop: 0
            }, 1e3), a.length) return $("html,body").stop().animate({
                scrollTop: a.offset().top -80
            }, 1e3), !1
        }
    })
}), $(function() {
    $("a[data-parent=#accordion]").on("click", function(a) {
        a.preventDefault();
        var b = $(this.hash);
        window.setTimeout(function() {
            $("html,body").stop().animate({
                scrollTop: b.offset().top -245
            }, 1e3)
        }, 400)
    })
}), $(window).bind("mousewheel DOMMouseScroll", function(a) {
    a.originalEvent.wheelDelta > 0 || a.originalEvent.detail < 0, $("html,body").stop()
}), $(function() {
    $(".structure-block a").on("click", function() {
        var a = $(this.hash).selector,
            b = a + " .structure-details";
        $(b).slideToggle(), $(".structure-details:not(" + b + ")").slideUp()
    })
});
