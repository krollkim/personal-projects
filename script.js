const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container ");
const menu_links = document.querySelectorAll(".header .nav-bar .nav-list ul li a");

// Create and add scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () =>{
    let scroll_position = window.scrollY;
    if(scroll_position > 250){
      header.style.backgroundColor = '#29323c';
    }else{
      header.style.backgroundColor = 'transparent';
    }
    
    // Update progress bar
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scroll_position / scrollHeight) * 100;
    progressBar.style.width = scrollProgress + '%';
    
    // Add subtle parallax effect to hero background
    const hero = document.querySelector('#hero');
    if (hero) {
      const rate = scroll_position * -0.5;
      hero.style.backgroundPosition = `center ${rate}px`;
    }
})

menu_links.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
  });
});

// Intersection Observer for bidirectional scroll animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is entering viewport - animate in
      entry.target.classList.add('visible');
    } else {
      // Element is leaving viewport - animate out
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

// Initialize scroll animations when DOM is loaded
function initScrollAnimations() {
  // Add animation classes to elements
  const servicesSection = document.querySelector('#services');
  const serviceItems = document.querySelectorAll('#services .service-item');
  const projectItems = document.querySelectorAll('#projects .project-item');
  const aboutSection = document.querySelector('#about');
  const contactSection = document.querySelector('#contact');
  
  // Services section fade in
  if (servicesSection) {
    servicesSection.classList.add('scroll-fade-in');
    observer.observe(servicesSection);
  }
  
  // Service items stagger animation
  serviceItems.forEach((item, index) => {
    item.classList.add('scroll-fade-in', `stagger-${index + 1}`);
    observer.observe(item);
  });
  
  // Project items alternating slide animations
  projectItems.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add('scroll-slide-left');
    } else {
      item.classList.add('scroll-slide-right');
    }
    observer.observe(item);
  });
  
  // About section slide from left
  if (aboutSection) {
    aboutSection.classList.add('scroll-slide-left');
    observer.observe(aboutSection);
  }
  
  // Contact section fade in
  if (contactSection) {
    contactSection.classList.add('scroll-fade-in');
    observer.observe(contactSection);
  }
  
  // Contact items stagger
  const contactItems = document.querySelectorAll('#contact .contact-item');
  contactItems.forEach((item, index) => {
    item.classList.add('scroll-fade-in', `stagger-${index + 1}`);
    observer.observe(item);
  });
}

// Initialize animations when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}

// Enhanced smooth scrolling for navigation links
menu_links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

