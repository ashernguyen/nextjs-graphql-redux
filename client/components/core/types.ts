import { HTMLProps, ReactType } from 'react';
import {
  // space
  SpaceProps,
  // color
  ColorProps,
  // typography
  FontSizeProps,
  FontFamilyProps,
  FontWeightProps,
  LineHeightProps,
  TextAlignProps,
  FontStyleProps,
  LetterSpacingProps,
  TextStyleProps,
  // layout
  DisplayProps,
  WidthProps,
  HeightProps,
  MaxHeightProps,
  MinHeightProps,
  MaxWidthProps,
  MinWidthProps,
  // Borders
  BordersProps,
  // Flexbox
  AlignItemsProps,
  JustifyContentProps,
  FlexWrapProps,
  FlexDirectionProps,
  FlexProps,
  AlignSelfProps,
  OrderProps,
  // Grid
  GridGapProps,
  GridColumnGapProps,
  GridRowGapProps,
  GridColumnProps,
  GridRowProps,
  GridAutoFlowProps,
  GridAutoColumnsProps,
  GridAutoRowsProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
  GridTemplateAreasProps,
  GridAreaProps,
  // Position
  PositionProps,
  ZIndexProps,
  TopProps,
  LeftProps,
  RightProps,
  BottomProps,
  // Backgrounds
  BackgroundProps,
  BackgroundImageProps,
  BackgroundSizeProps,
  BackgroundPositionProps,
  BackgroundRepeatProps,
  // Others
  OpacityProps,
  OverflowProps,
  BoxShadowProps,
  VerticalAlignProps,
  ButtonStyleProps,
  ResponsiveValue
} from 'styled-system';
import { CSSObject, BaseThemedCssFunction } from 'styled-components';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface VariantProps {
  variant?: ResponsiveValue<string>;
}

// Base props
export interface BaseStyleProps
  extends SpaceProps,
    ColorProps,
    DisplayProps,
    WidthProps,
    HeightProps,
    MaxHeightProps,
    MinHeightProps,
    MaxWidthProps,
    MinWidthProps,
    BordersProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    PositionProps,
    ZIndexProps,
    TopProps,
    RightProps,
    BottomProps,
    LeftProps,
    OverflowProps,
    BackgroundProps,
    BackgroundImageProps,
    BackgroundSizeProps,
    BackgroundPositionProps,
    BackgroundRepeatProps,
    FontSizeProps,
    FontStyleProps,
    TextStyleProps,
    OpacityProps,
    BoxShadowProps,
    LineHeightProps,
    VerticalAlignProps {
  as?: ReactType;
  css?: CSSObject | BaseThemedCssFunction<{}> | string;
}

// Box
export interface BoxProps
  extends BaseStyleProps,
    Omit<HTMLProps<HTMLDivElement>, keyof BaseStyleProps> {}

// Flex
export interface FlexBoxProps
  extends BoxProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps {}

// Grid
export interface GridProps
  extends BoxProps,
    GridGapProps,
    GridColumnGapProps,
    GridRowGapProps,
    GridColumnProps,
    GridRowProps,
    GridAutoFlowProps,
    GridAutoColumnsProps,
    GridAutoRowsProps,
    GridTemplateColumnsProps,
    GridTemplateRowsProps,
    GridTemplateAreasProps,
    GridAreaProps {}

// Button
interface ButtonBaseProps extends FlexBoxProps, FontWeightProps, ButtonStyleProps {}

export interface ButtonProps
  extends ButtonBaseProps,
    VariantProps,
    Omit<HTMLProps<HTMLDivElement>, keyof ButtonBaseProps> {}

// Link
interface LinkBaseProps extends BoxProps {}
export interface LinkProps
  extends LinkBaseProps,
    Omit<React.HTMLProps<HTMLAnchorElement>, keyof LinkBaseProps> {}

// Text
interface TextBaseProps
  extends BaseStyleProps,
    FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LetterSpacingProps {}

export interface TextProps
  extends TextBaseProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof TextBaseProps> {}

// Input
interface InputBaseProps extends BoxProps {}

export interface InputProps
  extends InputBaseProps,
    VariantProps,
    Omit<HTMLProps<HTMLDivElement>, keyof InputBaseProps> {}

// Heading
export interface HeadingProps extends TextProps, VariantProps {}

// Image
interface ImageBaseProps extends BoxProps {}

export interface ImageProps
  extends ImageBaseProps,
    Omit<React.HTMLProps<HTMLImageElement>, keyof ImageBaseProps> {}
