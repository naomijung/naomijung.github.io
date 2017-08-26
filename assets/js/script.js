function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav-item-container a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav-item-container a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
    
    if ($('#nav-item-container #nav-home a').hasClass("active")) {
        $("#nav-topbar").css("display", "none")
        $("#nav-topbar-about").css("display", "block")
    } else {
        $("#nav-topbar").css("display", "block")
        $("#nav-topbar-about").css("display", "none")

    }
}


$(document).ready(function() {

    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    

    // MENU
    $(".menu-button").click(function() {
        $("#grayed-out-box").css("display", "block")
        $("#nav-sidebar").css("display", "block")
        $("#grayed-out-box").addClass("nav-open")
        $("body").css("overflow-y", "hidden")
    })

    $("#grayed-out-box").click(function() {
        if ($("#grayed-out-box").hasClass("video-open")) {
            $("#grayed-out-box").removeClass("video-open")
            $("video").css("display", "none");
            $("body").css("overflow-y", "auto")

            $('#painting-greys-vid').get(0).pause();
            $('#lose-it-vid').get(0).pause();
            $('#heal-vid').get(0).pause();
            $('#dead-water-vid').get(0).pause();
            $('#donq-vid').get(0).pause();
            $('#ss-vid').get(0).pause();
        }
        if ($("#grayed-out-box").hasClass("nav-open")) {
            $("#grayed-out-box").removeClass("nav-open")
            $("#nav-sidebar").css("display", "none");
            $("body").css("overflow-y", "auto")
        }
        $("#grayed-out-box").css("display", "none")
        $("#video-container").css("z-index", "-10")
    })

    $('#sidebar-exit').click(function() {
        $("#grayed-out-box").removeClass("nav-open")
        $("#nav-sidebar").css("display", "none");
        $("body").css("overflow-y", "auto")
        $("#grayed-out-box").css("display", "none")
    })

    $('#menu-items a').click(function() {
        $("#grayed-out-box").removeClass("nav-open")
        $("#nav-sidebar").css("display", "none");
        $("body").css("overflow-y", "auto")
        $("#grayed-out-box").css("display", "none")
        $('#menu-items a').removeClass("on")
        $(this).addClass("on")
    })

    $('#sidebar-heading a').click(function() {
        $("#grayed-out-box").removeClass("nav-open")
        $("#nav-sidebar").css("display", "none");
        $("body").css("overflow-y", "auto")
        $("#grayed-out-box").css("display", "none")
        $('#menu-items a').removeClass("on")
        $(this).addClass("on")
    })


    // WORK
    $(".bar").click(function () { 
        if ($(this).hasClass("show-text")) { 
            $(this).removeClass("show-text"); 
            $(this).find(".close").css("display", "none");
            $(this).find(".learn-more").css("display", "table-cell");
            $(this).parent().find(".description").css("display","none");
        } else {
            $(this).addClass("show-text"); 
            $(this).find(".close").css("display", "table-cell");
            $(this).find(".learn-more").css("display", "none");
            $(this).parent().find(".description").css("display","block");
        }
    });

    //DANCE
    $(".thumbnail").hover(function() {
        $(this).find(".overlay").css("display", "inline-block");
        $(this).find(".non-overlay").css("display", "none");
        $('body').css('cursor', 'pointer')
        //$(this).find(".dance-label").css("display", "inline-block");
    }, function() {
        $(this).find(".non-overlay").css("display", "inline-block");
        $(this).find(".overlay").css("display", "none");
        $('body').css('cursor', 'default')
        //$(this).find(".dance-label").css("display", "none");
    })

    $(".thumbnail").click(function() {
        $("#video-container").css("z-index", "20");
        $("body").css("overflow-y", "hidden");
    }
    )

    $("#painting-greys").click(function() {
        $("#painting-greys-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
        $('#painting-greys-vid').get(0).currentTime = 0;
        $('#painting-greys-vid').get(0).play();
    })

    $("#lose-it").click(function() {
        $("#lose-it-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
        $('#lose-it-vid').get(0).currentTime = 0;
        $('#lose-it-vid').get(0).play();
    })

    $("#heal").click(function() {
        $("#heal-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
        $('#heal-vid').get(0).currentTime = 0;
        $('#heal-vid').get(0).play();
    })

    $("#dead-water").click(function() {
        $("#dead-water-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
        $('#dead-water-vid').get(0).currentTime = 0;
        $('#dead-water-vid').get(0).play();
    })

    $("#donq").click(function() {
        $("#donq-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
        $('#donq-vid').get(0).currentTime = 0;
        $('#donq-vid').get(0).play();
    })

    $("#ss").click(function() {
        $("#ss-vid").css("display", "block");
        $("#grayed-out-box").css("display", "block")
        $("#grayed-out-box").addClass("video-open")
        $('#ss-vid').get(0).currentTime = 0;
        $('#ss-vid').get(0).play();
    })

    // CONTACT
    $("#emailer").on("submit", function(){
        $.ajax({
            url: "http://formspree.io/naomi.jung16@gmail.com", 
            method: "POST",
            data: {
                    name: $('#emailer').find('input[name="name"]').val(),
                    email: $('#emailer').find('input[name="email"]').val(),
                    message: $('#emailer').find('input[name="message"]').val(),
                    _subject: "Message from naomijung.github.io",
                },
            dataType: "json"
        });
        $("#emailer").css("display",'none')
        $("#received-message").css("display", 'block')
        return false;
    })
});




