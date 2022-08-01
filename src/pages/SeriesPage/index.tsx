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
          <SeriesTopRated/>
          <SeriesLatest/>
       </SeriesContainer>
    </Container>
  );
};

export default SeriesPage;
