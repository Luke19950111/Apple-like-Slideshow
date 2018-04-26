var $allThumbs = $('.menu>ul>li')
var $slides = $('.slides')
for(let i=0; i<$allThumbs.length; i++){
    $allThumbs.on('click', function(e){
        let index = $(e.currentTarget).index()
        $slides.css({transform: `translateX(${-index * 920}px)`})
        n = index
        activeThumb($allThumbs.eq(n))
    })
}

var n = 0
var size = $allThumbs.length
playSlide(n%size)

var timerId = setTimer()
$('#gallery').on('mouseenter', function(){
    clearInterval(timerId)
}).on('mouseleave', function(){
    timerId = setTimer()
})




//封装函数
function activeThumb($thumb){
    $thumb
    .addClass('active')
    .siblings('.active').removeClass('active')
}
function playSlide(index){
    $allThumbs.eq(index).trigger('click')
}
function setTimer(){
    return setInterval(function(){
                n += 1
                playSlide(n%size)
            },5000)
}