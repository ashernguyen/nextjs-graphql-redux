import { BoxProps, FlexBoxProps } from '@client/components/core/types';
import { Product } from '@client/types';

export interface ProductImageProps extends BoxProps {
  imgUrl: string;
  imgAlt: string;
}

export interface ProductProps extends FlexBoxProps {
  product: Product;
  customImgUrl?: string;
}
