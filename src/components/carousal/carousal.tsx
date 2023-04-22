import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Grid } from '@material-ui/core';
import { Instagram } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
interface CarouselProps {
  provider: 'instagram' | 'google_maps';
  username: string;
  apiKey: string;
}
interface Image {
    id: number;
    url: string;
    caption: string;
  }
const Carousel: React.FC<CarouselProps> = ({ provider, username, apiKey }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let url = '';

        if (provider === 'instagram') {
          url = `https://graph.instagram.com/${username}/media?fields=id,caption,media_url&access_token=${apiKey}`;
        } else if (provider === 'google_maps') {
          url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${apiKey}&input=${username}&inputtype=textquery&fields=photos`;
        }

        const response = await fetch(url);
        const data = await response.json();

        let fetchedImages: Image[] = [];

        if (provider === 'instagram') {
          fetchedImages = data.data.map((item: any) => ({
            id: item.id,
            url: item.media_url,
            caption: item.caption,
          }));
        } else if (provider === 'google_maps') {
          const photoRef = data.candidates[0].photos[0].photo_reference;
          const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?key=${apiKey}&photoreference=${photoRef}&maxheight=800`;
          fetchedImages.push({
            id: 1,
            url: photoUrl,
            caption: username,
          });
        }

        setImages(fetchedImages);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [provider, username, apiKey]);

  if (isLoading) {
    // return <CircularProgress />;
    <Box>
    <SwipeableViews>
      
        <img src='../../asset/2017-05-14.jpg'  />
      
    </SwipeableViews>
  </Box>
  }

  return (
    <Box>
      <SwipeableViews>
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={image.caption} />
        ))}
      </SwipeableViews>
    </Box>
  );
};

export default Carousel;