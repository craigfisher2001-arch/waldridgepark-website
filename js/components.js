// Shared nav and footer injection
// Sets active nav link based on current page

function getNavHTML(activePage) {
  const links = [
    { href: '/index.html', label: 'Home', key: 'home' },
    { href: '/pages/about.html', label: 'About', key: 'about' },
    { href: '/pages/teams.html', label: 'Teams', key: 'teams' },
    { href: '/pages/news.html', label: 'News', key: 'news' },
    { href: '/pages/club-info.html', label: 'Club info', key: 'club-info' },
    { href: '/pages/contact.html', label: 'Contact', key: 'contact' },
  ];
  const lis = links.map(l =>
    `<li><a href="${l.href}" class="${l.key === activePage ? 'active' : ''}">${l.label}</a></li>`
  ).join('');
  return `
  <nav class="nav">
    <div class="nav-inner">
      <a href="/index.html" class="nav-logo">
        <img src="/images/badge.png" alt="Waldridge Park JFC crest">
        <div class="nav-logo-text">
          Waldridge Park JFC
          <span>Chester-le-Street · Est. 1988</span>
        </div>
      </a>
      <ul class="nav-links" id="nav-links">${lis}</ul>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="/index.html" class="footer-logo">
            <img src="/images/badge.png" alt="Waldridge Park JFC">
            <div class="footer-logo-text">
              Waldridge Park JFC
              <span>Est. 1988</span>
            </div>
          </a>
          <p>A community junior football club based in Chester-le-Street, County Durham. Founded in 1988. Measuring success in smiles since day one.</p>
        </div>
        <div class="footer-col">
          <h4>The club</h4>
          <ul>
            <li><a href="/pages/about.html">About us</a></li>
            <li><a href="/pages/about.html#history">Club history</a></li>
            <li><a href="/pages/about.html#philosophy">Our philosophy</a></li>
            <li><a href="/pages/club-info.html#committee">Committee</a></li>
            <li><a href="/pages/club-info.html#sponsors">Sponsors</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Information</h4>
          <ul>
            <li><a href="/pages/news.html">News &amp; newsletter</a></li>
            <li><a href="/pages/club-info.html#policies">Club policies</a></li>
            <li><a href="/pages/contact.html#find-us">Find us</a></li>
            <li><a href="/pages/contact.html">Contact</a></li>
            <li><a href="/pages/contact.html#join">Join the club</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Waldridge Park JFC &middot; Chester-le-Street &middot; Affiliated with Durham FA</p>
        <div class="social-links">
          <a href="https://www.facebook.com/WPJFC88/" class="social-link" title="Facebook" target="_blank" rel="noopener">&#xf09a;</a>
          <a href="https://twitter.com/waldridgepark88" class="social-link" title="X / Twitter" target="_blank" rel="noopener">&#x58;</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function getPhilosophyHTML() {
  return `
  <div class="philosophy">
    <div class="philosophy-inner">
      <div class="philosophy-item"><div class="philosophy-dot"></div><p><strong>Play</strong>Enjoy the ball, want the ball, share the ball</p></div>
      <div class="philosophy-item"><div class="philosophy-dot"></div><p><strong>Build</strong>Skills, players, teams, community</p></div>
      <div class="philosophy-item"><div class="philosophy-dot"></div><p><strong>Be game based</strong>High ball-rolling time, every session</p></div>
      <div class="philosophy-item"><div class="philosophy-dot"></div><p><strong>Attitude</strong>Try hard, be brave, enjoy it</p></div>
    </div>
  </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  document.addEventListener('click', e => {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (toggle && toggle.contains(e.target)) {
      links.classList.toggle('open');
    } else if (links && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });
});
