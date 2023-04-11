// $(".tab-button")
//   .eq(0)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(0).addClass("orange");
//     $(".tab-content").eq(0).addClass("show");
//   });

// $(".tab-button")
//   .eq(1)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(1).addClass("orange");
//     $(".tab-content").eq(1).addClass("show");
//   });

// $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-button").eq(2).addClass("orange");
//     $(".tab-content").eq(2).addClass("show");
//   });
let len = $(".tab-button").length;

let 버튼 = $(".tab-button");
let 설명 = $(".tab-content");

for (let i = 0; i < len; i++) {
  버튼.eq(i).on("click", function () {
    버튼.removeClass("orange");
    설명.removeClass("show");
    버튼.eq(i).addClass("orange");
    설명.eq(i).addClass("show");
  });
}
