/* eslint-disable no-unused-vars */
import axios from 'axios';
import Search from '../../components/Search/Search';
import { useContext, useEffect } from 'react';
import { PiContext } from '../../context/PiContext';
import './HomePage.css';

export default function HomePage() {
  const { titles, setTitles } = useContext(PiContext);

  /*    //ESSE BLOCO ABAIXO NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
        const top10Films = [
          {
            id: 1,
            title: 'Encoder 1024 pulsos',
            description: `INCREM. ENCODER 6FX2001-3CB00 WITH 1-V-SINUS 1000 P/R, SYNCHROFLANGE, 6 MM SHAFT, OPERATING VOLTAGE 5 V AXIAL/RADIAL UNIVERSAL CABLE OUTLET CABLE 1M WITH CONNECTOR`,
            url: https://mall.industry.siemens.com/mall/pt/PT/Catalog/Product/?mlfb=6FX2001-3CB00&SiepCountryCode=PT,
          },
  
          {
            id: 2,
            title: 'Servo drive Siemens 1fk2206',
            description: 'SINAMICS S120 converter Power Module PM340 input: 380-480 V 3AC, 50/60 Hz output: 3AC 10 A (4.0 kW) type of construction: blocksize frame size FSB with built-in line filter internal air cooling',
            url: https://mall.industry.siemens.com/mall/pt/pt/Catalog/Product/6SL3210-1SE21-0AA0,
          },
          {
            id: 3,
            title: 'Controlador Programável II',
            description: 'gfuhdj kjhkhdfh hsdjfkhewkj jsbdfjkek hdfkh',
            url: 1974,
          },
          {
            id: 4,
            title: 'Motoredutor 2KJ3512-9JU22-9HB1',
            description: 'bevel geared motor K129-LE160 HE, hollow shaft with shrink tubing HS75, 50/87 Hz, S114, 230 V, 400 V,housing flange transmission ratio, 8.22, brake L260/145 hand release lever position 3, mounting position M4-B brake control voltage 170-200 V DC, increased corrosion protection, encapsulated brake with condensation drain hole IP55 degree of protection, oil CLP PAO VG220 bonded end stage wheel, surface protection C2 for low environmental load, 2nd rating plate mounted -30… +40 °C, RAL7016, Pt1000, metal fan,condensation drain hole terminal box position 1D,(*)',
            url: https://mall.industry.siemens.com/mall/pt/PT/Catalog/Product/?mlfb=2KJ3512-9JU22-9HB1-ZB35C02C10C11C28C53D24G97H3AK01K12K68K97L03L75M17M21M58N46N53N54N6AP91Q42Q95Y91&SiepCountryCode=PT,
          },
        ]; //ESSE BLOCO ACIMA NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
  
        useEffect(() => {
          //ESSE BLOCO ABAIXO NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
          setTitles(top10Films);
          console.log(titles); //ESSE BLOCO ACIMA NÃO SERÁ NECESSARIO APOS A CONCLUSAO DA API
  
          */
  useEffect(() => {
    axios
      .get('http://localhost:8080/manual/') // SUBSTITUIR 'API_ENDPOINT' pela URL da API
      .then((response) => {
        setTitles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home-page">
      <Search />
    </div>
  );
}
