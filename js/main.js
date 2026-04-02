(function () {
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameEl = document.getElementById('name');
      var emailEl = document.getElementById('email');
      var messageEl = document.getElementById('message');
      var name = nameEl ? nameEl.value.trim() : '';
      var email = emailEl ? emailEl.value.trim() : '';
      var message = messageEl ? messageEl.value.trim() : '';
      var base = form.getAttribute('data-mailto') || 'mailto:';
      var subject = encodeURIComponent('Portfolio contact' + (name ? ' from ' + name : ''));
      var body = encodeURIComponent(
        (name ? 'Name: ' + name + '\n' : '') +
          (email ? 'Reply-to: ' + email + '\n\n' : '\n') +
          (message || '')
      );
      var join = base.indexOf('?') === -1 ? '?' : '&';
      window.location.href = base + join + 'subject=' + subject + '&body=' + body;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }
})();
