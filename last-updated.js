(function () {
    var elements = document.querySelectorAll('[data-last-updated]');
    var modified = new Date(document.lastModified);

    if (Number.isNaN(modified.getTime())) return;

    elements.forEach(function (element) {
        var locale = element.getAttribute('data-locale') || 'en-US';
        var formatter = new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Shanghai'
        });

        element.dateTime = new Intl.DateTimeFormat('en-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'Asia/Shanghai'
        }).format(modified);
        element.textContent = formatter.format(modified);
    });
})();
