import React, { useContext, useEffect, useState } from 'react';
import Input from '../input/Input';
import './Header.scss';
import { Button } from '../button/Button';
import { PokemonContext } from '../../context/PokemonContext';
import { useSearchParams } from 'react-router-dom';

export const Header = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState('');
  const { updatePokemon } = useContext(PokemonContext);

  useEffect(() => {
    const localSearchQuery = localStorage.getItem('searchValue');
    setValue(localSearchQuery ? localSearchQuery : '');
  }, []);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleSearch = () => {
    const offset = searchParams.get('offset') || '';
    const limit = searchParams.get('limit') || '';
    updatePokemon(value, offset, limit);
  };

  return (
    <header className="header">
      <Input value={value} onChange={handleChange} />
      <Button handleButton={handleSearch} text={'Search'} />
    </header>
  );
};

export default Header;
