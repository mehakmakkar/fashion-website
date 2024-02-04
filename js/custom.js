
$("a.site-scroll-btn").click(e => {
    e.preventDefault();
    const id = e.target.hash;
    const offset = $(id).offset().top;
    $("html").animate({
        scrollTop: offset
    });
});