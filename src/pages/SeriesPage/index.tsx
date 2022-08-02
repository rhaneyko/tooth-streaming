import SeriesPopular from './SeriesPopular';
import SeriesTopRated from './SeriesTopRated';

import { 
  Container, 
 
  SeriesContainer,
  Title,
} from './styles';

const SeriesPage = () => {
  return (
    <Container>
       <SeriesContainer>
          <Title>Popular Series</Title>
          <SeriesPopular/>
          <Title>Top Rated Series</Title>
          <SeriesTopRated/>
       </SeriesContainer>
    </Container>
  );
};

export default SeriesPage;
