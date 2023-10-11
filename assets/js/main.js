let observer;

observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})

const ele = document.querySelectorAll('.hidden');
ele.forEach((el)=>observer.observe(el));

//
$(window).on('scroll', ()=>{
    let scroll = $(window).scrollTop();
    if(scroll < 600){
        $('.header-nav').removeClass('sticky');
    }else{
        $('.header-nav').addClass('sticky');
    }
})

$('.responsive-header-left .search-btn i').on('click', ()=>{
   
    $('.responsive-header-left .search-btn i').toggleClass('fa-times');
    $('.header-top-responsive .search-box').toggleClass('open');
    $('.header-top-responsive').toggleClass('mb-5');
    $('.header-nav .border').toggleClass('mt-5');
})