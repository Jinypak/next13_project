import React from 'react';
import CategoryContent from './CategoryContent';
import { VideoData } from './Data';
import { Container, Wrapper } from './styles';

type Props = {};

export default function Index({}: Props) {
  return (
    <Container>
      {VideoData?.map((item) => (
        <Wrapper key={item.id}>
          <CategoryContent
            video={item.video}
            defaultImage={item.imageUrl}
            name={item.name}
          />
        </Wrapper>
      ))}
    </Container>
  );
}
