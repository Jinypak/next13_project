import React from 'react';
import { Container } from './styles';
import SliderBanner from './SliderBanner';
import Categories from './Categories';
import FilmsRow from '../FilmsRow';
import { MovieListType } from '@/types/MovieList';

type Props = {
  movieResults: MovieListType[];
};

export default function Index({ movieResults }: Props) {
  return (
    <Container>
      <SliderBanner />
      <Categories />
      <h4>당신을 위한 추천</h4>
      <FilmsRow movieResults={movieResults} category='recommend' />
      <h4>인기 영화</h4>
      <FilmsRow movieResults={movieResults} category='trending' />
      <h4>신규 프로그램</h4>
      <FilmsRow movieResults={movieResults} category='new' />
    </Container>
  );
}
