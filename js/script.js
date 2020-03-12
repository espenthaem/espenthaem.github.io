/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function show_dreaming() {
  var content_div = document.getElementById("dreaming");

  if (content_div.style.display == "block") {
    content_div.style.display = "none";
  } else {
    content_div.style.display = "block";
  }
}
