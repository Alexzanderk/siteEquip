export const tab = (function () {
    $(".product__list__link").on("click", function (e) {
        e.preventDefault();

        let item = $(this).closest(".product__list__item"),
            contentItem = $(".catalog__item"),
            itemPosition = item.index();

        contentItem
            .eq(itemPosition)
            .add(item)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });

    // const tabButton = document.querySelectorAll('.product__list__link');
    
    // function toggleTab(event) {
    //     event.preventDefault();

    //     let parent = Array.prototype.slice.call(this.parentNode.parentNode.children);
    //     console.log(parent.indexOf(this));
    // }

    // tabButton.forEach(button => button.addEventListener('click', toggleTab));


})();