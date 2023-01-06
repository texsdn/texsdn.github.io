
const che = document.querySelector("input[id=toggler]");


document.addEventListener("DOMContentLoaded", function() {
    var color = localStorage.getItem("color-mode")
    if (color=="dark" || (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('color-mode'))) {
    che.setAttribute("class", "dark");
    document.documentElement.setAttribute("color-mode", "dark");
    } else if (color=="light") {
        che.setAttribute("class", "light"); 
        document.documentElement.setAttribute("color-mode", "light");
    } else {
        document.documentElement.setAttribute("color-mode", "light");
    }
  });

// This code assumes a Light Mode default
if (
    /* This condition checks whether the user has set a site preference for dark mode OR a OS-level preference for Dark Mode AND no site preference */
    localStorage.getItem('color-mode') === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
     !localStorage.getItem('color-mode'))
) {
    // if true, set the site to Dark Mode
    document.documentElement.setAttribute('color-mode', 'dark')
}

// Listen for a click on the button
che.addEventListener('click', function() {
if (che.classList.contains("light")){
        document.documentElement.setAttribute("color-mode", "dark");
        che.setAttribute("class", "dark")
        localStorage.setItem("color-mode", "dark");
  console.log("Switch to dark");
} else if (che.classList.contains("dark")) {
    document.documentElement.setAttribute("color-mode", "light");
    che.setAttribute("class", "light")
    localStorage.setItem("color-mode", "light");

console.log("Switch to light");
} 
else {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.documentElement.setAttribute("color-mode", "light"); 
  console.log("default"); 
}
})
