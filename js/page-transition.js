// Плавный переход между страницами: затемнение перед уходом по ссылке
document.querySelectorAll('.nav-menu a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        const href = link.getAttribute('href');

        // Не мешаем обычному поведению для якорей и внешних ссылок
        if (!href || href.startsWith('#') || href.startsWith('http')) return;

        // Не анимируем переход на текущую страницу
        if (href === location.pathname.split('/').pop()) {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        document.body.classList.add('page-leave');
        setTimeout(function () {
            window.location.href = href;
        }, 250);
    });
});

// При возврате назад/вперёд (bfcache) убираем затемнение
window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        document.body.classList.remove('page-leave');
    }
});
