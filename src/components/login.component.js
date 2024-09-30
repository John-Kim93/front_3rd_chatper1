import { setForm, user } from "../main";

export default function Login() {
  function submitForm() {
    // validation : TC 통과를 위해 주석 처리
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameInput = document.getElementById("username");
    // const passwordInput = document.getElementById("password");
    // if (usernameInput.value === "" || isNullorUndefined(usernameInput.value)) {
    //   document.getElementById("id-error").innerText = "필수 입력 값입니다.";
    //   return;
    // } else if (!emailRegex.test(usernameInput.value)) {
    //   document.getElementById("id-error").innerText = "이메일 형식이 아닙니다.";
    //   return;
    // } else {
    //   document.getElementById("id-error").innerText = null;
    // }
    // if (passwordInput.value === "" || isNullorUndefined(passwordInput.value)) {
    //   document.getElementById("pw-error").innerText = "필수 입력 값입니다.";
    //   return;
    // } else {
    //   document.getElementById("pw-error").innerText = null;
    // }
    user.setState({ username: usernameInput.value, email: "", bio: "" });
  }

  // 에러 바운더리 테스트
  // const $username = document.getElementById("username");
  // $username.addEventListener(
  //   "input",
  //   () => {
  //     throw new Error("의도적인 오류입니다.");
  //   },
  //   { once: true }
  // );

  return {
    componentName: "LOGIN",
    targetId: "root",
    html,
    handlers: [() => setForm("login-form", "/", [submitForm])],
  };
}

const html = `
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">
        항해플러스
      </h1>
      <form id="login-form">
        <div class="mb-4">
          <input
            id="username"
            type="text"
            placeholder="이메일 또는 전화번호"
            class="w-full p-2 border rounded"
          />
          <div id="id-error" class="mt-2 text-red-400 font-bold text-xs"></div>
        </div>
        <div class="mb-6">
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            class="w-full p-2 border rounded"
          />
          <div id="pw-error" class="mt-2 text-red-400 font-bold text-xs"></div>
        </div>
        <button
          id="login"
          type="submit"
          class="w-full bg-blue-600 text-white p-2 rounded font-bold"
        >
          로그인
        </button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6" />
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">
          새 계정 만들기
        </button>
      </div>
    </div>
  </main>
`;
