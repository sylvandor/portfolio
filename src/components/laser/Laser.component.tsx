import React, {useRef} from 'react';
import Masonry from 'react-masonry-css';

import './Laser.styles.scss'

import bigfoot from '../../resources/laser/bigfoot-stanley.mp4'
import coaster from '../../resources/laser/cosmere_coaster.jpeg'
import crafty from '../../resources/laser/crafty-stanley.mp4'
import horneater from '../../resources/laser/horneater_white.jpeg'
import labBrumate from '../../resources/laser/lab-brumate.mp4'
import nana from '../../resources/laser/nana-stanley.mp4'
import pandaStanley from '../../resources/laser/panda-stanley.mp4'
import scoopy from '../../resources/laser/scoopy.jpeg'
import spiceDrawer from '../../resources/laser/spice_drawer.png'
import sunflower from '../../resources/laser/sunflower-stanley.mp4'
import windrunner from '../../resources/laser/windrunner-brumate.mp4'

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

const mediaItems: MediaItem[] = [
  {id: 1, type: 'video', src: bigfoot},
  {id: 2, type: 'image', src: coaster, alt: 'Cosmere coaster'},
  {id: 3, type: 'video', src: crafty},
  {id: 4, type: 'image', src: horneater, alt: 'Horneater white'},
  {id: 5, type: 'video', src: labBrumate},
  {id: 6, type: 'video', src: nana},
  {id: 7, type: 'video', src: pandaStanley},
  {id: 8, type: 'image', src: scoopy, alt: 'Scoopy'},
  {id: 9, type: 'image', src: spiceDrawer, alt: 'Spice drawer'},
  {id: 10, type: 'video', src: sunflower},
  {id: 11, type: 'video', src: windrunner},
];

const isPlaying = (video: HTMLVideoElement) => {
  return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
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
          {item.type === 'image' && (
            <img
              src={item.src}
              alt={item.alt || 'Media Item'}
            />
          )}
          {item.type === 'video' && (
            <video
              ref={(el) => {
                if (el) videoRefs.current.set(item.id, el);
              }}
              src={item.src}
              muted
              loop
              playsInline
              preload={'auto'}
            />
          )}
        </div>
      ))}
    </Masonry>
  );
};

export default Laser;