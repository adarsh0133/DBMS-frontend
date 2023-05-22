var cursor = document.querySelectorAll(".cursor");

window.addEventListener("mousemove", (dets) => {
    let x = dets.clientX;
    let y = dets.clientY;

    cursor.forEach( el => {
        el.style.left = `${x}px`
        el.style.top = `${y}px`
    })
})

setTimeout(() => {
    $('#main h1').textillate({
        in:
        {
            effect: 'fadeInUp',
            delayScale: 1.5,
            delay: 50,
        },
    });

    gsap.to("#main h2",{
        delay:3,
        onstart:function(){
            $('#main h2').textillate({
                in:
                {
                    effect: 'fadeInUp',
                    delayScale: 1.5,
                    delay: 50,
                },
            });
        }
    })
}, 5000);


gsap.to("#loading-page", {
    y: "-100%",
    delay: 5,
    duration: 1,
    ease: Power1.easeOut,
})

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});