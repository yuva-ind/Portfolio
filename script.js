// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbars = document.querySelector('.navbar');

cv1.onclick = function(){
    open('cv/Yuvan_CV2.pdf')
    location.href = ('cv/yuvan_cv1.pdf');
 }

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbars.classList.toggle('active');
}
// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });

    //sticky header

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scrolls)
    menuIcon.classList.remove('bx-x');
    navbars.classList.remove('active');

};

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("expand");
    var btnText = document.getElementById("bt");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      dots.style.color = "#e7f8f8";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      moreText.style.color = "#e7f8f8";
    }
};

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }


  function check_if_capcha_is_filled (e) {
    if(allowSubmit) return true;
    e.preventDefault();
    alert('Fill in the capcha!');
}


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
                alert('Message Sent Successfully');
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});




