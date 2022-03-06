on_off = true

function openNav() {
  if (on_off) {
    document.querySelector(".NavList").style.display = "block"
    Icons = document.querySelectorAll(".NavBarsIcon")
    Icons[1].style.position = "absolute"
    Icons[1].style.transform = "rotate(45deg)"
    Icons[2].style.transform = "rotate(135deg)"
    Icons[1].style.top = "10vw"
    Icons[1].style.background = "#0fbaaa"
    Icons[2].style.background = "#0fbaaa"
    on_off = false


  }
  else {
    document.querySelector(".NavList").style.display = "none"
    Icons = document.querySelectorAll(".NavBarsIcon")
    Icons[1].style.transform = "rotate(180deg)"
    Icons[1].style.position = "static"
    Icons[2].style.transform = "rotate(180deg)"
    Icons[1].style.background = "#fff"
    Icons[2].style.background = "#fff"
    on_off = true

  }
}