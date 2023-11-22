import { invariant } from '../invariant';
import getDocument from './get-document';

export default (): HTMLElement => {
  const doc: HTMLElement | null = getDocument().documentElement;
  invariant(doc, 'Cannot find document.documentElement');
  return doc;
};
