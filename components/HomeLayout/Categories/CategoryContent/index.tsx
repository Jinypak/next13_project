import React from 'react';
import Image from 'next/image';
import HoverVideoPlayer from 'react-hover-video-player';

interface Props {
  video: string;
  defaultImage: string;
  name: string;
}

export default function Index({ video, defaultImage, name }: Props) {
  return (
    <HoverVideoPlayer
      videoSrc={video}
      pausedOverlay={<Image src={defaultImage} alt={name} layout='fill' />}
    />
  );
}
