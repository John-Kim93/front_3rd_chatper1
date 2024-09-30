import ErrorBoundary from "./components/error-boundary.component.js";
import NotFound from "./components/error.component.js";
import Footer from "./components/footer.component.js";
import Header from "./components/header.component.js";
import Home from "./components/home.component.js";
import Login from "./components/login.component.js";
import Profile from "./components/profile.component.js";
import { bodyLayout, metadata } from "./router/html.js";
import { Router } from "./router/router.js";
import User from "./store/user.js";
import { isNullish } from "./util.js";

export const user = new User();

export function activateLink(targetId, path) {
  document.querySelector("body").addEventListener("click", (event) => {
    if (event.target.type === "submit") return;
    event.preventDefault();
    if (event.target.id === targetId) {
      router.navigateTo(path);
    }
  });
}

export function setForm(targetId, destinationPath, submitHandlers) {
  document.getElementById(targetId).addEventListener("submit", () => {
    if (submitHandlers.length > 0) {
      submitHandlers.forEach((handler) => {
        handler();
      });
    }
    router.navigateTo(destinationPath);
  });
}

function metadataInit(templateName) {
  document.head.innerHTML = metadata(templateName);
}

function addClassToId(targetId, className) {
  document.getElementById(targetId).classList.add(...className);
}

function initBodyLayout(componentName) {
  document.body.innerHTML = bodyLayout;
  document.querySelector("header").innerHTML = Header();
  if (componentName === "HOME") {
    addClassToId("home", ["text-blue-600"]);
    addClassToId("profile", ["text-gray-600"]);
  } else if (componentName === "PROFILE") {
    addClassToId("home", ["text-gray-600"]);
    addClassToId("profile", ["text-blue-600"]);
  }

  activateLink("home", "/");
  activateLink("profile", "/profile");
  document.querySelector("body").addEventListener("click", (event) => {
    if (event.target.id !== "logout") return;
    event.preventDefault();
    if (!isNullish(user.getStateFromLocalStorage())) {
      localStorage.clear();
    }
    router.navigateTo("/login");
  });

  document.querySelector("footer").innerHTML = Footer();
}

function render({ componentName, targetId, html, handlers }) {
  const mainComponents = ["HOME", "PROFILE"];
  if (mainComponents.includes(componentName)) {
    initBodyLayout(componentName);
  }
  metadataInit(componentName);
  document.getElementById(targetId).innerHTML = html;
  if (handlers.length > 0) {
    handlers.forEach((handler) => {
      if (typeof handler === "function") {
        handler();
      }
    });
  }
}

function checkLogin() {
  const isLogin = !isNullish(user.getStateFromLocalStorage);
  return isLogin;
}

export const router = new Router();

router.addRoute("/", () => {
  render(Home());
});

router.addRoute("/profile", () => {
  if (!checkLogin()) {
    router.navigateTo("/login");
    return;
  }
  render(Profile());
});

router.addRoute("/login", () => {
  if (checkLogin()) {
    router.navigateTo("/");
    return;
  }

  render(Login());
});

router.addRoute("/notFound", () => {
  render(NotFound());
});

const curPath = window.location.pathname;
router.handleRoute(curPath);

window.addEventListener("error", (event) => {
  render(ErrorBoundary(event.error));
});
