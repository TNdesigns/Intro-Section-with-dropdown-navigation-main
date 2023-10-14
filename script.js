document.addEventListener("DOMContentLoaded", function() {
    const ftrBtn = document.getElementById("ftrs");
    const l1 = document.getElementById("l1");
    const list1 = document.getElementById("list1");
    const cmBtn = document.getElementById("cmpny");
    const l2 = document.getElementById("l2");
    const lst2 = document.getElementById("list2");

    ftrBtn.addEventListener("click", function() {    
        if (l1.style.display === "none" || l1.style.display === "") {
            l1.style.display = "block";
        } else {
            l1.style.display = "none";
        }
        if (list1.style.display === "none" || list1.style.display === "") {
            list1.style.display = "block";
        } else {
            list1.style.display = "none";
        }
    })
    cmBtn.addEventListener("click", function() {    
        if (l2.style.display === "none" || l2.style.display === "") {
            l2.style.display = "block";
        } else {
            l2.style.display = "none";
        }
        if (lst2.style.display === "none" || lst2.style.display === "") {
            lst2.style.display = "block";
        } else {
            lst2.style.display = "none";
        }
    })
    
})
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const fbn = document.getElementById("fbtn");
    const lt1 = document.getElementById("lst1");
    const cbn = document.getElementById("cbtn");
    const lt2 = document.getElementById("lst2");
    const navLnk = document.getElementById("nav-links");
    const ovrlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", function() {
        menuBtn.classList.toggle("active");
        const b1 = document.getElementById("bar1");
        const b2 = document.getElementById("bar2");
        const b3 = document.getElementById("bar3");
    
        b1.classList.toggle("active");
        b2.classList.toggle("active");
        b3.classList.toggle("active");
        if (menuBtn.classList.contains("active")) {
            navLnk.style.opacity = "1";
        } else {
            navLnk.style.opacity = "0";
        }
        if (menuBtn.classList.contains("active")) {
            ovrlay.style.opacity = "1";
        } else {
            ovrlay.style.opacity = "0";
        }
    });
    fbn.addEventListener("click", function() {
        if (lt1.style.display === "none" || lt1.style.display === "") {
            lt1.style.display = "block";
        } else {
            lt1.style.display = "none";
        }
    })
    cbn.addEventListener("click", function() {
        if (lt2.style.display === "none" || lt2.style.display === "") {
            lt2.style.display = "block";
        } else {
            lt2.style.display = "none";
        }
    })
})