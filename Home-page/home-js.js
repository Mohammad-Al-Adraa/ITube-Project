function $(id) {
    return document.getElementById(id);
}

function resp1() {
    $("sidebar").style.width = "80px";
    $("main").style.marginLeft = "80px";
    $("show1").classList.add("resp");
    $("show2").classList.add("resp1");
    $("c1").classList.add("n");
    $("c2").classList.add("n");
    $("c3").classList.add("n");
    $("c4").classList.add("n");
    $("c5").classList.add("n");
    var l1 = document.getElementsByClassName("grouped-icons");
    for (let index = 2; index < l1.length; index++) {
        l1[index].style.display = "none";
    }
}

function resp2() {
    $("sidebar").style.width = "250px";
    $("main").style.marginLeft = "250px";
    $("show1").classList.remove("resp");
    $("show2").classList.remove("resp1");
    $("c1").classList.remove("n");
    $("c2").classList.remove("n");
    $("c3").classList.remove("n");
    $("c4").classList.remove("n");
    $("c5").classList.remove("n");
    var l1 = document.getElementsByClassName("grouped-icons");
    for (let index = 2; index < l1.length; index++) {
        l1[index].style.display = "flex";
    }
}

function resp3() {
    $("sidebar-btn").onclick = function() {
        var myNav = $("myNav");
        if (myNav.classList.contains("rOverlay") == false) {
            openNav();
            resp2();
            myNav.classList.add("rOverlay");
        } else {
            closeNav();
            myNav.classList.remove("rOverlay");
            resp1();
        }
    };
}

function resp4() {
    $("sidebar-btn").onclick = function() {
        var myNav = $("myNav");
        if (myNav.classList.contains("rOverlay") == false) {
            openNav();
            resp2();
            myNav.classList.add("rOverlay");
        } else {
            closeNav();
            $("sidebar").style.width = "0px";
            $("main").style.marginLeft = "0px";
            myNav.classList.remove("rOverlay");
        }
    };
}

window.onload = function() {

    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });

    let all = document.querySelectorAll('.video-container');

    for (var i = 0; i < all.length; i++) {
        all[i].addEventListener("mouseover", function(e) {
            this.childNodes[1].childNodes[3].classList.remove("hidden");
        });
        all[i].addEventListener("mouseout", function() {
            this.childNodes[1].childNodes[3].classList.add("hidden");
        });
    }
    $("s1").onclick = function() {
        document.getElementsByClassName("search-bar")[0].style.display = "flex";
        $("go-back").style.display = "block";
        document.getElementsByClassName("menu-bar")[0].style.display = "none";
        document.getElementsByClassName("menu-icons")[0].style.display = "none";
        document.getElementsByClassName("search-bar")[0].setAttribute("width", "100%");
    };

    $("dropdown1").onclick = drp1;
    $("dropdown2").onclick = drp2;

    $("go-back").onclick = function() {
        document.getElementsByClassName("search-bar")[0].style.display = "none";
        $("go-back").style.display = "none";
        document.getElementsByClassName("menu-bar")[0].style.display = "flex";
        document.getElementsByClassName("menu-icons")[0].style.display = "grid";
        document.getElementsByClassName("search-bar")[0].setAttribute("width", "60%");
    };

    function myFunction(x) {
        if (x.matches) {
            resp1();
            resp3();
            $("myNav").onclick = function() {
                $("myNav").style.width = "0px";
                resp1();
            };
        } else {
            resp2();
            $("sidebar-btn").onclick = ShowOrHide;
        }
    }

    function myFunction1(y) {
        if (y.matches) {
            $("sidebar").style.width = "0px";
            $("main").style.marginLeft = "0px";
            $("s1").style.display = "block";
            document.getElementsByClassName("search-bar")[0].style.display = "none";
            resp4();
            $("myNav").onclick = function() {
                $("myNav").style.width = "0px";
                $("sidebar").style.width = "0px";
                $("main").style.marginLeft = "0px";
            };
        } else {
            $("s1").style.display = "none";
            document.getElementsByClassName("search-bar")[0].style.display = "flex";
            resp2();
            $("sidebar-btn").onclick = ShowOrHide;
        }
    }
    var x = window.matchMedia("(max-width: 1200px)");
    var y = window.matchMedia("(max-width: 650px)");
    myFunction(x);
    myFunction1(y);
    x.addListener(myFunction);
    y.addListener(myFunction1);
}


function ShowOrHide() {
    var sidebar = $("sidebar-btn");
    if (sidebar.classList.contains("hide") == false) {
        resp1();
        sidebar.classList.add("hide");
    } else {
        resp2();
        sidebar.classList.remove("hide");
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function drp1() {
    $("showdrp").classList.toggle("show");
}

function drp2() {
    $("showdrp1").classList.toggle("show");
}