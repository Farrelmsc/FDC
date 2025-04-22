// Smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    import('smoothscroll-polyfill').then(module => {
        module.polyfill();
    });
}