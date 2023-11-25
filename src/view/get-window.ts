import { invariant } from '../invariant';

export default (): Window => {
  const iframe = document.querySelector<HTMLIFrameElement>('#messenger-page');
  const win = iframe?.contentWindow;
  invariant(win, 'Cannot find window');
  return win;
};
