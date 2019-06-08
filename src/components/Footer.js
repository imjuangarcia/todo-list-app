import React from "react";

const Footer = () => (
  <footer>
    <p>
      Copyright &copy; <span>{new Date().getFullYear()}</span> JMG. Designed and
      Developed by{" "}
      <a href="https://www.juangarcia.design" target="_blank">
        Juan Mart&iacute;n Garc&iacute;a.
      </a>{" "}
      Hosted on{" "}
      <a href="https://www.netlify.com" target="_blank">
        Netlify.
      </a>
    </p>
    <p>
      Wanna contribute?{" "}
      <a
        href="https://gitlab.com/jmg-side-projects/todo-list-app/issues"
        target="_blank"
      >
        File a bug or request a feature
      </a>
    </p>
  </footer>
);

export default Footer;
