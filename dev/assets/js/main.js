// add active class to the current button (highlight it)

var btns = document.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// owl carousel initialize

$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:30,
    nav:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            center:true
        },
        640:{
            items:2,
            center:true
        },
        900:{
            items:3,
            center:true
        },
        1170:{
            items:4
        }
    }
});

// delete text in buttons in owl carousel

$(".owl-prev").html("");
$(".owl-next").html("");

// change img in second slider

(function () {
    var item = document.querySelectorAll('.footerslider-item img');
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener("mouseover", setWhiteImg);

        item[i].addEventListener("mouseout", setGrayImg);
    }
})();
function setWhiteImg (){
    var targetSrc = this.src;
    var newSrc = targetSrc.slice(0, -4);
    newSrc += "w.png";
    this.src = newSrc;
}
function setGrayImg (){
    var targetSrc = this.src;
    var newSrc = targetSrc.slice(0, -5);
    newSrc += ".png";
    this.src = newSrc;
}

// top window button

document.querySelector("footer > .case-icon-square").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});