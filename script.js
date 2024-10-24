const linkButton = document.querySelectorAll(".link-card .icons");
linkButton.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const getLink = e.target.parentElement.getAttribute("href");
        const copyLinkToClipBoard = navigator.clipboard.writeText(getLink);

        alert("link has been copied to clipboard");
    });
});