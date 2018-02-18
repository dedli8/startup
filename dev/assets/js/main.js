// owl carousel initialize

$('.owl-carousel').owlCarousel({
    items: 4,
    loop:true,
    margin:30,
    nav:true,
    dots:false
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