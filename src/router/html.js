export const bodyLayout = `
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        <header></header>
        <div id="content"></div>
        <footer></footer>
      </div>
    </div>
  </div>
`;
export const metadata = (templateName) => `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>항해플러스 - ${templateName}</title>
  <script src="https://cdn.tailwindcss.com"></script>
`;
