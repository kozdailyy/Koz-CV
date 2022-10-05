//NAVBAR
var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top='-80px';
    }
    else{
        navbar.style.top='0';
    }
    lastScrollTop = scrollTop;
});


//TYPED
var typed = new Typed('.typed', {
    strings: ["Hi everyone, I'm <strong>Koz daily</strong>.", "I am a student engineer in computer science. I am a <strong>full-stack</strong> developer and also an <strong>ethical hacker</strong>. I'm passionate about AI and I'm currently studying data science and deep learning. I master several languages including <strong>HTML CSS JAVASCRIPT PYTHON</strong> and also several frameworks such as <strong>REACT and DJANGO</strong>. Being also a gamer, I would like to start developing video games in the near future thanks to <strong>C++</strong> and <strong>C#</strong> languages."],
    typeSpeed: 30,
});

//COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function (){

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        
        $('.counter-value').each(function(){
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 10000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});

//AOS
AOS.init();