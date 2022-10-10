import { useEffect, useState } from "react";

const Pads = ({ bankPad, volume }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === bankPad.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audioClip = document.getElementById(bankPad.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioClip.volume = volume;
    audioClip.play();
  };

  return (
    <div className={`pad ${active && "pad-clicked"}`} onClick={playSound}>
      <audio id={bankPad.keyTrigger} src={bankPad.url} />
      {bankPad.keyTrigger}
    </div>
  );
};

export default Pads;
