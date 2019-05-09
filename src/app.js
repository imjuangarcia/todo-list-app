let appInfo = {
  title: "To-Do App",
  subtitle: "Next Up:",
  options: ["One", "Two"]
};

let template = (
  <section class="title">
    <h1>{appInfo.title}</h1>
    {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
    <p>
      {appInfo.options.length > 0
        ? "Tasks for today:"
        : "No Tasks for today. Go get some sun! ☀️"}
    </p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </section>
);

let appRoot = document.querySelector("#app");

ReactDOM.render(template, appRoot);
