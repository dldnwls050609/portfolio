$(function () {
    $('.cbox .c1').click(function () {
        $('.cbox .c2 img').toggleClass('stop')
    })
})

//move
//스크롤 이동
const animationMove = function (selector) {
    //selector 매개변수로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector)
    // 현재 브라우저의 스크롤정보 (y값)
    const by = window.scrollY
    //이동할 대상의 위치(y값)
    const targetScrollY = targetEl.getBoundingClientRect().top + by
    //getBounding~~~: 요소의 크기와 뷰포트에 대한 상대적인 위치정보 제공
    //스크롤 이동
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' })
}

//스크롤 이벤트 연결
const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')
for (let i = 0; i < scrollMove.length; i++) {
    scrollMove[i].addEventListener('click', function () {
        const target = this.dataset.target;
        animationMove(target)
    })
}

(function () {
    const spanEl = document.querySelector('.line h1 span')
    const txtarr = ['web publisher', 'web UI designer', 'UX designer', 'woojin']

    let index = 0;
    let currentTxt = txtarr[index].split('')

    // write
    function writeTxt() {
        spanEl.textContent += currentTxt.shift()
        if (currentTxt.length !== 0) {
            // 배열 길이가 0이 아니면 출력해야하는 단어가 남아있다.
            setTimeout(writeTxt, Math.floor(Math.random() * 100))
        } else {
            // 배열 길이가 0이면 배열 안에 있는 모든 텍스트가 전부 화면에 출력
            currentTxt = spanEl.textContent.split('')
            setTimeout(deleteTxt, 3000)
        }
    }

    // delete
    function deleteTxt() {
        currentTxt.pop()
        spanEl.textContent = currentTxt.join('')
        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        } else {
            index = (index + 1) % txtarr.length;
            currentTxt = txtarr[index].split('')
            writeTxt()
        }
    }

    writeTxt()
})()

$(function () {
    // 윈도우 300px 스크롤하면 gotop 보이기
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }
    })

    // gotop을 클릭하면 이로 올라가도록 설정
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: '0'
        }, 1000)
    })

    // 요소,stop().animate({속성 : 속성값}, 시간)
})