import { invariant } from '../invariant';
import getDocument from './get-document';

export default (): HTMLBodyElement => {
  const body = getDocument().body;
  invariant(body, 'Cannot find document.body');
  return body as HTMLBodyElement;
};
