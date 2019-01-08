/**
 * @typedef {Object} CONTROLS
 * @property {string} UP
 * @property {string} DOWN
 * @property {string} LEFT
 * @property {string} RIGHT
 * @property {string} FIRE
 */

/**
 * @type {CONTROLS}
 */
export const CONTROLS = {
  UP: "w",
  DOWN: "s",
  LEFT: "a",
  RIGHT: "d",
  FIRE: " "
};

/**
 * @private
 * @type {Object.<string, Array<(() => void)>>}
 */
const _controlCallbacks = {};
for (const key in CONTROLS) {
  _controlCallbacks[CONTROLS[key]] = [];
}

/**
 * @param {keyof CONTROLS} ControlName
 * @param {() => void} callback
 * @returns void
 */
export function AddEventCallback(ControlName, callback) {
  if (
    _controlCallbacks[ControlName] == null ||
    _controlCallbacks[ControlName] == undefined
  ) {
    throw new Error(ControlName + " is not a valid control");
  }

  _controlCallbacks[ControlName].push(callback);
}

/**
 * @returns void
 */
export function SetupControls() {
  document.addEventListener("keydown", function(event) {
    for (const key in _controlCallbacks) {
      if (event.key == key) {
        _controlCallbacks[key].forEach(
          /**
           * @param {() => void} callback
           */
          callback => callback()
        );
        return;
      }
    }
  });
}

export default CONTROLS;
