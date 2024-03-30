interface IPopupItem {
  id: number;
  imgSrc: string;
  categories: string[];
  startDt: Date;
  endDt: Date;
  title: string;
  address: string;
  isShort?: boolean;
  last?: string;
}

export default IPopupItem;
