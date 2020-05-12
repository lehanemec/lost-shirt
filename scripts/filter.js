(function () {
        const elem = document.querySelector('.product__list');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.product__item',
    filter:'.popular'
});

    const controls = document.querySelectorAll('.filter__link');
    const activeClass = 'filter__item--active';

    controls.forEach(function (control) {
        control.addEventListener('click', function (a) {
            a.preventDefault();

            const filterName= control.getAttribute("data-filter");
            controls.forEach(function (link) {
                link.closest('.filter__item').classList.remove(activeClass);

            })
            control.closest('.filter__item').classList.add(activeClass);

            iso.arrange({
                filter:`.${filterName}`
            })
        })
    })
}())
