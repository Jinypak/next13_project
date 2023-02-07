import React from 'react';
import { Container } from './styles';
import SliderBanner from './SliderBanner';
import Categories from './Categories';
import FilmsRow from '../FilmsRow';

type Props = {};

export default function Index({}: Props) {
  return (
    <Container>
      <SliderBanner />
      <Categories />
      <h4>당신을 위한 추천</h4>
      <FilmsRow />
      <h4>인기 영화</h4>
      <FilmsRow />
      <h4>인기 TV 프로그램</h4>
      <FilmsRow />
    </Container>
  );
}
