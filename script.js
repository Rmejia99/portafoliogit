document.addEventListener('DOMContentLoaded', () => {
    const languageToggleButton = document.getElementById('languageToggle');
    let currentLanguage = 'es'; // Idioma inicial de la página

    // Objeto con todo el contenido traducible
    const translations = {
        es: {
            navInicio: "Inicio",
            navHistoria: "Mi Historia",
            navCV: "Habilidades",
            navProyectos: "Proyectos",
            navGaleria: "Diplomas",
            navContacto: "Contacto",
            heroTitle: "¡Bienvenida a Mi Mundo Creativo!",
            heroParagraph: "Explora mis proyectos, descubre mis habilidades y sumérgete en mi pasión por el diseño y la tecnología.",
            heroCTA: "Ver Proyectos Destacados",
            historiaTitle: "Mi Historia",
            historiaParagraph: "Desde el primer día, compartí el sueño de transformar ideas en realidades funcionales y estéticamente atractivas. Mi enfoque me permite entender las necesidades a fondo y comunicarme con claridad, trazando siempre un camino estratégico. Me siento cómoda liderando y colaborando, siempre mirando hacia adelante con una visión innovadora. Los desafíos los asumo con flexibilidad y fortaleza, y mi mente no tiene límites a la hora de idear soluciones, lo que hace que cada proyecto sea un verdadero disfrute.",
            cvTitle: "Mis Habilidades",
            cvEduTitle: "Educación:",
            cvEduText: "Ingeniería en Sistemas y Redes Informáticas, Universidad Gerardo Barrios, 5º año",
            cvExpTitle: "Experiencia Clave:",
            // EXPERIENCIA CLAVE REEMPLAZADA
            cvExpText: "Diseño de casos de prueba, Automatización de pruebas básicas, Identificación y documentación de errores.",
            cvSkillsTitle: "Habilidades Blandas:",
            cvSkillsText: "Inteligencia emocional, Comunicación efectiva, Toma de decisiones estratégicas, Liderazgo y Trabajo en equipo, Visión e Innovación, Adaptabilidad y Resiliencia, Creatividad sin límites.",
            cvInterestsTitle: "Intereses:",
            cvInterestsText: "Control de calidad en entornos digitales, Automatización de pruebas, Metodologías ágiles y mejora continua, Documentación técnica.",
            proyectosTitle: "Proyectos Destacados",
            proyecto1Title: "Katana Sushi", 
            proyecto1Description: "Desarrollo de un sitio web interactivo y responsivo para Katana Sushi, un restaurante de sushi. Esta plataforma fue diseñada para mejorar la experiencia del cliente, permitiendo explorar el menú, realizar pedidos en línea y conocer las promociones especiales.",
            proyecto2Title: "College Reminder",
            proyecto2Description: "Diseño y desarrollo de una aplicación móvil para la gestión de horarios y tareas universitarias. La aplicación facilita la organización de clases, recordatorios de exámenes y entrega de trabajos, mejorando la productividad de los estudiantes.",
            proyecto3Title: "Dashboard de Visualización de Datos Financieros", // ¡NUEVO!
            proyecto3Description: "Diseño y prototipado de un panel de control interactivo para visualizar datos financieros complejos de manera clara y comprensible, facilitando la toma de decisiones estratégicas.", // ¡NUEVO!
            galeriaTitle: "Diplomas",
            contactoTitle: "Conéctate Conmigo",
            contactoIntro: "¿Tienes un proyecto en mente o simplemente quieres saludar? ¡Estoy encantada de escucharte!",
            contactNamePlaceholder: "Tu Nombre Completo",
            contactEmailPlaceholder: "Tu Correo Electrónico",
            contactMessagePlaceholder: "Describe tu proyecto o escribe tu mensaje aquí...",
            contactButton: "Enviar Mensaje Ahora",
            footerLegalTitle: "Documentos Legal",
            footerPrivacy: "Política de Privacidad",
            footerTerms: "Términos y Condiciones",
            footerContactTitle: "Contacto",
            footerSocialTitle: "Mis Redes",
            verProyecto: "Ver Proyecto"
        },
        en: {
            navInicio: "Home",
            navHistoria: "My Story",
            navCV: "Resume",
            navProyectos: "Projects",
            navGaleria: "Gallery",
            navContacto: "Contact",
            heroTitle: "Welcome to My Creative World!",
            heroParagraph: "Explore my projects, discover my skills, and immerse yourself in my passion for design and technology.",
            heroCTA: "View Featured Projects",
            historiaTitle: "My Story",
            historiaParagraph: "From day one, I shared the dream of transforming ideas into functional and aesthetically appealing realities. My approach allows me to thoroughly understand needs and communicate clearly, always charting a strategic path. I feel comfortable leading and collaborating, always looking forward with an innovative vision. I take on challenges with flexibility and strength, and my mind knows no bounds when it comes to devising solutions, which makes every project a true joy.",
            cvTitle: "Professional Resume",
            cvEduTitle: "Education:",
            cvEduText: "Systems and Computer Networks Engineering, Gerardo Barrios University, 5th year",
             cvExpTitle: "Key Experience:",
            // EXPERIENCIA CLAVE REEMPLAZADA
            cvExpText: "Test case design, Basic test automation, Error identification and documentation.",
            cvSkillsTitle: "Soft Skills:",
            cvSkillsText: "Emotional intelligence, Effective communication, Strategic decision-making, Leadership and teamwork, Vision and Innovation, Adaptability and Resilience, Unlimited creativity.",
            cvInterestsTitle: "Interests:",
            cvInterestsText: "Quality control in digital environments, Test automation, Agile methodologies and continuous improvement, Technical documentation.",
            proyectosTitle: "Featured Projects",
            proyecto1Title: "Katana Sushi Website", 
            proyecto1Description: "Project Description 1: Development of an interactive and responsive website for Katana Sushi, a sushi restaurant. This platform was designed to enhance the customer experience, allowing them to explore the menu, place online orders, and discover special offers.Development of an interactive and responsive website for Katana Sushi, a sushi restaurant. This platform was designed to enhance the customer experience, allowing them to explore the menu, place online orders, and discover special promotions. I included high-quality image galleries and an an intuitive booking system to facilitate access to the restaurant's services.",
            proyecto2Title: "College Reminder App",
            proyecto2Description: "Design and development of a mobile application for managing college schedules and tasks. The application facilitates the organization of classes, exam reminders, and assignment submissions, improving student productivity.",
            proyecto3Title: "Financial Data Visualization Dashboard", // ¡NUEVO!
            proyecto3Description: "Design and prototyping of an interactive dashboard to visualize complex financial data clearly and comprehensibly, facilitating strategic decision-making.", // ¡NUEVO!
            galeriaTitle: "My Achievements and Moments",
            contactoTitle: "Connect With Me",
            contactoIntro: "Have a project in mind or just want to say hello? I'd love to hear from you!",
            contactNamePlaceholder: "Your Full Name",
            contactEmailPlaceholder: "Your Email",
            contactMessagePlaceholder: "Describe your project or write your message here...",
            contactButton: "Send Message Now",
            footerLegalTitle: "Legal Documents",
            footerPrivacy: "Privacy Policy",
            footerTerms: "Terms and Conditions",
            footerContactTitle: "Contact",
            footerSocialTitle: "My Networks",
            verProyecto: "View Project"
        }
    };

    function updateContent() {
        // Actualizar el texto del botón de idioma
        languageToggleButton.textContent = currentLanguage === 'es' ? 'English' : 'Español';

        // Actualizar todos los elementos con data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });

        // Actualizar placeholders
        document.querySelectorAll('[data-lang-placeholder-key]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder-key');
            if (translations[currentLanguage][key]) {
                element.placeholder = translations[currentLanguage][key];
            }
        });
    }

    languageToggleButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        document.documentElement.lang = currentLanguage;
        updateContent();
    });

    // Inicializar el contenido con el idioma por defecto
    updateContent();


    // --- Lógica del Carrusel Automático para Múltiples Sliders ---
    const allSliderContainers = document.querySelectorAll('.slider-container');
    const intervalTime = 10000; // 10 segundos

    allSliderContainers.forEach(sliderContainer => {
        const sliderImages = sliderContainer.querySelectorAll('.slider-img');
        let currentImageIndex = 0;

        if (sliderImages.length > 0) {
            sliderImages[currentImageIndex].classList.add('active');
        }

        function showNextImage() {
            sliderImages[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
            sliderImages[currentImageIndex].classList.add('active');
        }

        // Solo iniciar el intervalo si hay más de una imagen
        if (sliderImages.length > 1) {
            setInterval(showNextImage, intervalTime);
        }
    });

    // --- Animación de texto y foto en la sección Hero ---
    const heroTitle = document.querySelector('.hero h2');
    const heroParagraph = document.querySelector('.hero p');
    const heroImage = document.querySelector('.foto-principal');
    const heroCta = document.querySelector('.hero-cta');

    if (heroTitle && heroParagraph && heroImage && heroCta) {
        heroTitle.style.animationDelay = '0.5s';
        heroParagraph.style.animationDelay = '0.7s';
        heroImage.style.animationDelay = '0.3s';
        heroCta.style.animationDelay = '0.9s'; // Retraso para el botón CTA
    }

});