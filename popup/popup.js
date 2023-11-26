// this is javascript for  the popup //
document.addEventListener("DOMContentLoaded", function () {
    const page1Button = document.getElementById("page1Button");
    const page2Button = document.getElementById("page2Button");
    const pageFrame = document.getElementById("pageFrame");
  
    page1Button.addEventListener("click", function () {
      pageFrame.src = "page1.html";
    });
  
    page2Button.addEventListener("click", function () {
      pageFrame.src = "page2.html";
    });
   
  });