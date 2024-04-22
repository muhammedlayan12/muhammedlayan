// script.ts
const navToggle: HTMLElement | null = document.querySelector('.navbar');
const navLinks: HTMLElement | null = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
});

const menuToggle: HTMLElement | null = document.querySelector('.menu-toggle');

menuToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector((this as HTMLAnchorElement).getAttribute('href'));
        if (target instanceof HTMLElement) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript for portfolio section

// Get all "View Details" buttons
const viewDetailsButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.portfolio-item .btn');

// Add click event listener to each button
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Log a message to the console
        console.log("View Details button clicked!");
    });
});

// JavaScript for skills section

// Function to animate skills when they enter the viewport
const animateSkills = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
};

// Create a new Intersection Observer
const skillsObserver: IntersectionObserver = new IntersectionObserver(animateSkills, {
    root: null,
    threshold: 0.5 // Trigger animation when 50% of the skills section is visible
});

// Get all skill elements
const skills: NodeListOf<HTMLElement> = document.querySelectorAll('.skill');

// Observe each skill element
skills.forEach(skill => {
    skillsObserver.observe(skill);
});

// JavaScript for intro-testimonials section

// Slideshow functionality for testimonials
const testimonials: NodeListOf<HTMLElement> = document.querySelectorAll('.testimonial');
let currentTestimonial: number = 0;

function showTestimonial(index: number) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block';
        } else {
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
document.addEventListener('DOMContentLoaded', function() {
    const form: HTMLFormElement | null = document.getElementById('contact-form') as HTMLFormElement | null;
    form?.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const name: string = (document.getElementById('name') as HTMLInputElement).value;
        const email: string = (document.getElementById('email') as HTMLInputElement).value;
        const message: string = (document.getElementById('message') as HTMLInputElement).value;

        // Send email notification
        sendNotification(name, email, message);

        // Optional: Display confirmation message to user
        alert('Your message has been sent. Thank you!');

        // Clear form fields
        form?.reset();
    });
});

function sendNotification(name: string, email: string, message: string) {
    // Function implementation for sending notification
}
