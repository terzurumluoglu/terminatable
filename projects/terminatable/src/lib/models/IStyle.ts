export interface IColor {
    background?: string;
    text?: string;
}

export interface IFont {
    size?: number;
    weight?: string;
}

export interface IColorFont {
  color?: IColor;
  font?: IFont;
}

export interface IHeader extends IColorFont {
  lineHeight?: number;
}

export interface IBody {
  lineHeight?: number;
  odd?: IColorFont;
  even?: IColorFont;
  hover?: IColorFont;
  selected?: IColorFont;
}

export interface IStyle {
  header?: IHeader;
  body?: IBody;
}
