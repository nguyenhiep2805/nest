//Menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//Typewriter
function typeWrite(element) {
  const TextArray = element.innerHTML.split("");
  element.innerHTML = " ";
  TextArray.forEach(function (letra, i) {
    setTimeout(function () {
      element.innerHTML += letra;
    }, 100 * i);
  });
}
const title = document.querySelector(".sub");
typeWrite(title);

//Scroll TOP
$(document).ready(function () {
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    //Y amount the scroll button will appear
    if (topPos > 500) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  //Speed to animation
  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
    return false;
  });
});

//Reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});

//Home delay
sr.reveal(".button", { delay: 200 });
sr.reveal(".ProjectLanguages", { delay: 400 });
sr.reveal(".img-space-delay", { delay: 200 });
sr.reveal(".img-man-delay", { delay: 600 });
sr.reveal(".scroll-delay", { delay: 1000 });
//About me delay
sr.reveal(".img-delay", {});
sr.reveal(".title-delay", { delay: 200 });
sr.reveal(".description-delay", { delay: 400 });
sr.reveal(".cards-interval", { interval: 400 });

//Experience animation
var text1 = document.querySelector(".changeTextDescription");

document.querySelector(".html").addEventListener("mouseover", function () {
  text1.innerHTML =
    "HTML là một ngôn ngữ dựa trên đánh dấu, nơi chúng tôi đánh dấu các phần tử để xác định thông tin mà trang sẽ hiển thị. <br> <br> 2 năm kinh nghiệm";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  text1.innerHTML =
    "CSS là một ngôn ngữ biểu định kiểu “phân lớp” được tạo ra với mục đích tạo kiểu cho các trang HTML. <br> <br> 2 năm kinh nghiệm";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  text1.innerHTML =
    "JavaScript là một ngôn ngữ lập trình thông dịch kịch bản có cấu trúc, cấp độ cao với tính năng nhập động và đa ký hiệu yếu. <br> <br> 1 năm kinh nghiệm";
});

document.querySelector(".tailwind").addEventListener("mouseover", function () {
  text1.innerHTML =
    "Tailwind CSS là một khung công tác được thiết kế để tối đa hóa tiềm năng của CSS cũ tốt và đưa nó đi xa hơn nữa. <br> <br> 1 tháng kinh nghiệm";
});

document.querySelector(".sass").addEventListener("mouseover", function () {
  text1.innerHTML =
    "SASS (bộ tiền xử lý) là một ngôn ngữ bảng định kiểu. Nó là một ngôn ngữ kịch bản đơn giản được sử dụng trong các tệp Sass. <br> <br> 8 tháng kinh nghiệm";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  text1.innerHTML =
    "React là một thư viện JavaScript mã nguồn mở tập trung vào việc tạo giao diện người dùng trên các trang web. <br> <br> 3 tháng kinh nghiệm";
});

document.querySelector(".next").addEventListener("mouseover", function () {
  text1.innerHTML =
    "Next.js là một khung công tác web cho phép các chức năng như hiển thị phía máy chủ và tạo trang web tĩnh dựa trên React. <br> <br> 3 tháng kinh nghiệm";
});

document
  .querySelector(".styled")
  .addEventListener("mouseover", function changetext8() {
    text1.innerHTML =
      "Styled Components là một thư viện sử dụng khái niệm CSS-in-JS, tức là nó cho phép chúng ta viết mã CSS trong Javascript. <br> <br> 3 tháng kinh nghiệm";
  });

var exitBox = document.getElementsByClassName("exitBox");

for (i = 0; i < exitBox.length; i++) {
  exitBox[i].addEventListener("mouseout", function changetextNormal() {
    text1.innerHTML = `Tôi tin rằng cùng nhau chúng ta sẽ đạt được những điều đáng kinh ngạc💜 <br> <br> * Di chuột qua từng thẻ để xem nội dung *`;
  });
}


