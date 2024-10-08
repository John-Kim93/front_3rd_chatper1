export default function Header() {
  return html;
}

const html = `
  <div class="max-w-md w-full">
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li>
          <a href="/" id="home" class="font-bold">홈</a>
        </li>
        <li>
          <a href="/profile" id="profile" class="font-bold"
            >프로필</a
          >
        </li>
        <li>
          <a href="/login" id="logout" class="text-gray-600 font-bold"
            >로그아웃</a
          >
        </li>
      </ul>
    </nav>
  </div>
`;
