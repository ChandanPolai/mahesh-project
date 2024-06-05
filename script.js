var sideBar = document.getElementById("mobile-nav");
            var openSidebar = document.getElementById("openSideBar");
            var closeSidebar = document.getElementById("closeSideBar");



            function sidebarHandler(flag) {
                if (flag) {
                    openSidebar.classList.add("hidden");
                    closeSidebar.classList.remove("hidden");
                    sideBar.classList.remove("hidden");
                } else {
                    sideBar.classList.add("hidden");
                    closeSidebar.classList.add("hidden");
                    openSidebar.classList.remove("hidden");
                }
            }



const loginPopup= document.querySelector('#login-popup');
const closeform= document.querySelector('#form-close-btn');
const signinBtn= document.querySelector('#signin-btn');

signinBtn.addEventListener('click',()=>{
    loginPopup.classList.remove('hidden');
})

closeform.addEventListener('click',()=>{
    loginPopup.classList.add('hidden');
})


