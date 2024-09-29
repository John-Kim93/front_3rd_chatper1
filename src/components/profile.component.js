import { user } from "../main";
import { router } from "../router/router";

export default function Profile() {
  const initHTML = () => {
    router.metadataInit("프로필");
    document.getElementById("content").innerHTML = html;
  };

  const hydratePage = () => {
    // 전역 상태 적용 버튼 활성화
    document
      .getElementById("global-state-button")
      .addEventListener("click", (event) => {
        event.preventDefault();
        user.set({
          username: "손흥민",
          email: "봉준호",
          bio: "김종현 let's go",
        });
      });

    // form 활성화
    const profileForm = document.getElementById("profile-form");
    profileForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const usernameInput = document.getElementById("username");
      const emailInput = document.getElementById("email");
      const bioInput = document.getElementById("bio");
      const userInfo = {
        username: usernameInput.value,
        email: emailInput.value,
        bio: bioInput.value,
      };
      localStorage.setItem("user", JSON.stringify(userInfo));
      router.navigateTo("/");
    });
  };

  // 전역 변수 구독
  const subscribe = () => {
    user.subscribe(() => {
      initHTML();
      initForm();
      hydratePage();
      setForm(user.get());
    });
  };

  const initForm = () => {
    setForm(JSON.parse(localStorage.getItem("user")));
  };

  const setForm = ({ username, email, bio }) => {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const bioInput = document.getElementById("bio");
    usernameInput.value = username ?? "";
    emailInput.value = email ?? "";
    bioInput.value = bio ?? "";
  };

  initHTML();
  initForm();
  hydratePage();
  subscribe();
}

export const html = `
  <main class="p-4">
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-4">
        내 프로필
      </h2>
      <div class="text-center mb-4">
        <button id="global-state-button" class="bg-blue-600 text-white p-2 rounded font-bold">전역 상태로 변경</button>
      </div>
      <form id="profile-form">
        <div class="mb-4">
          <label
            for="username"
            class="block text-gray-700 text-sm font-bold mb-2"
            >사용자 이름</label
          >
          <input
            type="text"
            id="username"
            name="username"
            value="홍길동"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <label
            for="email"
            class="block text-gray-700 text-sm font-bold mb-2"
            >이메일</label
          >
          <input
            id="email"
            name="email"
            value="hong@example.com"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-6">
          <label
            for="bio"
            class="block text-gray-700 text-sm font-bold mb-2"
            >자기소개</label
          >
          <textarea
            id="bio"
            name="bio"
            rows="4"
            class="w-full p-2 border rounded"
          >
안녕하세요, 항해플러스에서 열심히 공부하고 있는 홍길동입니다.</textarea
          >
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-2 rounded font-bold"
        >
          프로필 업데이트
        </button>
      </form>
    </div>
  </main>
`;
