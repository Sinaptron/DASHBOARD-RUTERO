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
            
            // Modal functionality
            const addRouteBtn = document.getElementById('addRouteBtn');
            const addRouteModal = document.getElementById('addRouteModal');
            const closeModal = document.getElementById('closeModal');
            const cancelRoute = document.getElementById('cancelRoute');
            
            addRouteBtn.addEventListener('click', function() {
                addRouteModal.classList.add('show');
            });
            
            closeModal.addEventListener('click', function() {
                addRouteModal.classList.remove('show');
            });
            
            cancelRoute.addEventListener('click', function() {
                addRouteModal.classList.remove('show');
            });
            
            // Save route
            const saveRoute = document.getElementById('saveRoute');
            const routeForm = document.getElementById('routeForm');
            
            saveRoute.addEventListener('click', function() {
                if (routeForm.checkValidity()) {
                    // Here you would typically send the data to a server
                    alert('Ruta guardada exitosamente!');
                    addRouteModal.classList.remove('show');
                    routeForm.reset();
                } else {
                    routeForm.reportValidity();
                }
            });
            
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
    