// ===================================================
// 	 🔹   DASHBOARD
// ===================================================
document.addEventListener('DOMContentLoaded', function() {
            // Toggle sidebar on mobile
            const toggleSidebar = document.getElementById('toggleSidebar');
            const sidebar = document.getElementById('sidebar');
            const sidebarOverlay = document.getElementById('sidebarOverlay');
            
            toggleSidebar.addEventListener('click', function() {
                sidebar.classList.toggle('show');
                sidebarOverlay.classList.toggle('show');
            });
            
            sidebarOverlay.addEventListener('click', function() {
                sidebar.classList.remove('show');
                sidebarOverlay.classList.remove('show');
            });
            

// ===================================================
// 	 🔹 Navegacion entre secciones dentro de la pagina
// ===================================================
            
            const navLinks = document.querySelectorAll('.sidebar-menu a');
            const sections = document.querySelectorAll('.section-content');
            const pageTitle = document.getElementById('pageTitle');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all links and sections
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    sections.forEach(section => section.classList.remove('active'));
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Show corresponding section
                    const sectionId = this.getAttribute('data-section') + 'Section';
                    document.getElementById(sectionId).classList.add('active');

                    // Scroll to the activated section
                    const targetSection = document.getElementById(sectionId);
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    
                    // Update page title
                    pageTitle.textContent = this.textContent.trim();
                    
                    // Close sidebar on mobile
                    sidebar.classList.remove('show');
                    sidebarOverlay.classList.remove('show');
                });
            });
            

    // CIERRA MODAL AL HACER CLICK EN CUALQUIER PARTE
            window.addEventListener('click', function(e) {
                if (e.target === addRouteModal) {
                    addRouteModal.classList.remove('show');
                }
            });
            
            // Animation on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.fade-in');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Run once on page load
        });
    
// ============================================
// 	 🔹 BOTON FLOTANTE DE MIS SERVICIOS
// ============================================
    const mainBtn = document.getElementById('mainBtn');
    const options = document.getElementById('options');

    mainBtn.addEventListener('click', () => {
      options.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!mainBtn.contains(e.target) && !options.contains(e.target)) {
        options.classList.remove('show');
      }
    });












    
// Obtener los elementos del modal y el botón
//NOTA: primera opcion para boton modal

document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".openModalBtn");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  openButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      modals[index].style.display = "block";
    });
  });

  closeButtons.forEach((close, index) => {
    close.addEventListener("click", function () {
      modals[index].style.display = "none";
    });
  });

  window.addEventListener("click", function (event) {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});


//NOTA: segunda opcion para boton modal
// JavaScript básico para abrir/cerrar el modal
// document.querySelector(".openModalBtn").onclick = function () {
//   document.querySelector(".modal").style.display = "flex";
// };

// document.querySelector(".close").onclick = function () {
//   document.querySelector(".modal").style.display = "none";
// };

// // Cerrar si se da clic fuera del contenido
// window.onclick = function (e) {
//   if (e.target.classList.contains("modal")) {
//     document.querySelector(".modal").style.display = "none";
//   }
// };