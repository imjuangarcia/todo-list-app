class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToDo = this.addToDo.bind(this);
    this.removeToDos = this.removeToDos.bind(this);
    this.makeDecision = this.makeDecision.bind(this);
    this.completeToDo = this.completeToDo.bind(this);

    this.state = {
      toDos: JSON.parse(localStorage.getItem("toDos")) || []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.toDos.length !== this.state.toDos.length) {
      localStorage.setItem("toDos", JSON.stringify(this.state.toDos));
    }
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
      localStorage.removeItem("toDos", "");
      return {
        toDos: []
      };
    });
  }
  completeToDo(toDoToRemove) {
    this.setState(prevState => {
      return {
        toDos: prevState.toDos.filter(toDo => {
          return toDoToRemove !== toDo;
        })
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
        <Header toDos={this.state.toDos} />
        <ToDos toDos={this.state.toDos} completeToDo={this.completeToDo} />
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

const Actions = props => {
  return (
    <section className="buttons">
      <button disabled={!props.hasToDos} onClick={props.removeToDos}>
        Remove ToDos
      </button>
      <button disabled={!props.hasToDos} onClick={props.makeDecision}>
        What should I do?
      </button>
    </section>
  );
};

class ToDos extends React.Component {
  render() {
    return (
      <ul>
        {this.props.toDos.map(toDo => (
          <ToDo
            key={toDo}
            toDoText={toDo}
            completeToDo={this.props.completeToDo}
          />
        ))}
      </ul>
    );
  }
}

class ToDo extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          onClick={e => {
            this.props.completeToDo(this.props.toDoText);
          }}
        />
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

    this.setState(() => {
      return {
        error
      };
    });

    if (!error) {
      e.target.elements.toDo.value = "";
    }
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
