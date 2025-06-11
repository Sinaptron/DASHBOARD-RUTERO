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
            
            // Navigation between sections
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
            
            // Tab functionality
            const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    // Remove active class from all tabs and contents
                    tabs.forEach(t => t.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('active'));
                    
                    // Add active class to clicked tab and corresponding content
                    this.classList.add('active');
                    document.getElementById(tabId + 'Tab').classList.add('active');
                });
            });
            









      // FRAGMENTO DE ABAJO ES PARA AÑADIR activa el formulario ? para agregar datos de rutas
            // Modal functionality
            // const addRouteBtn = document.getElementById('addRouteBtn');
            // const addRouteModal = document.getElementById('addRouteModal');
            // const closeModal = document.getElementById('closeModal');
            // const cancelRoute = document.getElementById('cancelRoute');
            
            // addRouteBtn.addEventListener('click', function() {
            //     addRouteModal.classList.add('show');
            // });
            
            // closeModal.addEventListener('click', function() {
            //     addRouteModal.classList.remove('show');
            // });
            
            // cancelRoute.addEventListener('click', function() {
            //     addRouteModal.classList.remove('show');
            // });
            

// GUARDANDO RUTA
// Siguiente fragmento es informativo, desactivarlo cuando ya se active fragmento de abajo para poder gurdar informacion
const addRouteBtn = document.getElementById('addRouteBtn');
addRouteBtn.addEventListener('click', () => {
  alert('No tiene autorizacion para agregar Informacion !!!');
});

// FRAGMENTO DE ABAJO ES PARA AÑADIR  REGISTRO de rutas (COMENTAR EL DE ARRIBA)
            // const saveRoute = document.getElementById('saveRoute');
            // const routeForm = document.getElementById('routeForm');
            
            // saveRoute.addEventListener('click', function() {
            //     if (routeForm.checkValidity()) {

// const nombre = document.getElementById('routeName').value;
// const origen = document.getElementById('routeOrigin').value;
// const destino = document.getElementById('routeDestination').value;
// const distancia = document.getElementById('routeDistance').value + ' km';
// const duracion = document.getElementById('routeDuration').value;
// const estado = document.getElementById('routeStatus').value;

// const tabla = document.querySelector('#rutasSection table tbody');
// const nuevaFila = document.createElement('tr');

// const nuevoId = 'R' + String(tabla.children.length + 1).padStart(3, '0');

// nuevaFila.innerHTML = `
//   <td>${nuevoId}</td>
//   <td>${nombre}</td>
//   <td>${origen}</td>
//   <td>${destino}</td>
//   <td>${distancia}</td>
//   <td>${duracion}</td>
//   <td><span class="badge badge-success">${estado}</span></td>
//   <td>
//     <button class="btn-icon"><i class="fas fa-edit text-primary"></i></button>
//     <button class="btn-icon"><i class="fas fa-trash text-danger"></i></button>
//   </td>
// `;

// tabla.appendChild(nuevaFila);
// FRAGMENTO DE ARRIBA ES PARA AÑADIR REGISTRO de rutas

//descomentar fragmento de abajo para que funcione el script de arriba
                //     alert('Ruta guardada exitosamente!');
                //     addRouteModal.classList.remove('show');
                //     routeForm.reset();
                // } else {
                //     routeForm.reportValidity();
                // }
            // });
            
//FINALIZA CODIGO DE GUARDADO DE RUTAS










//añadir localidades
const addLocalidadBtn = document.getElementById('addLocalidadBtn');
addLocalidadBtn.addEventListener('click', () => {
  alert('No tiene autorizacion para agregar Informacion !!!');
});
// Función para agregar localidad aún no implementada.

//añadir ciudades
const addEstadoBtn = document.getElementById('addEstadoBtn');
addEstadoBtn.addEventListener('click', () => {
  alert('No tiene autorizacion para agregar Informacion !!!.');
});
// Función para agregar localidad aún no implementada.





            // Close modal when clicking outside
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

