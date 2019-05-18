import React from "react";

const Header = props => (
  <React.Fragment>
    <picture className="logo">
      <source type="image/svg+xml" srcSet="images/logo.svg" />
      <img src="images/logo.png" alt="Do The Work Logo" />
    </picture>
    <picture className={props.toDos.length === 0 ? "illustration" : "hidden"}>
      <source type="image/svg+xml" srcSet="images/fishing-illustration.svg" />
      <img
        src="images/fishing-illustration.png"
        alt="Father and son fishing illustration"
      />
    </picture>
    <section className="title">
      <h2 className={props.toDos.length === 0 ? "empty" : ""}>
        {props.toDos.length > 0 ? "My Tasks:" : "No Tasks for today."}
      </h2>
      <h3 className={props.toDos.length === 0 ? "" : "hidden"}>
        {props.toDos.length > 0 ? "" : "Go get some fun!"}
      </h3>
    </section>
  </React.Fragment>
);

Header.defaultProps = {
  title: "To-Do App"
};

export default Header;
