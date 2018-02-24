var slideIndex = 0;
let style = 
{
display: 'block'
};
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides fade");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        changeDisplay(slides[slideIndex-1]); 
        setTimeout(showSlides, 5000); // Change image every 2 seconds
    }
    
   showSlides();

   function changeDisplay(eachSlide) 
   {
eachSlide =  {style};
   }