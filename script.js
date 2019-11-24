function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { Component } = React;

const buttonArray = [
{
  id: 'Heater 1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  key: 'Q',
  keyCode: 81 },

{
  id: 'Heater 2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  key: 'W',
  keyCode: 87 },

{
  id: 'Heater 3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  key: 'E',
  keyCode: 69 },

{
  id: 'Heater 4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  key: 'A',
  keyCode: 65 },

{
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  key: 'S',
  keyCode: 83 },

{
  id: "Open-HH",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  key: 'D',
  keyCode: 68 },

{
  id: "Kick-\'n-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  key: 'Z',
  keyCode: 90 },

{
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  key: 'X',
  keyCode: 88 },

{
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  key: 'C',
  keyCode: 67 }];



class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",









    e => {
      this.setState({
        audio: e.target.id,
        display: e.target.innerText.trim() });

      const id = e.target.innerText.trim();
      const audio = this.refs[id];
      audio.play();
    });_defineProperty(this, "handleKeyPress",

    e => {
      if (e.key) {
        const name = this.props.buttonArray.find(el => el.key == e.key.toUpperCase()).name;
        this.setState({
          audio: name });

        const audio = document.getElementById(e.key.toUpperCase());
        audio ? audio.play() : '';
      }
    });_defineProperty(this, "handleChange",
    e => {
      const volume = e.target.value / 100;
      document.querySelectorAll('audio').forEach(el => el.volume = volume);
    });this.state = { audio: '', display: '', keyCode: 0 };this.handleKeyPress = this.handleKeyPress.bind(this);this.handleClick = this.handleClick.bind(this);this.handleChange = this.handleChange.bind(this);}
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    let soundPad = this.props.buttonArray.map((item) =>
    React.createElement("div", { className: "drum-pad", onClick: this.handleClick, id: item.id },
    item.key,
    React.createElement("audio", { className: "clip", ref: item.key, id: item.key, src: item.url })));

    return (
      React.createElement("div", { id: "drum-machine", className: "col-ms-12" },
      React.createElement("h1", null, "drum machine Project"),
      React.createElement("div", { id: "container" },
      React.createElement("div", { id: "content" },
      soundPad),

      React.createElement("div", { id: "display" },
      this.state.audio,
      React.createElement("div", { className: "volume" },
      React.createElement("label", { for: "volume-range" }, "Volume"),
      React.createElement("input", { id: "volume-range",
        type: "range",
        min: "0",
        max: "100",
        class: "volume",
        onChange: this.handleChange }),
      this.state.display)))));






  }}

ReactDOM.render(React.createElement(App, { buttonArray: buttonArray }), document.getElementById('root'));