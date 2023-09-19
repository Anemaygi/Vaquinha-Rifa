import React, { useEffect, useState } from 'react';
import jsonData from '../data/data.json';

function Rifa() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const min = jsonData.limitemin;
  const max = jsonData.limitemax;
  const celular = jsonData.celular;


  return (

    <div className="w-full bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
        <path fill-opacity="1" fill='#119a5a'
          d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,218.7C960,203,1056,149,1152,149.3C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>
      </svg>
      <div className="text-center text-primary">
        <h1 className="uppercase text-5xl font-black mb-3">Rifa</h1>
        <p> Gostaria de ganhar uma cesta de páscoa e colaborar com nosso objetivo? <br /> </p>
        <p> Participe da rifa! Cada número é R$5,00 :) Basta clicar no número que deseja escolher!</p>
      </div>

      <div className="flex flex-wrap my-10 w-3/5 place-content-center mx-auto">

        {Array.from({ length: max - min + 1 }, (_, index) => {
          const number = index + min;
          const isIndisponivel = jsonData.indisponivel.includes(number);
          return (
            <a
              className={`number ${isIndisponivel ?
                'text-white bg-secondary flex items-center justify-center p-6 w-6 h-6 m-4 rounded-full'
                : 'text-white bg-primary flex items-center justify-center p-6 w-6 h-6 m-4 rounded-full'}`}
              href={`https://wa.me/${celular}?text=Quero%20o%20número%20${number}%20da%20rifa.%20Vim%20pelo%20site`}
              target="_blank"
            >
              {number}
            </a>
          );
        })}

      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#119a5a" fill-opacity="1"
          d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,133.3C672,139,768,117,864,138.7C960,160,1056,224,1152,218.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>



    </div>

  );
}

export default Rifa;