// script.ts
var navToggle = document.querySelector('.navbar');
var navLinks = document.querySelector('.nav-links');
navToggle === null || navToggle === void 0 ? void 0 : navToggle.addEventListener('click', function () {
    navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.toggle('active');
});
var menuToggle = document.querySelector('.menu-toggle');
menuToggle === null || menuToggle === void 0 ? void 0 : menuToggle.addEventListener('click', function () {
    navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.toggle('active');
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target instanceof HTMLElement) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// JavaScript for portfolio section
// Get all "View Details" buttons
var viewDetailsButtons = document.querySelectorAll('.portfolio-item .btn');
// Add click event listener to each button
viewDetailsButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();
        // Log a message to the console
        console.log("View Details button clicked!");
    });
});
// JavaScript for skills section
// Function to animate skills when they enter the viewport
var animateSkills = function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
        else {
            entry.target.classList.remove('animate');
        }
    });
};
// Create a new Intersection Observer
var skillsObserver = new IntersectionObserver(animateSkills, {
    root: null,
    threshold: 0.5 // Trigger animation when 50% of the skills section is visible
});
// Get all skill elements
var skills = document.querySelectorAll('.skill');
// Observe each skill element
skills.forEach(function (skill) {
    skillsObserver.observe(skill);
});
// JavaScript for intro-testimonials section
// Slideshow functionality for testimonials
var testimonials = document.querySelectorAll('.testimonial');
var currentTestimonial = 0;
function showTestimonial(index) {
    testimonials.forEach(function (testimonial, i) {
        if (i === index) {
            testimonial.style.display = 'block';
        }
        else {
            testimonial.style.display = 'none';
        }
    });
}
function nextTestimonial() {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
}
// Show the first testimonial initially
showTestimonial(currentTestimonial);
// Automatically switch to the next testimonial every 5 seconds
setInterval(nextTestimonial, 5000);
// Event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        // Send email notification
        sendNotification(name, email, message);
        // Optional: Display confirmation message to user
        alert('Your message has been sent. Thank you!');
        // Clear form fields
        form === null || form === void 0 ? void 0 : form.reset();
    });
});
function sendNotification(name, email, message) {
    // Function implementation for sending notification
}
