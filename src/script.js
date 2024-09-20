const { useEffect,useState } = React; // Import useState from React

const Drum = () =>{
  
  const [display, setDisplay] = useState(" "); // State to hold display text
  
  const playAudio = (id, soundId) => {
  console.log("Played audio");
  const audio = document.getElementById(soundId);
  if(audio){
    audio.currentTime = 0; // Reset audio to start
    audio.play();
    setDisplay(id); // Update display
  }
  else {
      console.log("Audio element not found for:", soundId); // Debugging line
    }
};
  
  const handleKeyPress = (event) => {
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
        break;
    }
  };
  useEffect(() => {
    // Add event listener for keydown
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Run only once on mount
  return(
    <div id="drum-machine">
      
        <div id="drum-pads">
          <div className="row">
              <button className="drum-pad"
              onClick={() => playAudio("Heater 1", "audio1", setDisplay)} >Q
                <audio id="audio1" src="https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Heater-1.mp3"></audio>
              </button>
            <button className="drum-pad"
              onClick={() => playAudio("Heater 2", "audio2", setDisplay)} >W
                <audio id="audio2" src="https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Heater-2.mp3"></audio>
              </button>
            <button className="drum-pad"
              onClick={() => playAudio("Heater 3", "audio3", setDisplay)} >E
                <audio id="audio3" src="https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Heater-3.mp3"></audio>
            </button>
          </div>
          <div className="row">
            <button className="drum-pad"
              onClick={() => playAudio("Heater 4", "audio4", setDisplay)} >A
                <audio id="audio4" src="https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Heater-4_1.mp3"></audio>
            </button>
            <button className="drum-pad"
              onClick={() => playAudio("Clap", "audio5", setDisplay)} >S
              <audio id="audio5" src="https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Heater-6.mp3"></audio>
            </button>
            <button className="drum-pad"
              onClick={() => playAudio("Open HH", "audio6", setDisplay)} >D
                <audio id="audio6" src="https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Dsc_Oh.mp3"></audio>
            </button>
          </div>
          <div className="row">
            <button className="drum-pad"
              onClick={() => playAudio("Kick n' Hat", "audio7", setDisplay)} >Z
                <audio id="audio7" src="https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Kick_n_Hat.mp3"></audio>
            </button>
            <button className="drum-pad"
              onClick={() => playAudio("Kick", "audio8", setDisplay)} >X
                <audio id="audio8" src="https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/RP4_KICK_1.mp3"></audio>
            </button>
            <button className="drum-pad"
              onClick={() => playAudio("Closed HH", "audio9", setDisplay)} >C
                <audio id="audio9" src="https://github.com/Joannajojo/drum-machine/raw/refs/heads/main/asset/Cev_H2.mp3"></audio>
            </button>
          </div>
        </div>
        <div id="display">{display}</div>
      
    </div>
  );
};

const App = () => {
  return(
    <div>
      <h1>Drum Machine</h1>
      <Drum />
      <p> Inspired by <a href="https://drum-machine.freecodecamp.rocks/" target="_blank">Drum Machine by FCC</a></p>
    </div>
    
  );
}


ReactDOM.render(<App />, document.getElementById('root'));