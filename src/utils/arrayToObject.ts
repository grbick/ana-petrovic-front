export const arrayToObject = <K extends string = string, I = unknown>(
  array: any[],
  accessor = "id"
): Record<K, I> => {
  return array.reduce((obj: any, item: any) => {
    obj[item[accessor]] = item;
    return obj;
  }, {});
};
