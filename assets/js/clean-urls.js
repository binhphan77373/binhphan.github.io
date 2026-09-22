// Resolve routes relative to this script so project-site prefixes are preserved.
(() => {
    const base = new URL('../../', document.currentScript.src);
    const url = new URL(window.location.href);
    const isHome = url.pathname === base.pathname ||
        url.pathname === `${base.pathname}index.html`;

    if (isHome && url.hash === '#projects') {
        const target = new URL('projects/', base);
        target.search = url.search;
        window.location.replace(target.href);
    } else if (url.pathname.endsWith('/index.html')) {
        url.pathname = url.pathname.slice(0, -'index.html'.length);
        window.history.replaceState(window.history.state, '', url.href);
    }
})();
