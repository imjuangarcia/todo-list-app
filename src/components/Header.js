import React from "react";

const Header = props => {
  return (
    <section className="title">
      <h1>{props.title}</h1>
      <p>
        {props.toDos.length > 0
          ? "Tasks for today:"
          : "No Tasks for today. Go get some sun! ☀️"}
      </p>
    </section>
  );
};

Header.defaultProps = {
  title: "To-Do App"
};

export default Header;
