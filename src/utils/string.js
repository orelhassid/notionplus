import { v4 as uuidv4 } from "uuid";

export function slugGenerator(string) {
  try {
    return string
      .toLowerCase()
      .replace(/-+/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  } catch (error) {
    console.error(error);
  }
}

export function slugGeneratorArray(array, key) {
  return array?.forEach((item) => (item.slug = slugGenerator(item[key])));
}

export function uuidGeneratorArray(array) {
  return array.forEach((item) => (item.id = uuidv4()));
}
export function getSLug(url) {
  let slug = url.split("/");
  return slug[slug.length - 1];
}
