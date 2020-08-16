var home = document.getElementById("home");
var home_link = document.getElementById("home-link");
var profile = document.getElementById("profile");
var profile_link = document.getElementById("profile-link");
var abilities = document.getElementById("abilities");
var abilities_link = document.getElementById("abilities-link");
var projects = document.getElementById("projects");
var projects_link = document.getElementById("projects-link");
var contact = document.getElementById("contact");
var contact_link = document.getElementById("contact-link");
var arrow_link = document.getElementById("arrow");

home_link.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})
profile_link.addEventListener("click", () => {
    profile.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})
abilities_link.addEventListener("click", () => {
    abilities.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})
projects_link.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})
contact_link.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})
arrow_link.addEventListener("click", () => {
    profile.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})

AOS.init();


$(document).ready(function ($) {
    function animateElements() {
        $('.progressbar').each(function () {
            var size = 200;
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 150,
                    thickness: 15,
                    fill: {
                        color: '#00ddff'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
});