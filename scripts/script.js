window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const isWide = window.innerWidth >= 900; // wider than 900px?

    if (!isWide) {
        // On small screens, always remove class
        header.classList.remove('scrolled');
        return;
    }

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
