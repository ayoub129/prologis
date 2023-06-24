import React from "react";

const Address = () => {
  return (
    <div className="address">
      <div className="Adres">
        <h4>Adres</h4>
        <p className="mt-2 tracking-wide leading-7">Flexwijs</p>
        <p className="mt-2 tracking-wide leading-7">Erasmusweg 34</p>
        <p className="mt-2 tracking-wide leading-7">4834 AA BREDA</p>
      </div>
      <div className="openbaar">
        <h4>Openbaar vervoer</h4>
        <p className="mt-2 tracking-wide leading-7">
          Neem vanaf station Breda bus 132 richting Tilburg en stap uit bij
          halte Fatimastraat. Loop een stukje terug langs de grote weg en sla de
          tweede straat rechtsaf naar de Viveslaan. Sla vervolgens twee keer
          linksaf en dan bevindt u zich op de Erasmusweg. De looproute betreft
          ongeveer 5 minuten.
        </p>
      </div>
      <div className="bedrijfsinformatie">
        <h4>Bedrijfsinformatie</h4>
        <p className="mt-2 tracking-wide leading-7">
          KVK: <span> 20169642</span>
          BTW: <span> NL822212067B01</span>
          IBAN: <span> NL39 RABO 0105 4796 75</span>
        </p>
      </div>
    </div>
  );
};

export default Address;
