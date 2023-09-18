import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import {
  AboutMeSection,
  AboutMeSectionContent,
  AboutMeSectionText,
} from "./style";

export const AboutMeComponents = () => {
  return (
    <AboutMeSection id="AboutMe">
      <Container>
        <AboutMeSectionContent>
          <AboutMeSectionText>
            <Text color="grey4" type="heading2">
              Sobre Mim
            </Text>
            <Text color="grey4">
              Sou um Desenvolvedor Web que busca aprimorar meus conhecimentos
              por meio de estudos e inúmeros projetos. Um dos principais em que
              estou envolvido é o Kenzie Museu, que proporciona uma vasta
              diversidade de cultura de forma fácil e intuitiva para todos os
              usuários. Dedico-me constantemente à práticas de habilidades em
              HTML, CSS, TypeScript e JavaScript, entre outras tecnologias. Para
              organizar o meu dia a dia utilizo o kanban e o notion e além de
              possuir conhecimento na metodologia ágil para gestão de projetos,
              o que me oferece rapidez, agilidade e flexibilidade no trabalho.
              Também possuo inglês básico/avançado. Estou em busca de uma
              oportunidade no mercado de trabalho, busco crescer e contribuir de
              forma significativa em qualquer equipe ou projeto que eu venha a
              fazer parte.{" "}
            </Text>
          </AboutMeSectionText>
        </AboutMeSectionContent>
      </Container>
    </AboutMeSection>
  );
};
