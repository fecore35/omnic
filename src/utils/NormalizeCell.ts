import { CellSize } from "static/dataCell";

export const normalizeSize = (size: number) => {
  const fixedToTwo = (size * 0.001).toFixed(2);
  return Number(fixedToTwo) * 100;
};

export const findCellTitleBySize = (type: string) => {
  const element = CellSize.find((e) => {
    if (e.type === type) {
      return e.title;
    }
    return false;
  });

  return element?.title || type;
};
