// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Facts come from the App Store listing (iTunes lookup, id 6575368044), the app's
// own screens and the owner's Privacy Policy / Terms of Use.

export const site = {
  brand: "LG TV Remote",
  email: "thijsvries1app@hotmail.com",
  year: new Date().getFullYear(),
  operator: "Thijs Vries",
  address: "Lijnbaansgracht 255, 1017 RK Amsterdam, Netherlands",
  // wording follows sections 6–7 of the owner's Terms of Use
  disclaimer:
    "The app is independently developed and operated by Thijs Vries. LG, related logos, product names and other third-party marks remain the property of their respective owners.",
};

export const app = {
  id: "6575368044",
  url: "https://apps.apple.com/app/id6575368044",
  name: "LG Smart TV Remote Control",
  minIOS: "15.0",
  category: "Utilities",
  rating: "4.7",
  ratings: "207",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export const screens = {
  remote: "/images/screen-remote.webp",
  trackpad: "/images/screen-trackpad.webp",
  numbers: "/images/screen-numbers.webp",
  quick: "/images/screen-quick.webp",
  access: "/images/screen-access.webp",
  connect: "/images/screen-connect.webp",
  connected: "/images/screen-connected.webp",
  voice: "/images/screen-voice.webp",
  keyboard: "/images/screen-keyboard.webp",
  mirror: "/images/screen-mirror.webp",
};

// Home · "How it works": the app's own connection flow, one screen per step.
export const steps = [
  {
    title: "Allow local network",
    text: "The first time you open the app, iOS asks for Local Network access. Allow it so the app can find TVs on your Wi‑Fi.",
    screen: screens.access,
  },
  {
    title: "Pick your TV",
    text: "Keep your iPhone and LG TV on the same Wi‑Fi. Every TV the app finds shows up in Connect device.",
    screen: screens.connect,
  },
  {
    title: "Start controlling",
    text: "Tap your TV, confirm the pairing prompt on the TV screen if it appears, and the remote is ready.",
    screen: screens.connected,
  },
];

// Home · remote modes. The switcher under the remote in the app has these modes.
export const modes = [
  {
    id: "dpad",
    label: "D‑pad",
    title: "A remote you already know",
    text: "Power, Home, volume and channels sit where your thumb expects them, with a big D‑pad and OK button in the middle.",
    points: ["Volume, mute and channel keys", "Back, pointer, keyboard and voice keys", "D‑pad with OK for every menu"],
    screen: screens.remote,
  },
  {
    id: "touchpad",
    label: "Touchpad",
    title: "Swipe instead of clicking",
    text: "Switch the lower half of the remote to a touchpad: tap and drag to move through menus and apps.",
    points: ["Tap & drag navigation", "Top keys stay in place", "Switch back to the D‑pad in one tap"],
    screen: screens.trackpad,
  },
  {
    id: "numbers",
    label: "Numbers",
    title: "Type a channel number",
    text: "A number pad with OK and delete for going straight to the channel you want.",
    points: ["Keys 0–9", "OK to confirm", "Delete to correct a digit"],
    screen: screens.numbers,
  },
  {
    id: "keys",
    label: "More keys",
    title: "The keys on a second page",
    text: "Swipe the top of the remote to reach input, menu, info, settings and playback keys, plus the four color buttons.",
    points: ["Input, menu and info", "Settings and play", "Red, green, yellow and blue"],
    screen: screens.quick,
  },
];

// Home · "Beyond the buttons": the three features the app adds on top of a remote.
export const extras = [
  {
    title: "Voice search",
    text: "Tap and hold the microphone key and say what you are looking for. Speech is turned into text by Apple's speech recognition.",
    screen: screens.voice,
    ui: "/images/ui-voice.webp",
  },
  {
    title: "Send text to TV",
    text: "Typing a search on the TV with arrows is slow. Open the keyboard key, type on your iPhone and tap Send.",
    screen: screens.keyboard,
    ui: "/images/ui-keyboard.webp",
  },
  {
    title: "Screen mirroring",
    text: "Open the Mirror tab, tap Start mirroring and then Start broadcast to show your iPhone screen on the TV.",
    screen: screens.mirror,
    ui: "/images/ui-mirror.webp",
  },
];

type QA = { q: string; a: string };

// Support. Answers follow the app's screens and the owner's documents.
export const faq: { group: string; note: string; items: QA[] }[] = [
  {
    group: "Getting connected",
    note: "Pairing your iPhone with an LG TV.",
    items: [
      {
        q: "How do I connect to my TV?",
        a: "Turn on the TV and put it and your iPhone on the same Wi‑Fi network. Open the app, open Connect device and tap your TV in the list. If the TV shows a pairing prompt, accept it on the TV.",
      },
      {
        q: "The app can't find my TV",
        a: "Check that the TV is on and that both devices use the same Wi‑Fi. Make sure Local Network access is allowed for the app in iPhone Settings → Privacy & Security → Local Network, then tap refresh in Connect device or Try again.",
      },
      {
        q: "Why does the app ask for Local Network access?",
        a: "The app finds and talks to your TV over your local network. Without this permission it can't see the TV. You can change it at any time in iPhone Settings.",
      },
      {
        q: "Which TVs does it work with?",
        a: "Compatible LG Smart TVs connected to a local network. Some functions may not be available on every TV model, firmware version or network setup.",
      },
    ],
  },
  {
    group: "Using the remote",
    note: "Modes, typing and voice.",
    items: [
      {
        q: "How do I switch to the touchpad or number pad?",
        a: "Use the switcher at the bottom of the remote: D‑pad, touchpad and numbers. Swipe the top part of the remote to reach the second page of keys with the color buttons.",
      },
      {
        q: "How do I type on the TV?",
        a: "Tap the keyboard key on the remote. Send text to TV opens with your iPhone keyboard: type and tap Send.",
      },
      {
        q: "How does voice search work?",
        a: "Tap and hold the microphone key and speak. The app needs Microphone and Speech Recognition permissions; spoken input is processed by Apple's speech-recognition frameworks.",
      },
    ],
  },
  {
    group: "Screen mirroring",
    note: "Showing your iPhone on the TV.",
    items: [
      {
        q: "How do I mirror my screen?",
        a: "Open the Mirror tab, tap Start mirroring and then tap Start broadcast. Your iPhone and TV must be on the same Wi‑Fi network.",
      },
      {
        q: "Will notifications show on the TV?",
        a: "Everything on your screen, including notifications, is shown on the TV. Turn on Do Not Disturb first to prevent unexpected notifications.",
      },
    ],
  },
  {
    group: "Privacy",
    note: "Accounts and your data.",
    items: [
      {
        q: "Do I need an account?",
        a: "No. The app does not require you to create an account. The last connected TV and your preferences are stored on your iPhone.",
      },
      {
        q: "How do I ask about my data?",
        a: `Write to ${"thijsvries1app@hotmail.com"}. The Privacy Policy explains which data is processed and which rights you have.`,
      },
    ],
  },
];

export const homeFaq = [faq[0].items[0], faq[0].items[1], faq[1].items[1], faq[2].items[0], faq[3].items[0]];

// App page · details from the App Store listing (no version number).
export const specs: [string, string][] = [
  ["Name", app.name],
  ["Works with", "Compatible LG Smart TVs on the same Wi‑Fi"],
  ["Requires", `iPhone with iOS ${app.minIOS.split(".")[0]} or later`],
  ["Category", "Utilities, Productivity"],
  ["Language", "English"],
  ["Age rating", "4+"],
  ["Developer", site.operator],
];

// About · principles. Each one is stated in the owner's Privacy Policy.
export const principles = [
  { title: "No account", text: "You don't sign up or log in. Open the app, pick your TV and use it." },
  { title: "Commands stay local", text: "Remote commands and mirrored content go from your iPhone to the TV over your local network. We run no backend for them; Apple, Apphud and Singular process some data as the Privacy Policy describes." },
  { title: "Permissions you control", text: "Local Network to find the TV, Microphone and Speech Recognition for voice search. The app may also show Apple’s tracking prompt, and you can decline it." },
];

export const contactTopics = ["Connecting to my TV", "Using the remote", "Screen mirroring", "Privacy request", "Something else"];
