/* eslint-disable no-unused-vars */
import axios from 'axios';
import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { PiContext } from '../../context/PiContext';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';

export default function DetailsPage() {
  const { id } = useParams();
  const { titles } = useContext(PiContext);
  const [fileDetails, setFileDetails] = useState(null);

  //ESSE BLOCO ABAIXO NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
  const arquivo = {
    id: 10,
    title: 'Controlador Programável',
    description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
    url: 'https://univesp.br/vestibular',
  }; //ESSE BLOCO ACIMA NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API

  useEffect(() => {
    const fileId = id;

    //ESSE BLOCO ABAIXO NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
    console.log('Esse é o parametro' + fileId);
    setFileDetails(arquivo);
    console.log(arquivo); //ESSE BLOCO ACIMA NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
    /*
    axios
      .get(`API_ENDPOINT/${fileId}`) // SUBSTITUIR 'API_ENDPOINT' pela URL da API
      .then((response) => {
        setFileDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      }); */
  }, [id]);

  const handleOnClick = () => {
    window.location.href = fileDetails.url;
  };

  if (!fileDetails) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="details">
      <h1>{fileDetails.title}</h1>
      <p>{fileDetails.description}</p>
      <Button
        onClick={handleOnClick}
        variant="contained"
        style={{
          backgroundColor: '#5D9817',
          width: '100px',
          alignSelf: 'center',
        }}
        size="large"
      >
        Manual
      </Button>
    </div>
  );
}
