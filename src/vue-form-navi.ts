// eslint-disable-next-line import/no-extraneous-dependencies
import { DirectiveOptions } from 'vue';

const nodeList = 'button, [href], input, textarea,, [tabindex]:not([tabindex="-1"])';
// eslint-disable-next-line prettier/prettier
const targetList = 'button, [href], input, [tabindex]:not(textarea):not(select):not([tabindex="-1"])';

const handler: (e: Event) => void = e => {
  if (!(e instanceof KeyboardEvent) || !e.target) return;
  const eventTarget = e.target as HTMLElement;

  switch (e.which) {
    case 39:
      if (!(e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        const next = eventTarget.closest('td')?.nextSibling as HTMLElement | null;
        if (!next) break;

        const target: HTMLElement | null = next.querySelector(nodeList);
        if (!target) break;
        target.focus();
        break;
      }

      if (e.target.selectionStart === e.target.value.length) {
        e.preventDefault();
        const next = eventTarget.closest('td')?.nextSibling as HTMLElement | null;
        if (!next) break;

        const target: HTMLElement | null = next.querySelector(nodeList);
        if (!target) break;
        target.focus();
      }
      break;
    case 37:
      if (!(e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        const next = eventTarget.closest('td')?.previousSibling as HTMLElement | null;
        if (!next) break;

        const target: HTMLElement | null = next.querySelector(nodeList);
        if (!target) break;
        target.focus();
        break;
      }

      if (e.target.selectionStart === 0) {
        e.preventDefault();
        const prev = eventTarget.closest('td')?.previousSibling as HTMLElement | null;
        if (!prev) break;

        const target: HTMLElement | null = prev.querySelector(nodeList);
        if (!target) break;
        target.focus();
      }

      break;
    case 40: {
      e.preventDefault();
      const next = eventTarget.closest('tr')?.nextSibling as HTMLElement | null;
      const index = eventTarget.closest('td')?.cellIndex;
      if (!index || !next) break;
      const nextTd = next.childNodes[index] as HTMLElement;
      const target: HTMLElement | null = nextTd.querySelector(nodeList);
      if (!target) break;
      target.focus();
      break;
    }
    case 38: {
      e.preventDefault();
      const prev = eventTarget.closest('tr')?.previousSibling as HTMLElement | null;
      const index = eventTarget.closest('td')?.cellIndex;
      if (!index || !prev) break;
      const prevTd = prev.childNodes[index] as HTMLElement;
      const target: HTMLElement | null = prevTd.querySelector(nodeList);
      if (!target) break;
      target.focus();
      break;
    }
    default:
      break;
  }
};

const formNavi: DirectiveOptions = {
  bind(el) {
    const focusable: NodeList = el.querySelectorAll(targetList);
    focusable.forEach(elem => elem.addEventListener('keydown', handler));
  },
  unbind(el) {
    const focusable: NodeList = el.querySelectorAll(targetList);
    focusable.forEach(elem => elem.removeEventListener('keydown', handler));
  },
};

export default formNavi;
