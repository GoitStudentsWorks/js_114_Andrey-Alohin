import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-section .accordion-container', {
  duration: 100,
  showMultiple: true,
  onOpen: function (currentElement) {
    const icon = currentElement.querySelector('.faq-icon');
    icon.classList.add('rotated');
  },
  onClose: function (currentElement) {
    const icon = currentElement.querySelector('.faq-icon');
    icon.classList.remove('rotated');
  },
});
