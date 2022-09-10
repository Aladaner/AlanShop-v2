let iconArrow = document.querySelectorAll('.icon-arrow');
let filterType = document.querySelector('.filter__type');

if (iconArrow.length > 0) {
    for (let index = 0; index < iconArrow.length; index++) {
        const element = iconArrow[index];
        element.addEventListener("click", function (e) {

            filterType.classList.toggle('category-show');
        });
    }
}