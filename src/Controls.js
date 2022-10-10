const Controls = ({
  volume,
  changeVolume,
  isOn,
  turnOnOff,
  isBankOne,
  switchBank,
}) => {
  return (
    <div className="controls">
      <div className="power">
        <h2>Power</h2>
        <div className={`switch ${isOn && "on"}`}>
          <div className="switch-click" onClick={turnOnOff}></div>
        </div>
      </div>
      {isOn ? (
        <>
          <div className="volume">
            <h2>Volume</h2>
            <input
              className="slider"
              type="range"
              step={0.01}
              value={volume}
              onChange={changeVolume}
              min="0"
              max="1"
            />
          </div>
          <div className="bank">
            <h2>Bank</h2>
            <div className={`switch ${!isBankOne && "on"}`}>
              <div className="switch-click" onClick={switchBank}></div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Controls;
