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


$(window).on('scroll', ()=>{
    let scroll = $(window).scrollTop();
    if(scroll < 600){
        $('.header-nav').removeClass('sticky');
    }else{
        $('.header-nav').addClass('sticky');
    }
})