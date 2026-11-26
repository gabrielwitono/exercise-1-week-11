// Pure logic, shared by the browser UI and the unit tests.
(function (root) {
  "use strict";

  const MIN = -99;
  const MAX = 99;

  function nextValue(current, delta) {
    const value = current + delta;
    if (value > MAX) return MAX;
    if (value < MIN) return MIN;
    return value;
  }

  function reset() {
    return 0;
  }

  const api = { nextValue, reset, MIN, MAX };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api; // Node (tests)
  } else {
    root.counterLogic = api; // Browser
  }
})(typeof self !== "undefined" ? self : this);
