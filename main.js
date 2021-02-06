
// Change the button state

// using jQuerry 

// $(".day-wrapper a").click(function(e) {
//     e.preventDefault();
//     $("a").removeClass("btn-active");
//     $(this).addClass("btn-active");
//     console.log($(this));
//  });

// Vanilla JS
function changeButtonState(e) {
    e.preventDefault();
    let activeButton = document.querySelector('.btn-active');
    if (activeButton !== null) {
        activeButton.classList.remove('btn-active');
    }
    e.target.className = "btn-active";
}
