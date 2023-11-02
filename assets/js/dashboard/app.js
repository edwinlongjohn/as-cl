//animation for preloader 
setTimeout(() => {
    $('.loader-bg').fadeToggle();
}, 1500);

const bar = $('.open-bar');

bar.on('click', ()=>{
    $('.sidebar aside').addClass('open');
    $('.overlay').css('display', 'block');
    $('.overlay').on('click', ()=>{
        $('.overlay').css('display', 'none')
        $('.sidebar aside').removeClass('open');
    })
})