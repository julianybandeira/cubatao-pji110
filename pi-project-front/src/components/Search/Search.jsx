import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PiContext } from '../../context/PiContext';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css';

export default function Search() {
  const { instructionManualsList } = useContext(PiContext);

  const navigate = useNavigate();

  function search() {
    navigate('/cadastro');
  }

  return (
    <div className="search">
      <Stack spacing={2} sx={{ maxWidth: 600 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={instructionManualsList.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Pesquisar por"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
        <Button
          onClick={search}
          variant="contained"
          style={{
            backgroundColor: '#5D9817',
            width: '300px',
            alignSelf: 'center',
          }}
          size="large"
        >
          Pesquisar
        </Button>
      </Stack>
    </div>
  );
}
