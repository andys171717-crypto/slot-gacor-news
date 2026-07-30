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

const newsPopup=document.getElementById("newsPopup");

const popupClose=document.getElementById("popupClose");

const popupLater=document.getElementById("popupLater");

const popupEnable=document.getElementById("popupEnable");

if(newsPopup){

    setTimeout(()=>{

        newsPopup.classList.add("show");

    },1000);

}

popupClose?.addEventListener("click",()=>{

    newsPopup.classList.remove("show");

});

popupLater?.addEventListener("click",()=>{

    newsPopup.classList.remove("show");

});

popupEnable?.addEventListener("click",()=>{

    window.open("https://www.cnbcindonesia.com/","_blank");

});
