import { DirectiveOptions } from 'vue';
import $ from 'jquery';

const nodeList = 'button, [href], input, [tabindex]:not([tabindex="-1"])';

const handler: (e: Event) => void = e => {
  if (!(e instanceof KeyboardEvent) || !e.target) return;

  switch (e.which) {
    case 39:
      if (!(e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        $(e.target)
          .closest('td')
          .next()
          .find(nodeList)

          .focus();
        break;
      }

      if (e.target.selectionStart === e.target.value.length) {
        e.preventDefault();
        $(e.target)
          .closest('td')
          .next()
          .find(nodeList)

          .focus();
      }
      break;
    case 37:
      if (!(e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        $(e.target)
          .closest('td')
          .prev()
          .find(nodeList)
          .focus();
        break;
      }

      if (e.target.selectionStart === 0) {
        e.preventDefault();
        $(e.target)
          .closest('td')
          .prev()
          .find(nodeList)

          .focus();
      }

      break;
    case 40:
      e.preventDefault();
      $(e.target)
        .closest('tr')
        .next()
        .children()
        .eq(
          $(e.target)
            .closest('td')
            .index(),
        )
        .find(nodeList)
        .focus();
      break;
    case 38:
      e.preventDefault();
      $(e.target)
        .closest('tr')
        .prev()
        .children()
        .eq(
          $(e.target)
            .closest('td')
            .index(),
        )
        .find(nodeList)
        .focus();
      break;
    default:
      break;
  }
};

const formNavi: DirectiveOptions = {
  bind(el) {
    const focusable: NodeList = el.querySelectorAll(nodeList);
    focusable.forEach(elem => elem.addEventListener('keydown', handler));
  },
  unbind(el) {
    const focusable: NodeList = el.querySelectorAll(nodeList);
    focusable.forEach(elem => elem.removeEventListener('keydown', handler));
  },
};

export default formNavi;
