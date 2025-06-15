const countries = [
    { country_code: "ac", country_name: "Ascension Island" },
    { country_code: "ad", country_name: "Andorra" },
    { country_code: "ae", country_name: "United Arab Emirates" },
    { country_code: "af", country_name: "Afghanistan" },
    { country_code: "au", country_name: "Australia" },
    { country_code: "az", country_name: "Azerbaijan" },
    { country_code: "ba", country_name: "Bosnia and Herzegovina" },
    { country_code: "bd", country_name: "Bangladesh" },
    { country_code: "be", country_name: "Belgium" },
    { country_code: "bg", country_name: "Bulgaria" },
    { country_code: "bh", country_name: "Bahrain" },
    { country_code: "bj", country_name: "Benin" },
    { country_code: "bm", country_name: "Bermuda" },
    { country_code: "bn", country_name: "Brunei" },
    { country_code: "br", country_name: "Brazil" },
    { country_code: "bs", country_name: "Bahamas" },
    { country_code: "bw", country_name: "Botswana" },
    { country_code: "ca", country_name: "Canada" },
    { country_code: "cg", country_name: "Congo (Brazzaville)" },
    { country_code: "ch", country_name: "Switzerland" },
    { country_code: "ci", country_name: "Côte d'Ivoire" },
    { country_code: "ck", country_name: "Cook Islands" },
    { country_code: "cl", country_name: "Chile" },
    { country_code: "cm", country_name: "Cameroon" },
    { country_code: "cn", country_name: "China" },
    { country_code: "co", country_name: "Colombia" },
    { country_code: "cp", country_name: "Clipperton Island" },
    { country_code: "cr", country_name: "Costa Rica" },
    { country_code: "cu", country_name: "Cuba" },
    { country_code: "cv", country_name: "Cape Verde" },
    { country_code: "cw", country_name: "Curaçao" },
    { country_code: "cy", country_name: "Cyprus" },
    { country_code: "cz", country_name: "Czechia" },
    { country_code: "de", country_name: "Germany" },
    { country_code: "do", country_name: "Dominican Republic" },
    { country_code: "dz", country_name: "Algeria" },
    { country_code: "ea", country_name: "Ceuta and Melilla" },
    { country_code: "ec", country_name: "Ecuador" },
    { country_code: "ee", country_name: "Estonia" },
    { country_code: "eh", country_name: "Western Sahara" },
    { country_code: "es", country_name: "Spain" },
    { country_code: "eu", country_name: "European Union" },
    { country_code: "fi", country_name: "Finland" },
    { country_code: "fr", country_name: "France" },
    { country_code: "ga", country_name: "Gabon" },
    { country_code: "gb-eng", country_name: "England" },
    { country_code: "gb-sct", country_name: "Scotland" },
    { country_code: "gb-wls", country_name: "Wales" },
    { country_code: "gb", country_name: "United Kingdom" },
    { country_code: "gf", country_name: "French Guiana" },
    { country_code: "gi", country_name: "Gibraltar" },
    { country_code: "gl", country_name: "Greenland" },
    { country_code: "gr", country_name: "Greece" },
    { country_code: "gt", country_name: "Guatemala" },
    { country_code: "hk", country_name: "Hong Kong" },
    { country_code: "hn", country_name: "Honduras" },
    { country_code: "hr", country_name: "Croatia" },
    { country_code: "hu", country_name: "Hungary" },
    { country_code: "ic", country_name: "Canary Islands" },
    { country_code: "id", country_name: "Indonesia" },
    { country_code: "ie", country_name: "Ireland" },
    { country_code: "il", country_name: "Israel" },
    { country_code: "in", country_name: "India" },
    { country_code: "iq", country_name: "Iraq" },
    { country_code: "is", country_name: "Iceland" },
    { country_code: "jm", country_name: "Jamaica" },
    { country_code: "jo", country_name: "Jordan" },
    { country_code: "jp", country_name: "Japan" },
    { country_code: "ke", country_name: "Kenya" },
    { country_code: "ki", country_name: "Kiribati" },
    { country_code: "km", country_name: "Comoros" },
    { country_code: "kr", country_name: "South Korea" },
    { country_code: "kw", country_name: "Kuwait" },
    { country_code: "ky", country_name: "Cayman Islands" },
    { country_code: "la", country_name: "Laos" },
    { country_code: "lb", country_name: "Lebanon" },
    { country_code: "lr", country_name: "Liberia" },
    { country_code: "lt", country_name: "Lithuania" },
    { country_code: "lu", country_name: "Luxembourg" },
    { country_code: "lv", country_name: "Latvia" },
    { country_code: "ly", country_name: "Libya" },
    { country_code: "ma", country_name: "Morocco" },
    { country_code: "mc", country_name: "Monaco" },
    { country_code: "mf", country_name: "Saint Martin" },
    { country_code: "mg", country_name: "Madagascar" },
    { country_code: "mk", country_name: "North Macedonia" },
    { country_code: "ml", country_name: "Mali" },
    { country_code: "mm", country_name: "Myanmar" },
    { country_code: "mq", country_name: "Martinique" },
    { country_code: "mw", country_name: "Malawi" },
    { country_code: "mx", country_name: "Mexico" },
    { country_code: "my", country_name: "Malaysia" },
    { country_code: "na", country_name: "Namibia" },
    { country_code: "ne", country_name: "Niger" },
    { country_code: "nf", country_name: "Norfolk Island" },
    { country_code: "ng", country_name: "Nigeria" },
    { country_code: "ni", country_name: "Nicaragua" },
    { country_code: "nl", country_name: "Netherlands" },
    { country_code: "no", country_name: "Norway" },
    { country_code: "np", country_name: "Nepal" },
    { country_code: "nz", country_name: "New Zealand" },
    { country_code: "pe", country_name: "Peru" },
    { country_code: "ph", country_name: "Philippines" },
    { country_code: "pk", country_name: "Pakistan" },
    { country_code: "pl", country_name: "Poland" },
    { country_code: "pn", country_name: "Pitcairn Islands" },
    { country_code: "pr", country_name: "Puerto Rico" },
    { country_code: "ps", country_name: "Palestine" },
    { country_code: "pt", country_name: "Portugal" },
    { country_code: "qa", country_name: "Qatar" },
    { country_code: "re", country_name: "Réunion" },
    { country_code: "ro", country_name: "Romania" },
    { country_code: "ru", country_name: "Russia" },
    { country_code: "rw", country_name: "Rwanda" },
    { country_code: "sa", country_name: "Saudi Arabia" },
    { country_code: "sd", country_name: "Sudan" },
    { country_code: "se", country_name: "Sweden" },
    { country_code: "sg", country_name: "Singapore" },
    { country_code: "si", country_name: "Slovenia" },
    { country_code: "sj", country_name: "Svalbard and Jan Mayen" },
    { country_code: "sk", country_name: "Slovakia" },
    { country_code: "sl", country_name: "Sierra Leone" },
    { country_code: "sn", country_name: "Senegal" },
    { country_code: "so", country_name: "Somalia" },
    { country_code: "st", country_name: "São Tomé and Príncipe" },
    { country_code: "sx", country_name: "Sint Maarten" },
    { country_code: "tc", country_name: "Turks and Caicos Islands" },
    { country_code: "th", country_name: "Thailand" },
    { country_code: "tn", country_name: "Tunisia" },
    { country_code: "tr", country_name: "Turkey" },
    { country_code: "tv", country_name: "Tuvalu" },
    { country_code: "ua", country_name: "Ukraine" },
    { country_code: "ug", country_name: "Uganda" },
    { country_code: "um", country_name: "United States Minor Outlying Islands" },
    { country_code: "un", country_name: "United Nations" },
    { country_code: "us", country_name: "United States" },
    { country_code: "uy", country_name: "Uruguay" },
    { country_code: "uz", country_name: "Uzbekistan" },
    { country_code: "va", country_name: "Vatican City" },
    { country_code: "ve", country_name: "Venezuela" },
    { country_code: "vn", country_name: "Vietnam" },
    { country_code: "xk", country_name: "Kosovo" },
    { country_code: "ye", country_name: "Yemen" },
    { country_code: "za", country_name: "South Africa" },
    { country_code: "zw", country_name: "Zimbabwe" }
];

const NAMES = [
  "John D.", "Emma R.", "Liam S.", "Olivia T.", "Noah B.",
  "Sophia K.", "James C.", "Mohammad H.", "Quevin C.", "Riley M.",
  "Berkan A.", "Adrian S.", "Dominik B.", "Isabella M.", "Leo F.",
  "Mila W.", "Lucas J.", "Layla P.", "Aiden M.", "Chloe D.",
  "Mateo G.", "Aria V.", "Daniel H.", "Zoe L.", "Sebastian T.",
  "Ella N.", "Ethan Z.", "Avery B.", "Jackson Y.", "Scarlett C.",
  "Julian E.", "Luna S.", "Levi K.", "Nora J.", "Gabriel Q.",
  "Emily A.", "Owen V.", "Hazel O.", "Benjamin W.", "Ellie X.",
  "Grayson T.", "Maya D.", "Henry P.", "Victoria B.", "Wyatt R.",
  "Camila F.", "Jack I.", "Penelope H.", "Isaac M.", "Abigail C."
];

const MEMBERSHIP_TYPES = ["Champion", "Hero", "The Real World"];
const maxPopupCount = 3;
const popupDuration = 10;
const maxFakePopups = 30;

let queue = [];
let fakePopupCount = 0;

const usedNames = new Set();
const usedCountries = new Set();
const usedProducts = new Set();

const usedCombinations = new Set();

function addPurchasePopup(data, time) {
  const flag = data.countryCode ? getFlag(data.countryCode, data.countryName) : undefined;
  const div = document.createElement("div");
  div.innerHTML = `<div class='pu_purchase-popup ${getColor(data.product)}'>
    <div class='pu_logo-wrap'>
      <img src="/jtrw_logo.png" loading="lazy" alt="The Real World Logo">
    </div>
    <div class="pu_content">
      <div class="pu_text-wrap pu_large">
        <p>Welcome to The Real World</p>
      </div>
      <div class="pu_text-wrap pu_small">
        <p>${data.name} ${data.countryName ? 'from ' + data.countryName : ''}</p>
        ${flag ? `<img class="pu_flag" src="${flag}" alt="${data.countryName} Flag">` : ''}
      </div>
      <div class="pu_text-wrap">
        <p>Purchased TRW </p>
        <img class='pu_member-icon' src="${getMemberIcon(data.product)}" alt="${data.product} Icon">
        ${data.product && data.product !== 'The Real World' ? `<p><span class="pu_product-name">${data.product}</span></p>` : ''}
        <p>Membership!</p>
      </div>
    </div>
  </div>`;
  const screenW = document.documentElement.clientWidth;
  const position = screenW < 767 ? 'top-left' : 'bottom-left';
  alertify.set('notifier', 'position', position);
  if (!time) time = 0;
  if (queue.length >= maxPopupCount) queue[0].dismiss();
  const message = alertify.message(div, time);
  queue.push(message);
  message.ondismiss = () => {
    queue = queue.filter(item => item !== message);
  };
}

function getFlag(countryCode, countryName) {
  const c = countries.find(c =>
    c.country_name.toLowerCase() === countryName.toLowerCase() ||
    c.country_code.toLowerCase() === countryCode.toLowerCase()
  );
  return c ? `/flags/${c.country_code}.png` : undefined;
}

function getMemberIcon(membership) {
  switch (membership.toLowerCase()) {
    case 'champion': return '/member-icons/champion_icon.svg';
    case 'hero': return '/member-icons/hero_icon.svg';
    case 'the real world': return '/member-icons/member_icon.svg';
    default: return '';
  }
}

function getColor(membership) {
  switch (membership.toLowerCase()) {
    case 'champion': return 'gold';
    case 'hero': return 'purple';
    case 'the real world': return 'blue';
    default: return '';
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function handleScroll() {
  document.querySelectorAll('.fade-in').forEach(div => {
    if (isInViewport(div)) div.classList.add('visible');
  });
}

window.addEventListener('scroll', handleScroll);

function generateRandomPurchase() {
  let attempt = 0;
  while (attempt++ < 100) {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    const product = MEMBERSHIP_TYPES[Math.floor(Math.random() * MEMBERSHIP_TYPES.length)];
    const comboKey = `${name}_${country.country_code}_${product}`;

    if (
      !usedCombinations.has(comboKey) &&
      !usedNames.has(name) &&
      !usedCountries.has(country.country_code) &&
      !usedProducts.has(product)
    ) {
      usedCombinations.add(comboKey);
      usedNames.add(name);
      usedCountries.add(country.country_code);
      usedProducts.add(product);

      return {
        countryCode: country.country_code,
        countryName: country.country_name,
        name,
        product
      };
    }
  }

  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const country = countries[Math.floor(Math.random() * countries.length)];
  const product = MEMBERSHIP_TYPES[Math.floor(Math.random() * MEMBERSHIP_TYPES.length)];
  return {
    countryCode: country.country_code,
    countryName: country.country_name,
    name,
    product
  };
}

function startRandomPopups() {
  const minDelay = 5000;
  const maxDelay = 60000;

  function scheduleNextPopup() {
    if (fakePopupCount >= maxFakePopups) return;

    const numberOfPopups = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < numberOfPopups; i++) {
      setTimeout(() => {
        if (fakePopupCount >= maxFakePopups) return;
        const fakeData = generateRandomPurchase();
        addPurchasePopup(fakeData, popupDuration);
        fakePopupCount++;
      }, i * 1000 + Math.random() * 1000);
    }

    const nextDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    setTimeout(scheduleNextPopup, nextDelay);
  }

  setTimeout(scheduleNextPopup, 5000);
}

startRandomPopups();
