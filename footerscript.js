
function adjustFooterPosition() {
    const contentHeight = document.body.clientHeight;
    const viewportHeight = window.innerHeight;

    if (contentHeight < viewportHeight) {
        document.querySelector('footer').style.position = 'fixed';
    } else {
        document.querySelector('footer').style.position = 'relative';
    }
}

window.addEventListener('DOMContentLoaded', adjustFooterPosition);
window.addEventListener('resize', adjustFooterPosition);

