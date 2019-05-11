// const appInfo = {
//   title: "To-Do App",
//   subtitle: "Next Up:",
//   toDos: JSON.parse(localStorage.getItem("toDos")) || []
// };

// const addToDo = e => {
//   e.preventDefault();
//   const toDo = e.target.elements.toDo.value;

//   if (toDo) {
//     appInfo.toDos.push(toDo);
//     localStorage.setItem("toDos", JSON.stringify(appInfo.toDos));
//     e.target.elements.toDo.value = "";
//     renderToDos();
//   }
// };

// const makeDecision = () => {
//   const randomNumber = Math.floor(Math.random() * appInfo.toDos.length);
//   const option = appInfo.toDos[randomNumber];
//   alert(option);
// };

// const completeToDo = e => {
//   for (let i = 0; i < appInfo.toDos.length; i++) {
//     if (appInfo.toDos[i] === e.target.nextSibling.innerHTML) {
//       appInfo.toDos.splice(i, 1);
//       localStorage.setItem("toDos", JSON.stringify(appInfo.toDos));
//     }
//   }
//   renderToDos();
// };

// const deleteToDos = () => {
//   appInfo.toDos = [];
//   renderToDos();
// };

// const renderToDos = () => {
//   const template = (
//     <section className="title">
//       <h1>{appInfo.title}</h1>
//       {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
//       <p>
//         {appInfo.toDos.length > 0
//           ? "Tasks for today:"
//           : "No Tasks for today. Go get some sun! ☀️"}
//       </p>
//       <button disabled={appInfo.toDos.length === 0} onClick={makeDecision}>
//         What should I do?
//       </button>
//       <button disabled={appInfo.toDos.length === 0} onClick={deleteToDos}>
//         Remove All ToDos
//       </button>
//       <ol>
//         {appInfo.toDos.map(toDo => {
//           return (
//             <li key={toDo}>
//               <input type="checkbox" onClick={completeToDo} />
//               <span>{toDo}</span>
//             </li>
//           );
//         })}
//       </ol>
//       <form onSubmit={addToDo}>
//         <input type="text" name="toDo" />
//         <button>Add ToDo</button>
//       </form>
//     </section>
//   );
//   ReactDOM.render(template, appRoot);
// };

// const appRoot = document.querySelector("#app");

// renderToDos();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToDo = this.addToDo.bind(this);
    this.removeToDos = this.removeToDos.bind(this);
    this.makeDecision = this.makeDecision.bind(this);

    this.state = {
      toDos: []
    };
  }
  addToDo(toDo) {
    if (!toDo) {
      return "Enter a valid ToDo item";
    } else if (this.state.toDos.indexOf(toDo) > -1) {
      return "This ToDo already exists";
    }

    this.setState(previousState => {
      return {
        toDos: previousState.toDos.concat(toDo)
      };
    });
  }
  removeToDos() {
    this.setState(() => {
      return {
        toDos: []
      };
    });
  }
  makeDecision() {
    const randomNumber = Math.floor(Math.random() * this.state.toDos.length);
    const option = this.state.toDos[randomNumber];
    alert(option);
  }
  render() {
    return (
      <main>
        <Header title="To-Do App" />
        <Actions
          hasToDos={this.state.toDos.length > 0}
          removeToDos={this.removeToDos}
          makeDecision={this.makeDecision}
        />
        <ToDos toDos={this.state.toDos} />
        <AddToDo addToDo={this.addToDo} />
      </main>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <section className="title">
        <h1>{this.props.title}</h1>
      </section>
    );
  }
}

class Actions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button
          disabled={!this.props.hasToDos}
          onClick={this.props.removeToDos}
        >
          Remove ToDos
        </button>
        <button
          disabled={!this.props.hasToDos}
          onClick={this.props.makeDecision}
        >
          What should I do?
        </button>
      </React.Fragment>
    );
  }
}

class ToDos extends React.Component {
  render() {
    return this.props.toDos.map(toDo => <ToDo key={toDo} toDoText={toDo} />);
  }
}

class ToDo extends React.Component {
  render() {
    return <p>{this.props.toDoText}</p>;
  }
}

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.addToDo = this.addToDo.bind(this);
    this.state = {
      error: undefined
    };
  }
  addToDo(e) {
    e.preventDefault();
    const toDo = e.target.elements.toDo.value.trim();
    const error = this.props.addToDo(toDo);

    this.setState(() => {
      return {
        error
      };
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addToDo}>
          <input type="text" name="toDo" />
          <button>Add ToDo</button>
        </form>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
