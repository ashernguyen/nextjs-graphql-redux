import React, { useState, useEffect, FC, useRef, useCallback } from 'react';
import { ProductImageProps } from '@client/components/product/types';
import { Text, Flex, Image } from '@client/components/core';

const ProductImage: FC<ProductImageProps> = ({ imgUrl, imgAlt, ...styles }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const [loadState, setLoadState] = useState({
    loaded: false,
    failed: false
  });

  const onLoad = useCallback(() => {
    setLoadState({
      loaded: true,
      failed: false
    });
  }, []);

  const onError = useCallback(() => {
    setLoadState({
      loaded: true,
      failed: true
    });
  }, []);

  useEffect(() => {
    if (imageRef.current !== null) {
      const img = imageRef.current;

      if (img.complete) {
        if (img.naturalWidth === 0) {
          onError();
        } else {
          onLoad();
        }
      } else {
        img.onload = onLoad;
        img.onerror = onError;
        img.src = imgUrl;
      }
    }

    return () => {
      if (imageRef.current !== null) {
        const img = imageRef.current;

        img.onload = null;
        img.onerror = null;
      }
    };
  }, []);

  const { loaded, failed } = loadState;

  const showingPlaceholder = !loaded || failed;

  return (
    <Flex
      {...styles}
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
      color="transparent"
      height={showingPlaceholder ? '280px' : 'auto'}
    >
      <Image
        src={imgUrl}
        alt={imgAlt}
        ref={imageRef}
        maxWidth="100%"
        maxHeight="100%"
        display={failed ? 'none' : 'block'}
        opacity={loaded ? 1 : 0}
      />
      {showingPlaceholder && (
        <Flex
          bg="gray.1"
          position="absolute"
          top={0}
          left={0}
          width={1}
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          {failed && (
            <Text color="white" fontSize={9} fontWeight={2}>
              No image
            </Text>
          )}
        </Flex>
      )}
    </Flex>
  );
};

ProductImage.displayName = 'ProductImage';

export default ProductImage;
