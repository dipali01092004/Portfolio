$(document).ready(function () {

    $('body').addClass('js-enabled');

    // =========================================
    // NAVBAR SCROLL EFFECT
    // =========================================
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.glass-nav').addClass('scrolled');
        } else {
            $('.glass-nav').removeClass('scrolled');
        }

        let scrollPos = $(this).scrollTop();

        $('section').each(function () {
            let top = $(this).offset().top - 120;
            let bottom = top + $(this).outerHeight();

            if (scrollPos >= top && scrollPos < bottom) {
                let id = $(this).attr('id');
                $('.nav-link').removeClass('active');
                $('.nav-link[href="#' + id + '"]').addClass('active');
            }
        });

        $('.reveal').each(function () {
            let elementTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 80) {
                $(this).addClass('active');
            }
        });
    });

    setTimeout(function () {
        $('.reveal').addClass('active');
    }, 300);

    $(window).trigger('scroll');

    // =========================================
    // SMOOTH SCROLL
    // =========================================
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        let target = $(this).attr('href');
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 900);
        }
        $('.navbar-collapse').collapse('hide');
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

    $('.project-link').on('click', function () {
        let projectId = $(this).data('project-id');
        let project = projectData[projectId];

        if (project) {
            $('#projectTitle').text(project.title);
            $('#modalIcon').html(project.icon);
            $('#projectDetails').html(`
                <p style="font-size: 1rem; line-height: 1.7; color: var(--text-secondary);">${project.description}</p>
                <div class="chip-group" style="margin-top: 24px;">
                    ${project.tech.map(t => `<span class="chip">${t}</span>`).join('')}
                </div>
            `);
        }
    });

    // =========================================
    // CONTACT FORM
    // =========================================
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        const btn = $(this).find('button[type="submit"]');
        const originalText = btn.html();
        btn.html('Sending... <i class="bi bi-hourglass-split"></i>').prop('disabled', true);

        setTimeout(() => {
            btn.html('Message Sent! <i class="bi bi-check-circle"></i>');
            setTimeout(() => {
                btn.html(originalText).prop('disabled', false);
                $('#contactForm')[0].reset();
            }, 2000);
        }, 1200);
    });

    // =========================================
    // PARALLAX EFFECT
    // =========================================
    $(window).on('scroll', function () {
        let scrolled = $(window).scrollTop();
        if (scrolled < 800) {
            $('.hero-visual').css('transform', `translateY(${scrolled * 0.15}px)`);
            $('.gradient-blob').css('transform', `translateY(${scrolled * 0.08}px)`);
        }
    });

});