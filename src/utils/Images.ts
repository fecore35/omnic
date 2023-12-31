import { ObjectType } from "typescript";

export const importAll = (r: any) => {
  let images: Record<string, any> = {};

  r.keys().map((item: any) => {
    return (images[item.replace("./", "") as keyof ObjectType] = r(item));
  });
  return images;
};
