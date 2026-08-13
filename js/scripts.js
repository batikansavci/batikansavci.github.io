const gameData = {
  fruit: {
    title: "Puzzle of Fruits: Cute Match", category: { tr: "ÜÇLÜ EŞLEŞTİRME", en: "TRIPLE MATCH" },
    description: { tr: "Lezzetli meyve taşlarının renkli dünyasında üç aynı meyveyi eşleştirerek tahtayı temizleyin. Kolay öğrenilen, odaklanmayı destekleyen ve her an oynanabilen tatlı bir bulmaca molası.", en: "Clear the board by matching three identical fruits in a colorful world of delicious tiles. An easy-to-learn, focus-friendly puzzle break you can enjoy anytime." },
    features: { tr: ["Her yaşa uygun rahat oynanış", "Renkli ve temiz arayüz", "Çevrimdışı oynanabilir"], en: ["Relaxing play for every age", "Colorful, clean interface", "Playable offline"] },
    icon: "assets/img/games/puzzle-of-fruits/icon.webp", folder: "puzzle-of-fruits", url: "https://play.google.com/store/apps/details?id=com.RBGames.PuzzleofFruitsCuteMatch"
  },
  mahjong: {
    title: "Mahjong Triple Match Puzzle", category: { tr: "MAHJONG BULMACASI", en: "MAHJONG PUZZLE" },
    description: { tr: "Klasik mahjong taşlarını modern üçlü eşleştirmeyle buluşturan sakin bir deneyim. Aynı üç taşı bulun, tahtayı temizleyin ve ilerledikçe hafızanızı, dikkatinizi ve stratejinizi geliştirin.", en: "A calming experience that blends classic mahjong tiles with modern triple matching. Find three identical tiles, clear the board, and sharpen memory, focus, and strategy as you progress." },
    features: { tr: ["Modern üçlü eşleştirme", "Sakin ve temiz görseller", "İnternet bağlantısı gerektirmez"], en: ["Modern triple-match play", "Calm, clean visuals", "No internet connection required"] },
    icon: "assets/img/games/mahjong-triple-match/icon.webp", folder: "mahjong-triple-match", url: "https://play.google.com/store/apps/details?id=com.RBGames.MahjongTripleMatchPuzzle"
  },
  vehicle: {
    title: "Vehicle Triple Match Puzzle", category: { tr: "ARAÇ BULMACASI", en: "VEHICLE PUZZLE" },
    description: { tr: "Arabalar, kamyonlar ve otobüslerle dolu sevimli bir dünyada aynı araçları üçlü eşleştirin. Basit kurallar, akıcı animasyonlar ve gittikçe gelişen tatmin edici bir ilerleme.", en: "Match identical cars, trucks, and buses in a charming world of vehicles. Simple rules, smooth animations, and steadily rewarding progression." },
    features: { tr: ["Sevimli araç teması", "Hafıza ve dikkati destekleyen bölümler", "Her yerde çevrimdışı oyun"], en: ["Charming vehicle theme", "Levels that support memory and focus", "Offline play anywhere"] },
    icon: "assets/img/games/vehicle-triple-match/icon.webp", folder: "vehicle-triple-match", url: "https://play.google.com/store/apps/details?id=com.RBGames.VehicleTripleMatchPuzzle"
  },
  animal: {
    title: "Cute Animal Match Puzzle", category: { tr: "SEVİMLİ EŞLEŞTİRME", en: "CUTE MATCHING" },
    description: { tr: "Sevimli hayvan taşlarıyla dolu huzurlu bölümlerde üç aynı taşı eşleştirin. Stres yaratmayan mekaniği ve neşeli atmosferiyle çocuklar dahil herkes için keyifli.", en: "Match three identical tiles across peaceful levels filled with adorable animals. Stress-free mechanics and a cheerful atmosphere make it enjoyable for everyone, including children." },
    features: { tr: ["Her yaş için uygun", "Stres yaratmayan ilerleme", "Basit ve sezgisel kontroller"], en: ["Suitable for every age", "Stress-free progression", "Simple, intuitive controls"] },
    icon: "assets/img/games/cute-animal-match/icon.webp", folder: "cute-animal-match", url: "https://play.google.com/store/apps/details?id=com.RBGames.CuteAnimalMatchPuzzle"
  },
  jungle: {
    title: "Block Puzzle Jungle: Crush", category: { tr: "BLOK BULMACASI", en: "BLOCK PUZZLE" },
    description: { tr: "Blokları tahtaya yerleştirin, satır ve sütunları temizleyin, güçlü kombolarla yüksek skorlara ulaşın. Süre baskısı olmadan, yemyeşil bir dünyada sonsuz bulmaca keyfi.", en: "Place blocks on the board, clear rows and columns, and build powerful combos for high scores. Endless puzzle fun in a lush world—with no time pressure." },
    features: { tr: ["Stratejik kombo sistemi", "Süre sınırı olmadan sonsuz oyun", "Akıcı ve hafif performans"], en: ["Strategic combo system", "Endless play without time limits", "Smooth, lightweight performance"] },
    icon: "assets/img/games/block-puzzle-jungle/icon.webp", folder: "block-puzzle-jungle", url: "https://play.google.com/store/apps/details?id=com.RBGames.BlockPuzzleJungleCrush"
  }
};

let currentLanguage = localStorage.getItem("bcs-language") || "tr";
const header = document.querySelector(".site-header");
const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".menu-toggle");
const dialog = document.getElementById("game-dialog");

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  localStorage.setItem("bcs-language", language);
  document.querySelectorAll("[data-tr][data-en]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function openGame(key) {
  const game = gameData[key];
  if (!game) return;
  document.getElementById("dialog-icon").src = game.icon;
  document.getElementById("dialog-icon").alt = `${game.title} icon`;
  document.getElementById("dialog-category").textContent = game.category[currentLanguage];
  document.getElementById("dialog-title").textContent = game.title;
  document.getElementById("dialog-description").textContent = game.description[currentLanguage];
  document.getElementById("dialog-features").innerHTML = game.features[currentLanguage].map((feature) => `<li>${feature}</li>`).join("");
  document.getElementById("dialog-link").href = game.url;
  document.getElementById("dialog-gallery").innerHTML = [1, 2, 3].map((number) => `<img src="assets/img/games/${game.folder}/screenshot-${number}.webp" alt="${game.title} screenshot ${number}">`).join("");
  applyLanguage(currentLanguage);
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

applyLanguage(currentLanguage);
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 24), { passive: true });
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
document.querySelectorAll(".game-detail").forEach((button) => button.addEventListener("click", () => openGame(button.dataset.game)));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
