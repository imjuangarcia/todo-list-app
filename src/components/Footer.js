import React from "react";

const Footer = () => (
  <footer>
    <p>
      Copyright &copy; <span>{new Date().getFullYear()}</span> JMG. Designed and
      Developed by{" "}
      <a href="https://www.juangarcia.design" target="_blank">
        Juan Mart&iacute;n Garc&iacute;a
      </a>
    </p>
  </footer>
);

export default Footer;
