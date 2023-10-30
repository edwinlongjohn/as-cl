function addObserver(element, class1, class2, class3=''){
    let observer;
    const toggleCssClasses = (el, ...cls) => cls.map(cl=>el.classList.toggle(cl));
    observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            toggleCssClasses(entry.target, class1, class2, entry.isIntersecting); 
        })
    }, {threshold:0});
    
    const ele = document.querySelectorAll(element);
    ele.forEach((el)=>observer.observe(el));
}

addObserver('.fade-in-left', 'animate__animated', 'animate__fadeInLeft')
addObserver('.fade-in-right', 'animate__animated', 'animate__fadeInRight')
addObserver('.fade-in-up', 'animate__animated', 'animate__fadeInUp')

//to add position sticky to the navbar and to change menu to logo.
$(window).on('scroll', ()=>{
    let scroll = $(window).scrollTop();
    if(scroll < 600){
        $('.header-nav').removeClass('sticky-top');
        $('.header-nav').removeClass('p-2');
        $('.header-nav .navbar-brand').text('Menu');
        $('#totop').removeClass('top-visible')
    }else{
        $('.header-nav').addClass('sticky-top');
        $('.header-nav').addClass('p-2');
        $('.header-nav .navbar-brand').html('<a href="index.html" ><img class="img-fluid" src="assets/images/logo.png" alt="logo-img" width="100px" height="100px"/> </a>');
        $('#totop').addClass('top-visible')
    }
})

$('.responsive-header-left .search-btn i').on('click', ()=>{
    $('.responsive-header-left .search-btn i').toggleClass('fa-times');
    $('.header-top-responsive .search-box').toggleClass('open');
    $('.header-top-responsive').toggleClass('mb-5');    
    $('.header-nav .border').toggleClass('mt-5');
})

function download(){
        Swal.fire(
            'Coming Soon!',
            '',
            'info'
            );
}

const selectAnswer = $('#answer');
const selectWho = $('.who');
const selectWhoTab = $('.who-tab');
const selectWhoTab1 = $('.who-tab-1');
selectAnswer.on('change', ()=>{
    if(selectAnswer.val() === 'no'){
        $('.no-pop-up-message').css('display', 'block');
    }else{
        $('.no-pop-up-message').css('display', 'none');
    };

})

selectWho.on('change', () =>{
    console.log(selectWho.val());
    if(selectWho.val() === 'other'){
        $('#who-modal').modal('show');
    }
})
selectWhoTab.on('change', () =>{
    console.log(selectWhoTab.val());
    if(selectWhoTab.val() === 'other'){
        $('#who-modal').modal('show');
    }
})
selectWhoTab1.on('change', () =>{
    console.log(selectWhoTab1.val());
    if(selectWhoTab1.val() === 'other'){
        $('#who-modal').modal('show');
    }
})


//animation 
setTimeout(() => {
    $('.loader-bg').fadeToggle();
}, 1500);