export const isEmpty = (element) => {
  if (element === undefined) return true;
  if (element.constructor === Array) {
    return element.length === 0;
  }

  if (element.constructor === Object) {
    return Object.keys(element).length === 0;
  }

  return !element;
};

export const copyClipboard = async (data) => {
  await navigator.clipboard.writeText(data);
};

export default {
  isEmpty,
  copyClipboard,
};
