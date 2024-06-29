document.addEventListener("DOMContentLoaded", function() {
    function setupShowMore(buttonId, blockClass) {
        const button = document.getElementById(buttonId);
        const blocks = document.querySelectorAll(`.${blockClass}.hidden`);
        let currentIndex = 0;
        const itemsPerPage = 3;

        button.addEventListener("click", function() {
            for (let i = currentIndex; i < currentIndex + itemsPerPage && i < blocks.length; i++) {
                blocks[i].classList.remove("hidden");
            }
            currentIndex += itemsPerPage;

            if (currentIndex >= blocks.length) {
                button.style.display = "none";
            }
        });
    }

    setupShowMore("htb-ver-mais", "htb-block");
    setupShowMore("dio-ver-mais", "dio-courses-block");
});

