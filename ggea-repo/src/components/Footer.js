import React from 'react';
import logoGGEA from '../images/logoGGEA.svg'

const Footer = (props) => {
    return (
      <footer>
        <div className="logo"><img src={logoGGEA} width="60px" height="60px" alt="logo GGEA"/></div>
        <div className="info">GGEA - Grupo de Extensão e Pesquisa em Gestão e Educação Ambiental<br/>
        Repositório de produção científico-acadêmica<br/>
        Universidade Estadual da Paraíba
        </div>
      </footer>
    );
}

export default Footer;