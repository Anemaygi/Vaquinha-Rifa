import React from "react";

function Entenda() {

  return (
    <div className="mx-20 mt-20 text-white">
      <h1 className="title font-black text-5xl uppercase drop-shadow-3xl">Entenda</h1>
      <div className="md:flex md:flex-row">
        <div className="space-y-2 py-10 basis-1/2">
          <p>Rifas são uma forma popular de angariar fundos para diversas causas e iniciativas. Elas oferecem uma oportunidade emocionante para pessoas de todas as idades participarem de sorteios e, ao mesmo tempo, apoiar uma causa ou arrecadar fundos para uma finalidade específica.
          </p>

          <p>O funcionamento das rifas é relativamente simples: os participantes adquirem bilhetes numerados e, em seguida, concorrem a prêmios por meio de sorteio. Os prêmios podem variar amplamente, desde produtos e serviços até contribuições monetárias.
          </p>

          <p>As rifas também promovem um senso de comunidade, pois as pessoas se unem para contribuir e participar. É uma forma eficaz de arrecadação de fundos que beneficia tanto os organizadores quanto aqueles que recebem o apoio financeiro necessário.
          </p>
        </div>

        <div className="basis-1/2">
          <div className="bg-white p-5 pb-20 mx-40 rotate-[15deg] w-50 hover:rotate-0 transition-all shadow-focus">
            <img src="src/assets/fotoVaca.png" />
          </div>

        </div>

      </div>
    </div>
  );

}

export default Entenda;