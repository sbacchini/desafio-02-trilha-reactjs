import { useContext } from 'react';
import { Button } from './Button';
import { GenreContext } from '../context/GenreContext';

import '../styles/sidebar.scss';



export function SideBar() {
  const { genres, selectedGenreId, setSelectedGenreId } = useContext(GenreContext);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (  
  
      <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
   
  );
}