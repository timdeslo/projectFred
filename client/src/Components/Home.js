import React from "react";
import RotatingImg from "./RotatingImg";
import {Link} from "react-scroll";
import styled from "styled-components";
import {useState, useEffect} from "react";
import Loading from "./Loading";
import {useForm, ValidationError} from "@formspree/react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [state, handleSubmit] = useForm("xdovyrjd");

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <HeaderDiv>
            <Link>
              <H1 onClick={() => window.scrollTo(0, 0)}>
                <img src="/projectFred/pictures/logo.png" alt="logo" />
              </H1>
            </Link>
            <HeaderRight>
              <Link to="about" smooth={true} duration={500}>
                <P>À propos</P>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <P>nous joindre</P>
              </Link>
            </HeaderRight>
          </HeaderDiv>
          <RotatingImg />
          <H2 id="about">À propos</H2>
          <SectionA>
            <PsectionA>
              Bienvenue chez Les Constructions Barobo, une entreprise qui se
              spécialise dans la réalisation de projets résidentiels
              exceptionnels. Nous sommes fiers de notre réputation de service
              irréprochable, d'expertise inégalée et de réalisations de grande
              qualité.<br></br>
              <br></br> Notre priorité absolue est de répondre aux exigences de
              nos clients tout au long de leur projet. C'est pourquoi nous
              offrons une assistance personnalisée et une écoute constante à nos
              clients pour comprendre leurs besoins et nous assurer que chaque
              étape du projet est menée à bien.
            </PsectionA>
            <ImgSectionA src="/projectFred/pictures/proud.jpg" alt="deal" />
          </SectionA>
          <SectionQ>
            <H3>DÉDIÉS À L'EXCELLENCE ET LA QUALITÉ DANS TOUS NOS PROJETS</H3>
          </SectionQ>
          <H2>CONTACTEZ-NOUS !</H2>
          <SectionB id="contact">
            <Form onSubmit={handleSubmit}>
              <label htmlFor="name">Nom:</label>
              <input type="text" id="name" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <label htmlFor="email">Courriel:</label>
              <input type="email" id="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <InputSub
                type="submit"
                value="Envoyer"
                disabled={state.submitting}
              />
            </Form>
            {state.succeeded && (
              <p style={{color: "#cb5c29"}}>
                Merci de nous avoir contactés. Nous vous écrirons sous peu
              </p>
            )}
          </SectionB>
          <Footer>
            <p>© 2023 Les Constructions Barobo</p>
          </Footer>
        </div>
      )}
    </>
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
  text-transform: uppercase;
`;

const P = styled.p`
  color: black;
  font-size: 20px;
  :hover& {
    color: grey;
  }
`;

const SectionA = styled.section`
  padding: 20px 120px;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PsectionA = styled.p`
  width: 500px;
  height: 300px;
  font-size: 18px;
`;

const ImgSectionA = styled.img`
  width: 500px;
  height: 300px;
`;

const H2 = styled.h2`
  padding-top: 120px;
  text-transform: uppercase;
  text-align: center;
  color: #cb5c29;
`;

const SectionB = styled.section`
  padding: 20px 100px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputSub = styled.input`
  margin-top: 20px;
  background-color: white;
  border: 1px solid black;
  color: black;
`;

const Footer = styled.footer`
  background-color: black;
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionQ = styled.section`
background-color: #cb5c29;
margin-top: 120px;
`;

const H3 = styled.h3`
  padding: 70px 100px;
  text-transform: uppercase;
  text-align: center;
  color: white;
  font-size: 42px;
  font-weight: bold;
`;
export default Home;
