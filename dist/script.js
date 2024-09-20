const { useEffect, useState } = React; // Import useState from React

const Drum = () => {

  const [display, setDisplay] = useState(" "); // State to hold display text

  const playAudio = (id, soundId) => {
    console.log("Played audio");
    const audio = document.getElementById(soundId);
    if (audio) {
      audio.currentTime = 0; // Reset audio to start
      audio.play();
      setDisplay(id); // Update display
    } else
    {
      console.log("Audio element not found for:", soundId); // Debugging line
    }
  };

  const handleKeyPress = event => {
    const key = event.key.toUpperCase();
    console.log("Key pressed:", key); // Debugging line
    switch (key) {
      case "Q":
        playAudio("Heater 1", "audio1", setDisplay);
        break;
      case "W":
        playAudio("Heater 2", "audio2", setDisplay);
        break;
      case "E":
        playAudio("Heater 3", "audio3", setDisplay);
        break;
      case "A":
        playAudio("Heater 4", "audio4", setDisplay);
        break;
      case "S":
        playAudio("Clap", "audio5", setDisplay);
        break;
      case "D":
        playAudio("Open HH", "audio6", setDisplay);
        break;
      case "Z":
        playAudio("Kick n' Hat", "audio7", setDisplay);
        break;
      case "X":
        playAudio("Kick", "audio8", setDisplay);
        break;
      case "C":
        playAudio("Closed HH", "audio9", setDisplay);
        break;
      default:
        break;}

  };
  useEffect(() => {
    // Add event listener for keydown
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Run only once on mount
  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/

    React.createElement("div", { id: "drum-pads" }, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("button", { className: "drum-pad",
      onClick: () => playAudio("Heater 1", "audio1", setDisplay) }, "Q", /*#__PURE__*/
    React.createElement("audio", { id: "audio1", src: "https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Heater-1.mp3" })), /*#__PURE__*/

    React.createElement("button", { className: "drum-pad",
      onClick: () => playAudio("Heater 2", "audio2", setDisplay) }, "W", /*#__PURE__*/
    React.createElement("audio", { id: "audio2", src: "https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Heater-2.mp3" })), /*#__PURE__*/

    React.createElement("button", { className: "drum-pad",
      onClick: () => playAudio("Heater 3", "audio3", setDisplay) }, "E", /*#__PURE__*/
    React.createElement("audio", { id: "audio3", src: "https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Heater-3.mp3" }))), /*#__PURE__*/


    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("button", { className: "drum-pad",
      onClick: () => playAudio("Heater 4", "audio4", setDisplay) }, "A", /*#__PURE__*/
    React.createElement("audio", { id: "audio4", src: "https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Heater-4_1.mp3" })), /*#__PURE__*/

    React.createElement("button", { className: "drum-pad",
      onClick: () => playAudio("Clap", "audio5", setDisplay) }, "S", /*#__PURE__*/
    React.createElement("audio", { id: "audio5", src: "https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Heater-6.mp3" })), /*#__PURE__*/

    React.createElement("button", { className: "drum-pad",
      onClick: () => playAudio("Open HH", "audio6", setDisplay) }, "D", /*#__PURE__*/
    React.createElement("audio", { id: "audio6", src: "https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Dsc_Oh.mp3" }))), /*#__PURE__*/


    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("button", { className: "drum-pad",
      onClick: () => playAudio("Kick n' Hat", "audio7", setDisplay) }, "Z", /*#__PURE__*/
    React.createElement("audio", { id: "audio7", src: "https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Kick_n_Hat.mp3" })), /*#__PURE__*/

    React.createElement("button", { className: "drum-pad",
      onClick: () => playAudio("Kick", "audio8", setDisplay) }, "X", /*#__PURE__*/
    React.createElement("audio", { id: "audio8", src: "https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/RP4_KICK_1.mp3" })), /*#__PURE__*/

    React.createElement("button", { className: "drum-pad",
      onClick: () => playAudio("Closed HH", "audio9", setDisplay) }, "C", /*#__PURE__*/
    React.createElement("audio", { id: "audio9", src: "https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Cev_H2.mp3" })))), /*#__PURE__*/



    React.createElement("div", { id: "display" }, display)));



};

const App = () => {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, "Drum Machine"), /*#__PURE__*/
    React.createElement(Drum, null), /*#__PURE__*/
    React.createElement("p", null, " Inspired by ", /*#__PURE__*/React.createElement("a", { href: "https://drum-machine.freecodecamp.rocks/", target: "_blank" }, "Drum Machine by FCC"))));



};


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));