import React, {useRef} from 'react';
import Masonry from 'react-masonry-css';

import './Laser.styles.scss'

import bigfoot from '../../resources/laser/bigfoot-stanley.mp4'
import bigfootThumbnail from '../../resources/laser/bigfoot-stanley.jpeg'
import coaster from '../../resources/laser/cosmere_coaster.jpeg'
import crafty from '../../resources/laser/crafty-stanley.mp4'
import craftyThumbnail from '../../resources/laser/crafty-stanley.jpeg'
import horneater from '../../resources/laser/horneater_white.jpeg'
import labBrumate from '../../resources/laser/lab-brumate.mp4'
import labBrumateThumbnail from '../../resources/laser/lab-brumate.jpeg'
import nana from '../../resources/laser/nana-stanley.mp4'
import nanaThumbnail from '../../resources/laser/nana-stanley.jpeg'
import pandaStanley from '../../resources/laser/panda-stanley.mp4'
import pandaStanleyThumbnail from '../../resources/laser/panda-stanley.jpeg'
import scoopy from '../../resources/laser/scoopy.jpeg'
import spiceDrawer from '../../resources/laser/spice_drawer.png'
import sunflower from '../../resources/laser/sunflower-stanley.mp4'
import sunflowerThumbnail from '../../resources/laser/sunflower-stanley.jpeg'
import windrunner from '../../resources/laser/windrunner-brumate.mp4'
import windrunnerThumbnail from '../../resources/laser/windrunner-brumate.jpeg'

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt?: string;
  thumbnail?: string;
}

const mediaItems: MediaItem[] = [
  {id: 1, type: 'video', src: bigfoot, thumbnail: bigfootThumbnail, alt: 'Bigfoot thumbnail'},
  {id: 2, type: 'image', src: coaster, alt: 'Cosmere coaster'},
  {id: 3, type: 'video', src: crafty, thumbnail: craftyThumbnail, alt: 'Crafty thumbnail'},
  {id: 4, type: 'image', src: horneater, alt: 'Horneater white'},
  {id: 5, type: 'video', src: labBrumate, thumbnail: labBrumateThumbnail, alt: 'Lab brumate thumbnail'},
  {id: 6, type: 'video', src: nana, thumbnail: nanaThumbnail, alt: 'Nana thumbnail'},
  {id: 7, type: 'video', src: pandaStanley, thumbnail: pandaStanleyThumbnail, alt: 'Panda stanley thumbnail'},
  {id: 8, type: 'image', src: scoopy, alt: 'Scoopy'},
  {id: 9, type: 'image', src: spiceDrawer, alt: 'Spice drawer'},
  {id: 10, type: 'video', src: sunflower, thumbnail: sunflowerThumbnail, alt: 'Sunflower thumbnail'},
  {id: 11, type: 'video', src: windrunner, thumbnail: windrunnerThumbnail, alt: 'Windrunner thumbnail'},
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
            src={item.type === 'image' ? item.src : item.thumbnail}
            alt={item.alt}
            className={`${item.type === 'video' && 'thumbnail'}`}
          />
          {item.type === 'video' && (
            <video
              ref={(el) => {
                if (el) videoRefs.current.set(item.id, el);
              }}
              src={item.src}
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