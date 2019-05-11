const appInfo = {
  title: "To-Do App",
  subtitle: "Next Up:",
  toDos: []
};

const addToDo = e => {
  e.preventDefault();
  const toDo = e.target.elements.toDo.value;

  if (toDo) {
    appInfo.toDos.push(toDo);
    e.target.elements.toDo.value = "";
    renderToDos();
  }
};

const makeDecision = () => {
  const randomNumber = Math.floor(Math.random() * appInfo.toDos.length);
  const option = appInfo.toDos[randomNumber];
  alert(option);
};

const completeToDo = e => {
  for (let i = 0; i < appInfo.toDos.length; i++) {
    if (appInfo.toDos[i] === e.target.nextSibling.innerHTML) {
      delete e.target.parentElement.remove();
      return appInfo.toDos.splice(i, 1);
    }
  }
  renderToDos();
};

const deleteToDos = () => {
  appInfo.toDos = [];
  renderToDos();
};

const renderToDos = () => {
  const template = (
    <section className="title">
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
      <p>
        {appInfo.toDos.length > 0
          ? "Tasks for today:"
          : "No Tasks for today. Go get some sun! ☀️"}
      </p>
      <button disabled={appInfo.toDos.length === 0} onClick={makeDecision}>
        What should I do?
      </button>
      <button onClick={deleteToDos}>Remove All ToDos</button>
      <ol>
        {appInfo.toDos.map(toDo => {
          return (
            <li key={toDo}>
              <input type="checkbox" onClick={completeToDo} />
              <span>{toDo}</span>
            </li>
          );
        })}
      </ol>
      <form onSubmit={addToDo}>
        <input type="text" name="toDo" />
        <button>Add ToDo</button>
      </form>
    </section>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.querySelector("#app");

renderToDos();
