let navbar = document.querySelector('.navbar');

menubar.onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// Get the contact link element
const contactLink = document.getElementById('contact-link');

// Get the contact details element
const contactDetails = document.getElementById('contact-details');

// Add a click event listener to the contact link
contactLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior
    
    // Toggle the "show" class on the contact details to show/hide it
    contactDetails.classList.toggle('show');
});