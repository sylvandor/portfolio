import React, {useRef} from 'react';
import Masonry from 'react-masonry-css';

import {BASE_CLOUDFRONT_URL} from "../const";

import './Laser.styles.scss'


interface Media {
  id: number;
  type: 'image' | 'video';
  filename: string;
  alt: string;
}


const mediaItems: Media[] = [
  {id: 1, type: 'video', filename: 'bigfoot-stanley', alt: 'Bigfoot thumbnail'},
  {id: 2, type: 'image', filename: 'cosmere_coaster-v2', alt: 'Cosmere coaster'},
  {id: 3, type: 'video', filename: 'crafty-stanley', alt: 'Crafty thumbnail'},
  {id: 4, type: 'image', filename: 'horneater_white', alt: 'Horneater white'},
  {id: 5, type: 'video', filename: 'lab-brumate', alt: 'Lab brumate thumbnail'},
  {id: 6, type: 'video', filename: 'nana-stanley', alt: 'Nana thumbnail'},
  {id: 7, type: 'video', filename: 'panda-stanley', alt: 'Panda stanley thumbnail'},
  {id: 8, type: 'image', filename: 'scoopy', alt: 'Scoopy'},
  {id: 9, type: 'image', filename: 'spice_drawer', alt: 'Spice drawer'},
  {id: 10, type: 'video', filename: 'sunflower-stanley', alt: 'Sunflower thumbnail'},
  {id: 11, type: 'video', filename: 'windrunner-brumate', alt: 'Windrunner thumbnail'},
];

const isPlaying = (video: HTMLVideoElement) => {
  return (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
};

const Laser = () => {
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const handleMouseEnter = (id: number) => {
    const videoElement = videoRefs.current.get(id);
    if (videoElement && !isPlaying(videoElement)) {
      videoElement.play().catch((err) => console.error(`Play failed: ${err.message}`));
    }
  };

  const handleMouseLeave = (id: number) => {
    const videoElement = videoRefs.current.get(id);
    if (videoElement && isPlaying(videoElement)) {
      videoElement.pause();
    }
  };

  const breakpointColumns = {
    default: 3,
    700: 2,
  };

  const getImageUrl = (filename: string) =>  `${BASE_CLOUDFRONT_URL}laser/${filename}.jpeg`
  const getVideoUrl = (filename: string) => `${BASE_CLOUDFRONT_URL}laser/${filename}.mp4`

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="masonry-grid"
      columnClassName="masonry-grid-column"
    >
      {mediaItems.map((item) => (
        <div
          key={item.id}
          className="masonry-item"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave(item.id)}
        >
          <img
            src={getImageUrl(item.filename)}
            alt={item.alt}
            className={`${item.type === 'video' && 'thumbnail'}`}
          />
          {item.type === 'video' && (
            <video
              ref={(el) => {
                if (el) videoRefs.current.set(item.id, el);
              }}
              preload="auto"
              src={getVideoUrl(item.filename)}
              muted
              loop
              playsInline
            />
          )}
        </div>
      ))}
    </Masonry>
  );
};

export default Laser;