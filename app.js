const count = document.getElementById("count");
const status = document.getElementById("status");
const version = document.getElementById("version");
const logic = window.counterLogic;

let value = 0;

function render() {
  count.textContent = String(value);
}

function update(delta) {
  value = logic.nextValue(value, delta);
  render();
  if (value === logic.MAX || value === logic.MIN) {
    status.textContent = "Limit reached!";
  } else {
    status.textContent = "";
  }
}

document.getElementById("increment").addEventListener("click", () => update(1));
document.getElementById("decrement").addEventListener("click", () => update(-1));
document.getElementById("reset").addEventListener("click", () => {
  value = logic.reset();
  render();
  status.textContent = "Counter reset";
});

version.textContent = window.APP_VERSION || "dev";
render();
