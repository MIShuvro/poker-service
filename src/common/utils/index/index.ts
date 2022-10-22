export function concatObject(obj: Object, separator: string = '/') {
  return Object.values(obj).join(separator);
}
