let topBar=document.querySelector("#header__nav-menu-icon--t"),midBar=document.querySelector("#header__nav-menu-icon--m"),botBar=document.querySelector("#header__nav-menu-icon--b"),navList=document.querySelector("#header__nav"),menuClosed=!0;document.querySelector("#header__nav-menu").addEventListener("click",function(){menuClosed=menuClosed?(navList.style.width="100%",new Promise((e,t)=>{topBar.style.top="9px",botBar.style.top="9px",midBar.style.visibility="hidden",setTimeout(()=>{e()},200)}).then(()=>{topBar.style.transform="rotate(45deg)",botBar.style.transform="rotate(-45deg)"}),!1):(navList.style.width="0%",new Promise((e,t)=>{topBar.style.transform="rotate(0deg)",botBar.style.transform="rotate(0deg)",midBar.style.visibility="visible",setTimeout(()=>{e()},200)}).then(()=>{topBar.style.top="0",botBar.style.top="18px"}),!0)});