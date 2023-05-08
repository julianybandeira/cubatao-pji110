import Search from '../../components/Search/Search';
import { useContext, useEffect } from 'react';
import { PiContext } from '../../context/PiContext';
import './HomePage.css';

export default function HomePage() {
  const { setInstructionManualsList } = useContext(PiContext);

  const top10Films = [
    {
      title: 'The Shawshank Redemption',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      file: 1994,
    },
    {
      title: 'The Godfather',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      file: 1972,
    },
    {
      title: 'The Godfather: Part II',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      file: 1974,
    },
    {
      title: 'The Dark Knight',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      file: 2008,
    },
    {
      title: '12 Angry Men',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      file: 1957,
    },
    {
      title: "Schindler's List",
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      file: 1993,
    },
    {
      title: 'Pulp Fiction',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      file: 1994,
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      file: 2003,
    },
    {
      title: 'The Good',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      file: 1966,
    },
    {
      title: 'Fight Club',
      description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
      file: 1999,
    },
  ];

  useEffect(() => {
    setInstructionManualsList(top10Films);
  });

  return (
    <div className="home-page">
      <Search />
    </div>
  );
}
