import React from "react";
import RotatingImg from "./RotatingImg";
import {Link} from "react-scroll";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <HeaderDiv>
        <H1 onClick={() => window.scrollTo(0, 0)}>
          <img src="/pictures/logo.png" alt="logo" />
        </H1>

        <HeaderRight>
          <Link to="about" smooth={true} duration={500}>
            <P>A propos</P>
          </Link>
          <Link to="">
            <P>Nous Joindre</P>
          </Link>
        </HeaderRight>
      </HeaderDiv>
      <RotatingImg />
      <section id="about">
        <p>
          Bienvenue chez Les Constructions S.A., une entreprise de construction
          générale qui se spécialise dans la réalisation de projets résidentiels
          exceptionnels. Nous sommes fiers de notre réputation de service
          impeccable, d'expertise hors pair et de réalisations de grande
          qualité. Notre priorité absolue est de répondre aux exigences de nos
          clients tout au long de leur projet. C'est pourquoi nous offrons une
          assistance personnalisée et une écoute constante à nos clients pour
          comprendre leurs besoins et s'assurer que chaque étape du projet est
          réalisée avec succès. Nous sommes profondément reconnaissants envers
          tous nos clients pour leur confiance et leur fidélité au fil des ans,
          ce qui nous a encouragés à poursuivre notre engagement envers
          l'excellence et la qualité dans tous nos projets.
        </p>
      </section>
    </div>
  );
};

const HeaderDiv = styled.div`
  background-color: white;
  border-bottom: 3px solid black;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const H1 = styled.div`
  padding-left: 50px;
  color: black;
  width: 300px;
  height: 100px;
  padding-top: 30px;
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 40px;
  padding-right: 50px;
`;

const P = styled.p`
  color: black;
  font-size: 22px;
  :hover& {
    color: grey;
  }
`;
export default Home;
