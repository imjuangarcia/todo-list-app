class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToDo = this.addToDo.bind(this);
    this.removeToDos = this.removeToDos.bind(this);
    this.makeDecision = this.makeDecision.bind(this);

    this.state = {
      toDos: JSON.parse(localStorage.getItem("toDos")) || []
    };
  }

  addToDo(toDo) {
    if (!toDo) {
      return "Enter a valid ToDo item";
    } else if (this.state.toDos.indexOf(toDo) > -1) {
      return "This ToDo already exists";
    }

    this.setState(previousState => {
      localStorage.setItem(
        "toDos",
        JSON.stringify(previousState.toDos.concat(toDo))
      );
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
      <React.Fragment>
        <Header title="To-Do App" toDos={this.state.toDos} />
        <ToDos toDos={this.state.toDos} />
        <AddToDo addToDo={this.addToDo} />
        <Actions
          hasToDos={this.state.toDos.length > 0}
          removeToDos={this.removeToDos}
          makeDecision={this.makeDecision}
        />
      </React.Fragment>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <section className="title">
        <h1>{this.props.title}</h1>
        <p>
          {this.props.toDos.length > 0
            ? "Tasks for today:"
            : "No Tasks for today. Go get some sun! ☀️"}
        </p>
      </section>
    );
  }
}

class Actions extends React.Component {
  render() {
    return (
      <section className="buttons">
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
      </section>
    );
  }
}

class ToDos extends React.Component {
  constructor(props) {
    super(props);
    this.completeToDo = this.completeToDo.bind(this);
  }
  completeToDo(e) {
    for (let i = 0; i < this.props.toDos.length; i++) {
      if (this.props.toDos[i] === e.target.nextSibling.innerHTML) {
        this.props.toDos.splice(i, 1);
        this.setState(() => {
          localStorage.setItem("toDos", JSON.stringify(this.props.toDos));
          return {
            toDos: this.props.toDos
          };
        });
      }
    }
  }
  render() {
    return (
      <ul>
        {this.props.toDos.map(toDo => (
          <ToDo key={toDo} toDoText={toDo} completeToDo={this.completeToDo} />
        ))}
      </ul>
    );
  }
}

class ToDo extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" onClick={this.props.completeToDo} />
        <span>{this.props.toDoText}</span>
      </li>
    );
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
    e.target.elements.toDo.value = "";

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
