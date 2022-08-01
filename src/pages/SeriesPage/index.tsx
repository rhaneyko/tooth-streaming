//import SeriesCard from './SeriesCard';
import SeriesLatest from './SeriesLatest';
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
          <Title>Latest Series</Title>
          <SeriesLatest/>
       </SeriesContainer>
    </Container>
  );
};

export default SeriesPage;
