/* =========================================================
   All behaviour is progressive enhancement only.
   The page works fully with JavaScript disabled.
   ========================================================= */
(function () {
  'use strict';

  /* -------------------------------------------------------
     1. Footer — current year
     ------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* -------------------------------------------------------
     2. Visitor information
     ------------------------------------------------------- */
  var visitorInfo = document.getElementById('visitor-info');

  function getBrowserName() {
    var userAgent = navigator.userAgent;
    if (/Edg\//.test(userAgent)) return 'Microsoft Edge';
    if (/OPR\//.test(userAgent)) return 'Opera';
    if (/Chrome\//.test(userAgent) || /CriOS\//.test(userAgent)) return 'Google Chrome';
    if (/Firefox\//.test(userAgent)) return 'Mozilla Firefox';
    if (/Safari\//.test(userAgent) && !/Chrome\//.test(userAgent)) return 'Safari';
    return 'Unknown browser';
  }

  function getLocalRegion() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || 'detected region';
    } catch (error) {
      return 'detected region';
    }
  }

  function updateVisitorInfo(locationData) {
    if (!visitorInfo) return;
    var region = locationData && (locationData.city || locationData.region || locationData.country);
    var ipAddress = locationData && locationData.ip;
    visitorInfo.textContent = 'Access from ' + (region || getLocalRegion())
      + ' | IP address: ' + (ipAddress || 'unavailable')
      + ' | Browser: ' + getBrowserName();
  }

  function fetchWithTimeout(url, timeout) {
    return Promise.race([
      fetch(url, { headers: { 'Accept': 'application/json' } }),
      new Promise(function (_, reject) {
        window.setTimeout(function () { reject(new Error('Request timed out')); }, timeout);
      })
    ]);
  }

  if (visitorInfo) {
    updateVisitorInfo(null);
    fetchWithTimeout('https://ipwho.is/', 5000)
      .then(function (response) {
        if (!response.ok) throw new Error('Location request failed');
        return response.json();
      })
      .then(function (locationData) {
        if (!locationData.success || !locationData.ip) throw new Error('Invalid location response');
        updateVisitorInfo(locationData);
      })
      .catch(function () {
        return fetchWithTimeout('https://api.ipify.org?format=json', 5000)
          .then(function (response) {
            if (!response.ok) throw new Error('IP request failed');
            return response.json();
          })
          .then(updateVisitorInfo);
      })
      .catch(function () {
        updateVisitorInfo(null);
      });
  }

  /* -------------------------------------------------------
     3. Mobile navigation toggle
     ------------------------------------------------------- */
  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.getElementById('site-nav');

  function closeNav() {
    if (!siteNav || !navToggle) return;
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    if (!siteNav || !navToggle) return;
    siteNav.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.contains('is-open');
      isOpen ? closeNav() : openNav();
    });

    // Close after selecting a section
    siteNav.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') closeNav();
    });

    // Close on Escape
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });

    // Reset state when returning to desktop width
    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) closeNav();
    });
  }

  /* -------------------------------------------------------
      4. Active section highlighting in the navigation
     ------------------------------------------------------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]')
  );
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (link) {
      var isCurrent = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', isCurrent);
      if (isCurrent) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if (sections.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, {
      rootMargin: '-80px 0px -65% 0px',
      threshold: 0
    });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* -------------------------------------------------------
      5. Contact form (Formspree-compatible)
     ------------------------------------------------------- */
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  function setStatus(message, state) {
    if (!status) return;
    status.textContent = message;
    if (state) {
      status.setAttribute('data-state', state);
    } else {
      status.removeAttribute('data-state');
    }
  }

  if (form && status) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var action = form.getAttribute('action') || '';

      // Guard: the form has not been connected to a real endpoint yet.
      if (action.indexOf('your-form-id') !== -1) {
        setStatus(
          'The contact form is not connected yet. Please email me directly at your.email@example.com.',
          'error'
        );
        return;
      }

      var submitButton = form.querySelector('button[type="submit"]');
      var originalLabel = submitButton ? submitButton.textContent : '';

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending…';
      }
      setStatus('', null);

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (!response.ok) throw new Error('Request failed');
          form.reset();
          setStatus('Thank you — your message has been sent. I will reply as soon as possible.', 'success');
        })
        .catch(function () {
          setStatus('Sorry, something went wrong. Please email me directly instead.', 'error');
        })
        .then(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalLabel;
          }
        });
    });
  }
})();
