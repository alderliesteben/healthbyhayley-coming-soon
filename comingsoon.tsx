<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Health by Hayley — Coming Soon</title>
    <style>
      body {
        margin: 0;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        background: #0b1b2b;
        color: #fff;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
      }
      .card {
        width: min(560px, 100%);
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 16px;
        padding: 28px;
        text-align: center;
      }
      h1 { margin: 0 0 10px; font-size: 34px; letter-spacing: 0.2px; }
      p { margin: 0 0 20px; opacity: 0.9; line-height: 1.4; }
      .btn {
        display: inline-block;
        padding: 12px 18px;
        border-radius: 12px;
        background: #ffffff;
        color: #0b1b2b;
        text-decoration: none;
        font-weight: 600;
      }
      .icons {
        margin-top: 18px;
        display: flex;
        justify-content: center;
        gap: 14px;
      }
      .icon {
        width: 44px;
        height: 44px;
        display: grid;
        place-items: center;
        border-radius: 12px;
        border: 1px solid rgba(255,255,255,0.18);
        background: rgba(255,255,255,0.06);
        text-decoration: none;
      }
      .icon svg { width: 22px; height: 22px; fill: #fff; opacity: 0.95; }
      footer { margin-top: 16px; font-size: 13px; opacity: 0.75; }
    </style>
  </head>
  <body>
    <main class="card">
      <h1>Coming Soon</h1>
      <p>
        Health by Hayley is launching soon.<br />
        Book ahead to secure your spot.
      </p>

      <!-- Change this link to your booking/pre-book URL -->
      <a class="btn" href="https://YOUR-BOOKING-LINK-HERE" target="_blank" rel="noreferrer">
        Pre-book appointments
      </a>

      <div class="icons">
        <!-- Facebook -->
        <a class="icon" href="https://facebook.com/YOURPAGE" target="_blank" rel="noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.3v7A10 10 0 0 0 22 12z"/>
          </svg>
        </a>

        <!-- Instagram -->
        <a class="icon" href="https://instagram.com/YOURHANDLE" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5zM18 6.2a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 18 6.2z"/>
          </svg>
        </a>
      </div>

      <footer>© <span id="y"></span> Health by Hayley</footer>
    </main>

    <script>
      document.getElementById("y").textContent = new Date().getFullYear();
    </script>
  </body>
</html>
