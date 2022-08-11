import React from "react";

import { ContainerRodape, Rodape } from "./Styles";

const Footer = () => {
  return (
    <ContainerRodape>
      <Rodape>
        &copy; Cadastro - Desenvolvido por:
        <a href="https://github.com/JoseAugusto1989">@GutoOliveira</a>
      </Rodape>
    </ContainerRodape>
  );
};

export default Footer;