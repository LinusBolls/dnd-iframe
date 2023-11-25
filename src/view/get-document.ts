import { invariant } from '../invariant';

export default (): Document => {
  const iframe = document.querySelector<HTMLIFrameElement>('#messenger-page');
  const doc = iframe?.contentDocument;
  invariant(doc, 'Cannot find document');
  return doc;
};
