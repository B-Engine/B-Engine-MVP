export const CONTROLS = {
  UP: "w",
  DOWN: "s",
  LEFT: "a",
  RIGHT: "d",
  FIRE: " "
};

const _controlCallbacks = {};
for (const key in CONTROLS) {
  _controlCallbacks[CONTROLS[key]] = [];
}

export function AddEventCallback(ControlName, callback) {
  if (
    _controlCallbacks[ControlName] == null ||
    _controlCallbacks[ControlName] == undefined
  ) {
    throw new Error(ControlName + " is not a valid control");
  }

  _controlCallbacks[ControlName].push(callback);
}

export function SetupControls() {
  document.addEventListener("keydown", function(event) {
    for (const key in _controlCallbacks) {
      if (event.key == key) {
        _controlCallbacks[key].forEach(callback => callback());
        return;
      }
    }
  });
}

export default CONTROLS;
