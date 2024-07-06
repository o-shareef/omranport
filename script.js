// JavaScript to handle showing and hiding sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
  
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
  }
  
  // Initially show the About section
  document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
  });
  