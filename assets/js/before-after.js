! function(a) {
    function b(b, c, d) {
        b.on("mousedown.ba-events touchstart.ba-events", function(e) {
            b.addClass("ba-draggable"), c.addClass("ba-resizable");
            var f = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX,
                g = b.outerWidth(),
                h = b.offset().left + g - f,
                i = d.offset().left,
                j = d.outerWidth();
            minLeft = i + 10, maxLeft = i + j - g - 10, b.parents().on("mousemove.ba-events touchmove.ba-events", function(b) {
                var c = b.pageX ? b.pageX : b.originalEvent.touches[0].pageX;
                leftValue = c + h - g, leftValue < minLeft ? leftValue = minLeft : leftValue > maxLeft && (leftValue = maxLeft), widthValue = 100 * (leftValue + g / 2 - i) / j + "%", a(".ba-draggable").css("left", widthValue), a(".ba-resizable").css("width", widthValue)
            }).on("mouseup.ba-events touchend.ba-events touchcancel.ba-events", function() {
                b.removeClass("ba-draggable"), c.removeClass("ba-resizable"), a(this).off(".ba-events")
            }), e.preventDefault()
        })
    }
    a.fn.beforeAfter = function() {
        var c = this,
            d = c.width() + "px";
        c.find(".resize img").css("width", d), b(c.find(".handle"), c.find(".resize"), c), a(window).resize(function() {
            var a = c.width() + "px";
            c.find(".resize img").css("width", a)
        })
    }
}(jQuery);