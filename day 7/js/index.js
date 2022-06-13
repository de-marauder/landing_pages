let showSidebar = false;
var showDropdown = false;
var showMenuDropdown = false;

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const navbarDropdownBtn = document.getElementById("navbar-dropdown-btn");
const navDropdown = document.getElementById("nav-dropdown");

const dropSoftware = document.getElementById("drop-software");
const dropPCDevices = document.getElementById("drop-pc-devices");
const dropEntertainment = document.getElementById("drop-entertainment");
const dropBusiness = document.getElementById("drop-business");
const dropDevIT = document.getElementById("drop-dev-IT");
const dropOther = document.getElementById("drop-other");

const software = document.getElementById("software");
const pcDevices = document.getElementById("pc-devices");
const entertainment = document.getElementById("entertainment");
const business = document.getElementById("business");
const devIT = document.getElementById("dev-IT");
const other = document.getElementById("other");

const toggleSidebar = () => {
  if (showSidebar) {
    sidebar.classList.remove("show");
    showSidebar = false;

    menuBtn.classList.remove("cancel");
  } else {
    sidebar.classList.add("show");
    showSidebar = true;

    menuBtn.classList.add("cancel");
  }
};

const toggleNavbarDropdown = (element) => {
  if (showDropdown) {
    element.classList.remove("show");
    showDropdown = false;
  } else {
    element.classList.add("show");
    showDropdown = true;
  }
};
const toggleDropdown = (parent, child) => {
  if (showMenuDropdown) {
    const activeChild = document.querySelector(".open-menu-dropdown");

    activeChild?.removeChild(activeChild.children[1]);
    activeChild?.classList.remove("open-menu-dropdown");

    if (activeChild !== parent) {
      parent.appendChild(child);
      parent.classList.add("open-menu-dropdown");
      showMenuDropdown = true;
    } else {
      showMenuDropdown = false;
    }
  } else {
    parent.appendChild(child);
    parent.classList.add("open-menu-dropdown");

    showMenuDropdown = true;
  }
};

menuBtn.addEventListener("click", toggleSidebar);
navbarDropdownBtn.addEventListener("click", () =>
  toggleNavbarDropdown(navDropdown, showDropdown)
);

dropSoftware.addEventListener("click", () =>
  toggleDropdown(dropSoftware, software, showMenuDropdown)
);
dropPCDevices.addEventListener("click", () =>
  toggleDropdown(dropPCDevices, pcDevices, showMenuDropdown)
);
dropBusiness.addEventListener("click", () =>
  toggleDropdown(dropBusiness, business, showMenuDropdown)
);
dropEntertainment.addEventListener("click", () =>
  toggleDropdown(dropEntertainment, entertainment, showMenuDropdown)
);
dropDevIT.addEventListener("click", () =>
  toggleDropdown(dropDevIT, devIT, showMenuDropdown)
);
dropOther.addEventListener("click", () =>
  toggleDropdown(dropOther, other, showMenuDropdown)
);

const scrollToTopBtn = document.getElementById("scroll-to-top");
const section2 = document.getElementById("section-2");

const scrollToTop = () => {
  const top = document.getElementById("top");
  top.scrollIntoView({ behavior: "smooth" });
};

scrollToTopBtn.addEventListener("click", scrollToTop);

const distanceOfscrollBtnFromTop =
  window.scrollY + scrollToTopBtn.getBoundingClientRect().top;
const distanceOfSection2FromTop =
  window.scrollY + section2.getBoundingClientRect().top;


document.addEventListener("scroll", () => {
  if (
    window.scrollY > distanceOfSection2FromTop &&
    window.scrollY + window.innerHeight < distanceOfscrollBtnFromTop 
  ) {
      scrollToTopBtn.classList.add("abs-btn");
    } else {
        scrollToTopBtn.classList.remove("abs-btn");
  }
});
