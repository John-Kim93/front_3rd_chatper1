export default function Footer() {
  const initHTML = () => {
    document.querySelector("footer").innerHTML = html;
  };

  initHTML();
}

const html = `
  <div class="max-w-md w-full">
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  </div>
`;
