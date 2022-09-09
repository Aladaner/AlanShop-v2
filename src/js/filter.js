let test = document.querySelectorAll('.icon-arrow');
let t2 = document.querySelectorAll('.filter__list');

if (test.length > 0) {
    for (let index = 0; index < test.length; index++) {
        const element = test[index];
        element.addEventListener("click", function (e) {
            element.parentElement.classList.toggle('category-show');
        });
    }
}