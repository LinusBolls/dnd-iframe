import { invariant } from '../invariant';

export default (): Document => {
  const iframe = document.querySelector<HTMLIFrameElement>("#messenger-page");
  const doc = iframe?.contentDocument;
  console.log("[dnd-iframe][get-document] doc: ", iframe, doc);
  invariant(doc, 'Cannot find document');
  return doc;
};