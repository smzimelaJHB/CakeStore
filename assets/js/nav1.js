const openMenu = document.querySelector(".image").addEventListener("click", 
        (event)=>{
                document.querySelector(".image").style.display = "none";
                document.querySelector(".image2").style.display = "block";
                document.querySelector("nav").style.cssText = "display: block";
        });


const closeMenu = document.querySelector(".image2").addEventListener("click", 
    (event)=>{
            document.querySelector(".image").style.cssText = "display: block";
            document.querySelector(".image2").style.cssText = "display: none";
            document.querySelector("nav").style.cssText = "display: none";
            location.reload();
    });


const refreshed = document.querySelector("body").addEventListener("resize", (event)=>{
        location.reload();
});




