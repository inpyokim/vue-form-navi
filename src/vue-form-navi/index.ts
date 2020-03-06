// eslint-disable-next-line import/no-extraneous-dependencies
import { DirectiveOptions } from 'vue';

const nodeList = 'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])';

const handler: (e: Event) => void = e => {
  if (!(e instanceof KeyboardEvent) || !e.target) return;
  const eventTarget = e.target as HTMLElement;
  const blackList = ['select', 'textarea'];

  if (blackList.includes(eventTarget.tagName.toLowerCase())) return;
  const doFocus = (target: HTMLElement | null) => {
    if (!target) return;
    target.focus();
  };

  switch (e.which) {
    case 39: {
      const doNavi = () => {
        e.preventDefault();
        let target: HTMLElement | null = null;
        const nextSameTd = eventTarget.nextSibling as HTMLElement | null;
        if (nextSameTd) {
          target = nextSameTd;
        } else {
          const nextTd = eventTarget.closest('td')?.nextSibling as HTMLElement | null;
          if (!nextTd) return;

          const list: NodeListOf<HTMLElement> = nextTd.querySelectorAll(nodeList);

          if (list.length) {
            // eslint-disable-next-line prefer-destructuring
            target = list[0];
          }
        }
        if (target) {
          doFocus(target);
        }
      };

      if (!(e.target instanceof HTMLInputElement)) {
        doNavi();
        break;
      }

      if (e.target.selectionStart === e.target.value.length) {
        doNavi();
      }
      break;
    }
    case 37: {
      const doNavi = () => {
        e.preventDefault();
        let target: HTMLElement | null = null;
        const prevSameTd = eventTarget.previousSibling as HTMLElement | null;
        if (prevSameTd) {
          target = prevSameTd;
        } else {
          const prevTd = eventTarget.closest('td')?.previousSibling as HTMLElement | null;
          if (!prevTd) return;

          const list: NodeListOf<HTMLElement> = prevTd.querySelectorAll(nodeList);
          if (list.length) {
            target = list[list.length - 1];
          }
        }

        if (target) {
          doFocus(target);
        }
      };

      if (!(e.target instanceof HTMLInputElement)) {
        doNavi();
        break;
      }

      if (e.target.selectionStart === 0) {
        doNavi();
      }

      break;
    }
    case 40: {
      e.preventDefault();
      const next = eventTarget.closest('tr')?.nextSibling as HTMLElement | null;
      const index = eventTarget.closest('td')?.cellIndex;
      if (!index || !next) break;
      const nextTd = next.childNodes[index] as HTMLElement | null;
      if (!nextTd) break;
      const target: HTMLElement | null = nextTd.querySelector(nodeList);
      doFocus(target);

      break;
    }
    case 38: {
      e.preventDefault();
      const prev = eventTarget.closest('tr')?.previousSibling as HTMLElement | null;
      const index = eventTarget.closest('td')?.cellIndex;

      if (!index || !prev) break;
      const prevTd = prev.childNodes[index] as HTMLElement | null;
      if (!prevTd) break;
      const target: HTMLElement | null = prevTd.querySelector(nodeList);
      doFocus(target);

      break;
    }
    default:
      break;
  }
};

const formNavi: DirectiveOptions = {
  bind(el) {
    el.addEventListener('keydown', handler);
  },
  unbind(el) {
    el.removeEventListener('keydown', handler);
  },
};

export default formNavi;
