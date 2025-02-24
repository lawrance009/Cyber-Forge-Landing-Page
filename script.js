window.addEventListener("scroll", function () {
  document.querySelectorAll(".fade-in").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("show");
      }
  });
});

const sideBar = document.querySelector('.responsive-sidebar'); // Sidebar
const menuIcon = document.querySelector('.menu-icon i'); // Hamburger icon (fa-bars)

// Toggle the sidebar and icon
menuIcon.addEventListener('click', () => {
  if (sideBar.style.display === 'flex') {
    sideBar.style.display = 'none'; // Hide the sidebar
    menuIcon.classList.replace('fa-x', 'fa-bars'); // Change icon back to hamburger
  } else {
    sideBar.style.display = 'flex'; // Show the sidebar
    menuIcon.classList.replace('fa-bars', 'fa-x'); // Change icon to "X"
  }
});

// Close the sidebar when any sidebar link is clicked
const menuLinks = document.querySelectorAll('.responsive-sidebar .menu-link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sideBar.style.display = 'none'; // Hide the sidebar
    menuIcon.classList.replace('fa-x', 'fa-bars'); // Change icon back to hamburger
  });
});


// Select all menu links
const menuLink = document.querySelectorAll('.menu-link');

menuLink.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href'); // Get the href value
    const targetSection = document.querySelector(targetId); // Select the target section

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});




