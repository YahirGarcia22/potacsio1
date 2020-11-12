(function () {
    (function () {
      var logo, logo_css;
      logo = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>codepen-logo</title><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.139 21.651l1.35-1.35a.387.387 0 0 0 0-.54l-3.49-3.49a.387.387 0 0 0-.54 0l-1.35 1.35a.39.39 0 0 0 0 .54l3.49 3.49a.38.38 0 0 0 .54 0zm6.922.153l2.544-2.543a.722.722 0 0 0 0-1.018l-6.582-6.58a.722.722 0 0 0-1.018 0l-2.543 2.544a.719.719 0 0 0 0 1.018l6.58 6.579c.281.28.737.28 1.019 0zm14.779-5.85l-7.786-7.79a.554.554 0 0 0-.788 0l-5.235 5.23a.558.558 0 0 0 0 .789l7.79 7.789c.216.216.568.216.785 0l5.236-5.236a.566.566 0 0 0 0-.786l-.002.003zm-3.89 2.806a.813.813 0 1 1 0-1.626.813.813 0 0 1 0 1.626z" fill="#FFF" fill-rule="evenodd"/></svg>';
      logo_css = '.mM{display:block;border-radius:50%;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);position:fixed;bottom:1em;right:1em;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all 240ms ease-in-out;transition:all 240ms ease-in-out;z-index:9999;opacity:0.75}.mM svg{display:block}.mM:hover{opacity:1;-webkit-transform:scale(1.125);transform:scale(1.125)}';
      document.head.insertAdjacentHTML('beforeend', '<style>' + logo_css + '</style>');
      document.body.insertAdjacentHTML('beforeend', '<a href="https://codepen.io/mican/" target="_blank" class="mM">' + logo + '</a>');
    })();
  
    (function () {
      var footer;
      footer = '<footer id="footer" role="contentinfo"> <div class="container"> <h3 class="footer-title"> <a href="https://codepen.io/collection/XRoxGR" target="_blank">Calibration template</a> </h3> <p class="footer-entry"> <a href="https://mobilemarkup.com" target="_blank">mobileMarkup.com</a> </p> </div> </footer>';
      document.body.insertAdjacentHTML('beforeend', footerclass(floatingLabel));
      return {
        constructor: function (form, options = {}) {
          var event, i, input, j, label, len, len1, ref, ref1;
          if (!form) {
            return;
          }
          options.focusClass || (options.focusClass = "focus");
          options.activeClass || (options.activeClass = "active");
          options.errorClass || (options.errorClass = "error");
          form.classList.add('has-floated-label');
          ref = form.querySelectorAll('label');
          for (i = 0, len = ref.length; i < len; i++) {if (window.CP.shouldStopExecution(0)) break;
            label = ref[i];
            if (!(input = document.querySelector(`#${label.getAttribute('for')}`))) {
              return;
            }
            ref1 = ['keyup', 'input', 'change'];
            for (j = 0, len1 = ref1.length; j < len1; j++) {if (window.CP.shouldStopExecution(1)) break;
              event = ref1[j];
              input.addEventListener(event, function () {
                this.parentNode.classList.remove(options.errorClass);
                return this.parentNode.classList.toggle(options.activeClass, !!this.value);
              });
            }window.CP.exitedLoop(1);
            input.addEventListener('focus', function () {
              return this.parentNode.classList.add(options.focusClass);
            });
            input.addEventListener('blur', function () {
              return this.parentNode.classList.remove(options.focusClass);
            });
            input.parentNode.classList.toggle(options.activeClass, !!input.value);
          }window.CP.exitedLoop(0);
        } };
  
    })();
  
    // initialize
    window.floatingLabel = new floatingLabel(document.querySelector('.form'));
  
  }).call(this);