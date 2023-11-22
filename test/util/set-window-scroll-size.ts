import { invariant } from '../../src/invariant';
import getDocument from '../../src/view/get-document';
import writable from './writable';

interface Args {
  scrollHeight: number;
  scrollWidth: number;
}

const setWindowScrollSize = ({ scrollHeight, scrollWidth }: Args): void => {
  const el = getDocument().documentElement;

  invariant(el, 'Unable to find document element');

  writable(el).scrollHeight = scrollHeight;
  writable(el).scrollWidth = scrollWidth;
};

const original: Args = (() => {
  const el = getDocument().documentElement;

  invariant(el, 'Unable to find document element');

  return {
    scrollWidth: el.scrollWidth,
    scrollHeight: el.scrollHeight,
  };
})();

export const resetWindowScrollSize = () => setWindowScrollSize(original);

export default setWindowScrollSize;
