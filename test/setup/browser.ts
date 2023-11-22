// We have window and document check because some
// tests do not run with browser globals enabled

import getDocument from "../../src/view/get-document";

if (typeof window !== 'undefined') {
  // overriding these properties in jsdom to allow them to be controlled
  Object.defineProperties(getDocument().documentElement, {
    clientWidth: {
      writable: true,
      value: getDocument().documentElement.clientWidth,
    },
    clientHeight: {
      writable: true,
      value: getDocument().documentElement.clientHeight,
    },
    scrollWidth: {
      writable: true,
      value: getDocument().documentElement.scrollWidth,
    },
    scrollHeight: {
      writable: true,
      value: getDocument().documentElement.scrollHeight,
    },
  });

  // Setting initial viewport
  // Need to set clientWidth and clientHeight as jsdom does not set these properties
  if (typeof getDocument() !== 'undefined') {
    (getDocument().documentElement as any).clientWidth = window.innerWidth;
    (getDocument().documentElement as any).clientHeight = window.innerHeight;
  }
}

export {};
