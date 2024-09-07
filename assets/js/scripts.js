$(document).ready(function () {
    // navbar mobile
    $(".navigation-toggle").click(function () {
        $(this).toggleClass("active");
        $(".navigation-menu").toggleClass("active");
    });
    // navbar scroll
    $(document).scroll(function () {
        var $nav = $("#header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    // counter
    $('.counter').each(function () {
        var $this = $(this),
            target = $this.attr('data-target');

        $({ countNum: $this.text() }).animate({
            countNum: target
        },
            {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
    });
    // testimonial slider
    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i></div>',
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });
    // Popular Categories Tabs 
    $(".tabs li:first-child").addClass("active");
    $(".tab-content .tab-pane:first-child").addClass("active");
    var interval = setInterval(function () {
        var activeTab = $(".tabs .active");
        // var activeTabIndex = activeTab.index();
        var nextTab = activeTab.next();
        if (!nextTab.length) {
            nextTab = $(".tabs li:first-child");
        }
        switchTab(nextTab);
    }, 15000);
    $(".tabs li").on("click", function () {
        switchTab($(this));
        clearInterval(interval);
        interval = setInterval(function () {
            var activeTab = $(".tabs .active");
            // var activeTabIndex = activeTab.index();
            var nextTab = activeTab.next();
            if (!nextTab.length) {
                nextTab = $(".tabs li:first-child");
            }
            switchTab(nextTab);
        }, 15000);
    });
    function switchTab(tab) {
        $(".tabs li").removeClass("active");
        tab.addClass("active");
        $(".tab-content .tab-pane").removeClass("active");
        var tabId = tab.attr("data-tab");
        $("#" + tabId)
            .addClass("active")
            .fadeIn("fast");
    }
});
