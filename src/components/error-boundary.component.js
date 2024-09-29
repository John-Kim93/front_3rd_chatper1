import { router } from "../router/router";

export default function ErrorBoundary(targetId, error) {
  const initHTML = () => {
    router.metadataInit("에러 바운더리");
    document.getElementById(targetId).innerHTML = html;
    document.getElementById(
      "message"
    ).innerHTML = `<div>${error.message}</div>`;
  };

  const hydratePage = () => {
    router.activateLink("home", "/");
  };

  initHTML();
  hydratePage();
}

const html = `
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center">
      <svg class="mx-auto h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728" />
      </svg>
      <h2 class="mt-4 text-xl font-bold text-gray-800">오류 발생!</h2>
      <div id="message" class="mt-2 text-gray-600"></div>
      <button
        id="home"
        class="mt-6 px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400">
        홈 화면으로 가기
      </button>
    </div>
  </div>
`;
