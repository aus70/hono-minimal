import { html } from 'hono/html'

export const Layout = (props: { title: string; children?: any }) => {
  return html`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${props.title}</title>
        <link rel="stylesheet" href="/css/uikit.min.css" />
        <script src="/js/uikit.min.js"></script>
        <script src="/js/uikit-icons.min.js"></script>
      </head>
      <body style="padding: 1em 2em">
        <header>
          <h1>
            <a href="/">Hono Example</a>
          </h1>
        </header>
        <turbo-frame id="main"> ${props.children} </turbo-frame>
        <div class="uk-overflow-auto uk-height-medium">
        <div class="uk-inline">
            <button class="uk-button uk-button-default" type="button">Hover</button>
            <div class="uk-dropbar uk-dropbar-top" uk-drop="stretch: x">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
    </div>
</div>
        <footer>
          <address>Built with <a href="https://github.com/honojs/hono">Hono</a></address>
        </footer>
      </body>
    </html>`
}
