$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 2){
            $('.home-section nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
        }
    })
});

const home_id = document.getElementById("home");
home_id.addEventListener("click", function(){
    $("html,body").animate({ scrollTop : 0 }, "slow");
});

const about_id = document.getElementById("about_id");
about_id.addEventListener("click", function(){
    $("html,body").animate({ scrollTop : 780 }, "slow");
});
