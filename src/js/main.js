export const initOwl = () => {
    window.$(document).ready(function(){
        let owl = window.$('.owl-carousel');

        owl.owlCarousel({
            responsive: {
                0 : {
                    items : 1,
                    nav : true,
                    slideBy:1,
                    loop: true
                    // autoplay: true
                },
                632: {
                    items : 3,
                    nav: false,
                    mouseDrag:false
                }
            }
        });
        window.$('.next').click(function(){
            owl.trigger('next.owl.carousel');
        });
        window.$('.prev').click(function(){
            owl.trigger('prev.owl.carousel', [300]);
        })
        window.$('.btn').on('click', function(){
            window.$('.mainModal').toggleClass('active')
        })
        window.$('.cancelBut').on('click', function(){
            window.$('.mainModal').removeClass('active')
        })
    });
}