const accountButton = document.getElementById("headerAccount");
const accountDropdown = document.getElementById("accountDropdown");

if (accountButton && accountDropdown) {

    accountButton.addEventListener("click", function (event) {

        event.stopPropagation();

        accountDropdown.classList.toggle("show");

    });

    document.addEventListener("click", function (event) {

        if (!accountDropdown.contains(event.target)) {

            accountDropdown.classList.remove("show");

        }

    });

    accountDropdown.addEventListener("click", function (event) {

        event.stopPropagation();

    });

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            accountDropdown.classList.remove("show");

        }

    });

}
