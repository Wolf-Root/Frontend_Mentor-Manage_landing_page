$(document).ready(function () {
    // ===== Change header background when scrolling =====
    $(window).on("scroll", function () {
        const scrollTop = $(this).scrollTop();
        const $header = $("header");

        if (scrollTop > 100) {
            $header.addClass("bg-white shadow-sm");
        } else {
            $header.removeClass("bg-white shadow-sm");
        }
    });

    // ===== Overlay on mobile Menu =====
    $(".menu").on("click", function () {
        const $menu = $("#mobileMenu");
        const $overlay = $("#overlay");
        const $openIcon = $("#open");

        $menu.slideToggle("fast", function () {
            const isVisible = $menu.is(":visible");

            // Toggle menu icon between open and closed menu
            $openIcon.html(
                isVisible
                    ? '<i class="fa-solid fa-xmark fa-xl"></i>'
                    : '<i class="fa-solid fa-bars fa-xl"></i>'
            );

            // Disable scrolling when opening the menu
            $("body").toggleClass("no-scroll", isVisible);

            // Show or hide the overlay
            $overlay.toggleClass("d-none", !isVisible);
        });
    });

    // ===== Close the menu when clicking on the Overlay =====
    $("#overlay").on("click", function () {
        $("#mobileMenu").slideUp("fast");
        $("#open").html('<i class="fa-solid fa-bars fa-xl"></i>');
        $("body").removeClass("no-scroll");
        $(this).addClass("d-none");
    });
});

// ===== Configure Glide.js with screen responsive settings =====
new Glide(".glide", {
    type: "carousel",
    perView: 3,
    breakpoints: {
        1024: { perView: 3 },
        768: { perView: 2 },
        425: { perView: 1 },
    },
}).mount();
