  // Mobile Navigation
      const menuToggle = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");
      const menuIcon = menuToggle.querySelector("i");
      const navItems = document.querySelectorAll("#nav-links a");

      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
          menuIcon.classList.replace("fa-bars", "fa-times");
        } else {
          menuIcon.classList.replace("fa-times", "fa-bars");
        }
      });

      navItems.forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("show");
          menuIcon.classList.replace("fa-times", "fa-bars");
        });
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Active navigation highlighting
      function updateActiveNav() {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll('nav a[href^="#"]');

        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      }

      // Update active nav on scroll
      window.addEventListener("scroll", updateActiveNav);
      window.addEventListener("load", updateActiveNav);

      window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        if (window.scrollY > 100) {
          nav.style.background = "rgba(255, 255, 255, 0.95)";
          nav.style.boxShadow = "var(--shadow-md)";
        } else {
          nav.style.background = "var(--white)";
          nav.style.boxShadow = "var(--shadow-sm)";
        }
      });

      // Intersection Observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, observerOptions);

      // Observe elements for animation
      document
        .querySelectorAll(".skill-card, .project-card, .stat-card")
        .forEach((el) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transition = "all 0.6s ease-out";
          observer.observe(el);
        });