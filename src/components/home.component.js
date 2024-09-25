import { router } from "../router/router";

export default function Home() {
  const templateName = "HOME";

  const initHTML = () => {
    // html 페이지 주입
    router.metadataInit("홈");
    const html = router.templates[templateName];
    document.querySelector("#content").innerHTML = html;
  };

  initHTML();
}
