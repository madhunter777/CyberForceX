// Matrix rain effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeMatrix() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeMatrix();
window.addEventListener('resize', resizeMatrix);

// Characters
const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=-';
const fontSize = 22;
const columns = [];
for(let x = 0; x < canvas.width/fontSize; x++) columns[x] = 1;

function drawMatrix() {
  ctx.fillStyle = 'rgba(11, 15, 16, 0.23)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = fontSize + "px monospace";
  ctx.fillStyle = '#00ff7b';
  for(let i = 0; i < columns.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * fontSize, columns[i] * fontSize);
    if (columns[i] * fontSize > canvas.height && Math.random() > 0.975) {
      columns[i] = 0;
    }
    columns[i]++;
  }
}
setInterval(drawMatrix, 45);
// MODAL LOGIC
function showModal(type) {
  const modalBg = document.getElementById('modal-bg');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  modalBg.style.display = 'flex';
  let content = '';

  if(type === 'report') {
    modalTitle.innerText = 'Report Scam & Fraud';
    content = `
      <div class="report-options">
        <button class="report-btn" onclick="selectReportType('phone')">Report Phone Number</button>
        <button class="report-btn" onclick="selectReportType('website')">Report Website</button>
        <button class="report-btn" onclick="selectReportType('email')">Report Email</button>
        <button class="report-btn" onclick="selectReportType('other')">Report Other</button>
      </div>
      <div id="report-form"></div>
    `;
  } else if(type === 'warnings') {
  // zamień zawartość na poniższą
  modalTitle.innerText = 'Scam Warnings / Daily Alerts';
  content = `
    <h3>Latest Scam Alerts (Daily Update)</h3>
    <ul class="scam-list">
      <li><b>18.05.2025:</b> "Bank refund" SMS phishing – DO NOT CLICK fake refund link!</li>
      <li><b>18.05.2025:</b> Fake police calls demanding payment – Ignore and report number!</li>
      <li><b>17.05.2025:</b> WhatsApp: "You won a prize" – scam, do not reply</li>
      <li><b>16.05.2025:</b> Instagram DMs: "Verify your account" phishing</li>
      <li><b>15.05.2025:</b> Crypto investment Telegram group invites – do not send any funds</li>
    </ul>
    <hr>
  <p style="margin-top:8px; font-size:0.92rem; color:#10ff90;">Chcesz zgłosić nowy scam? Kliknij „Report Scam & Fraud” powyżej.</p>
`;
} else if(type === 'chat') {
  modalTitle.innerText = 'Contact Us';
  content = `
    <div style="margin-bottom:18px;">
      <p style="font-size:1.08rem; color:#10ff80;">
        Potrzebujesz porady, zgłosić scam lub współpracę?<br>
        Skontaktuj się z nami przez Facebook!
      </p>
    </div>
    <a href="https://facebook.com/Cyberforcex" target="_blank" class="report-btn" style="font-size:1.16rem;">
      Przejdź do naszej strony na Facebooku
    </a>
    <p style="margin-top:18px;font-size:0.93rem;">
      Możesz też napisać bezpośrednio w Messenger: <br>
      <a href="https://m.me/Cyberforcex" target="_blank" style="color:#22ff88;">m.me/TWOJA_NAZWA</a>
    </p>
  `;

  } else if(type === 'support') {
    modalTitle.innerText = 'Support Our Business';
    content = `
      <div>
      <p>You can help us fight scams and build better tools:</p>
      <ul>
        <li>@ Donate (BTC/ETH/PayPal/BuyMeACoffee)</li>
        <li>@ Share with your network</li>
        <li>@ Join as a volunteer</li>
        <li>@ Become a business partner</li>
      </ul>
      <p style="margin-top:10px;font-size:0.99rem;">Tu możesz dodać linki do płatności, partnerstwa, kontaktu. Każdy klik to potencjalny lead lub kasa.</p>
      </div>
    `;
  }
  modalContent.innerHTML = content;
}

function closeModal() {
  document.getElementById('modal-bg').style.display = 'none';
}
function selectReportType(type) {
  let formHtml = '';
  if(type === 'phone') {
    formHtml = `
      <h3>Report Phone Number</h3>
      <input type="text" placeholder="Enter phone number" class="modal-input" /><br/>
      <textarea placeholder="Details (optional)" class="modal-input"></textarea><br/>
      <button class="report-send">Send Report</button>
    `;
  } else if(type === 'website') {
    formHtml = `
      <h3>Report Website</h3>
      <input type="text" placeholder="Enter website URL" class="modal-input" /><br/>
      <textarea placeholder="Details (optional)" class="modal-input"></textarea><br/>
      <button class="report-send">Send Report</button>
    `;
  } else if(type === 'email') {
    formHtml = `
      <h3>Report Email</h3>
      <input type="email" placeholder="Enter email address" class="modal-input" /><br/>
      <textarea placeholder="Details (optional)" class="modal-input"></textarea><br/>
      <button class="report-send">Send Report</button>
    `;
  } else if(type === 'other') {
    formHtml = `
      <h3>Report Other Scam</h3>
      <input type="text" placeholder="What type? (e.g., IG, FB)" class="modal-input" /><br/>
      <textarea placeholder="Details" class="modal-input"></textarea><br/>
      <button class="report-send">Send Report</button>
    `;
  }
  document.getElementById('report-form').innerHTML = formHtml;
}
