export type FontWeight = 'lighter' | 'normal' | 'bold';
export interface IColor {
  background?: string;
  text?: string;
}

export interface IFont {
  size?: number;
  weight?: FontWeight;
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

export interface IRowStyle {
  'background-color'?: string;
  'line-height'?: number;
}

export interface IColumnStyle {
  left?: number | string;
  'font-size'?: number;
  'font-weight'?: string;
}
