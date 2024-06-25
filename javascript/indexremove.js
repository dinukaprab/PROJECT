if (window.location.href.endsWith("/index.html")) {
    var newUrl = window.location.href.replace("/index.html", "");
        history.replaceState({}, document.title, newUrl);
} else if (window.location.href.endsWith("/")) {
    var newUrl = window.location.href.slice(0, -1);
        history.replaceState({}, document.title, newUrl);
}