export default class User {
  constructor() {
    this.state = {
      username: "",
      email: "",
      bio: "",
    };

    this.subscribers = [];
  }

  subscribe(component) {
    this.subscribers.push(component);
  }

  setState(data) {
    if (typeof data === "function") {
      const reqState = data(state);
      this.state = reqState;
      localStorage.setItem("user", JSON.stringify(reqState));
    } else {
      this.state = data;
      localStorage.setItem("user", JSON.stringify(data));
    }
    this.subscribers.forEach((reRender) => reRender());
  }

  getState() {
    return this.state;
  }

  getStateFromLocalStorage() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
