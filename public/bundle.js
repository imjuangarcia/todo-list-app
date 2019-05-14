/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addToDo = this.addToDo.bind(this);
//     this.removeToDos = this.removeToDos.bind(this);
//     this.makeDecision = this.makeDecision.bind(this);
//     this.completeToDo = this.completeToDo.bind(this);

//     this.state = {
//       toDos: JSON.parse(localStorage.getItem("toDos")) || []
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.toDos.length !== this.state.toDos.length) {
//       localStorage.setItem("toDos", JSON.stringify(this.state.toDos));
//     }
//   }

//   addToDo(toDo) {
//     if (!toDo) {
//       return "Enter a valid ToDo item";
//     } else if (this.state.toDos.indexOf(toDo) > -1) {
//       return "This ToDo already exists";
//     }

//     this.setState(previousState => {
//       return {
//         toDos: previousState.toDos.concat(toDo)
//       };
//     });
//   }
//   removeToDos() {
//     this.setState(() => {
//       localStorage.removeItem("toDos", "");
//       return {
//         toDos: []
//       };
//     });
//   }
//   completeToDo(toDoToRemove) {
//     this.setState(prevState => {
//       return {
//         toDos: prevState.toDos.filter(toDo => {
//           return toDoToRemove !== toDo;
//         })
//       };
//     });
//   }
//   makeDecision() {
//     const randomNumber = Math.floor(Math.random() * this.state.toDos.length);
//     const option = this.state.toDos[randomNumber];
//     alert(option);
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <Header toDos={this.state.toDos} />
//         <ToDos toDos={this.state.toDos} completeToDo={this.completeToDo} />
//         <AddToDo addToDo={this.addToDo} />
//         <Actions
//           hasToDos={this.state.toDos.length > 0}
//           removeToDos={this.removeToDos}
//           makeDecision={this.makeDecision}
//         />
//       </React.Fragment>
//     );
//   }
// }

// const Header = props => {
//   return (
//     <section className="title">
//       <h1>{props.title}</h1>
//       <p>
//         {props.toDos.length > 0
//           ? "Tasks for today:"
//           : "No Tasks for today. Go get some sun! ☀️"}
//       </p>
//     </section>
//   );
// };

// Header.defaultProps = {
//   title: "To-Do App"
// };

// const Actions = props => {
//   return (
//     <section className="buttons">
//       <button disabled={!props.hasToDos} onClick={props.removeToDos}>
//         Remove ToDos
//       </button>
//       <button disabled={!props.hasToDos} onClick={props.makeDecision}>
//         What should I do?
//       </button>
//     </section>
//   );
// };

// class ToDos extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.toDos.map(toDo => (
//           <ToDo
//             key={toDo}
//             toDoText={toDo}
//             completeToDo={this.props.completeToDo}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

// class ToDo extends React.Component {
//   render() {
//     return (
//       <li>
//         <input
//           type="checkbox"
//           onClick={e => {
//             this.props.completeToDo(this.props.toDoText);
//           }}
//         />
//         <span>{this.props.toDoText}</span>
//       </li>
//     );
//   }
// }

// class AddToDo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addToDo = this.addToDo.bind(this);
//     this.state = {
//       error: undefined
//     };
//   }
//   addToDo(e) {
//     e.preventDefault();
//     const toDo = e.target.elements.toDo.value.trim();
//     const error = this.props.addToDo(toDo);

//     this.setState(() => {
//       return {
//         error
//       };
//     });

//     if (!error) {
//       e.target.elements.toDo.value = "";
//     }
//   }
//   render() {
//     return (
//       <React.Fragment>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.addToDo}>
//           <input type="text" name="toDo" />
//           <button>Add ToDo</button>
//         </form>
//       </React.Fragment>
//     );
//   }
// }

// ReactDOM.render(<App />, document.querySelector("#app"));


/***/ })
/******/ ]);