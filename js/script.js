$(document).ready(function () {

  // Add 'js-enabled' class to body to enable animations
  $('body').addClass('js-enabled');

  // =========================================
  // NAVBAR SCROLL EFFECT
  // =========================================
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.nature-nav').addClass('scrolled');
    } else {
      $('.nature-nav').removeClass('scrolled');
    }

    // Active Nav Link
    let scrollPos = $(this).scrollTop();

    $('section').each(function () {
      let top = $(this).offset().top - 100;
      let bottom = top + $(this).outerHeight();

      if (scrollPos >= top && scrollPos < bottom) {
        let id = $(this).attr('id');
        $('.nav-link').removeClass('active');
        $('.nav-link[href="#' + id + '"]').addClass('active');
      }
    });

    // Reveal Elements (Add active class when scrolled into view)
    $('.reveal').each(function () {
      let elementTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < windowBottom - 50) {
        $(this).addClass('active');
      }
    });
  });

  // FORCE SHOW ALL CONTENT IMMEDIATELY ON PAGE LOAD (Safety Net)
  setTimeout(function () {
    $('.reveal').addClass('active');
    console.log("All content revealed!");
  }, 500);

  // Trigger scroll event on load to show top content
  $(window).trigger('scroll');

  // =========================================
  // SMOOTH SCROLL FOR NAV LINKS
  // =========================================
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();
    let target = $(this).attr('href');
    if ($(target).length) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 70
      }, 800);
    }
  });

  // =========================================
  // PROJECT MODAL
  // =========================================
  const projectData = {
    garden: {
      title: 'Smart Garden',
      icon: '<i class="bi bi-flower1"></i>',
      description: 'An IoT-based smart garden monitoring system that tracks soil moisture, temperature, and light levels. It automatically waters plants when needed and can be controlled remotely via a mobile app.',
      tech: ['Arduino', 'Sensors', 'IoT', 'C++']
    },
    billing: {
      title: 'Smart Billing System',
      icon: '<i class="bi bi-upc-scan"></i>',
      description: 'A smart shopping trolley with RFID technology for automatic product scanning and billing. Reduces waiting time at checkout counters by allowing customers to pay instantly while shopping.',
      tech: ['RFID', 'Arduino', 'LCD', 'PHP']
    },
    galore: {
      title: 'Galore 2026',
      icon: '<i class="bi bi-calendar-event"></i>',
      description: 'A web application for managing college events and cultural festivals. Features include event registration, schedule management, and student participation tracking.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP']
    },
    travel: {
      title: 'Tours & Travels',
      icon: '<i class="bi bi-compass"></i>',
      description: 'A travel booking website that allows users to explore destinations, view itineraries, and book tour packages online. Includes an admin panel for managing bookings.',
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'UI/UX']
    }
  };

  $('.explore-btn').on('click', function () {
    let projectId = $(this).data('project-id');
    let project = projectData[projectId];

    if (project) {
      $('#projectTitle').text(project.title);
      $('#modalIcon').html(project.icon);
      $('#projectDetails').html(`
                <p>${project.description}</p>
                <div class="skill-tags mt-3">
                    ${project.tech.map(t => `<span class="badge bg-primary me-2">${t}</span>`).join('')}
                </div>
            `);
    }
  });

  // =========================================
  // CONTACT FORM
  // =========================================
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
  });
});