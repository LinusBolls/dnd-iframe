import { invariant } from '../invariant';

export default (): Window => {
  const iframe = document.querySelector<HTMLIFrameElement>('#messenger-page');
  const win = iframe?.contentWindow;
  console.log('[dnd-iframe][get-window] window:', iframe, win);
  invariant(win, 'Cannot find window');
  return win;
};
