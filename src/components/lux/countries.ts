// Markets we serve — flag (from flag-icons, MIT), a greeting in the local
// language and the local time zone for the live clock.
export type Country = {
  code: string;
  name: string;
  hello: string;
  meaning: string;
  lang: string;
  dir?: "rtl" | "ltr";
  tz: string;
};

export const COUNTRIES: Country[] = [
  { code: "in", name: "India", hello: "नमस्ते", meaning: "Namaste · Hello", lang: "hi", tz: "Asia/Kolkata" },
  { code: "us", name: "United States", hello: "Hello", meaning: "Hey there", lang: "en-US", tz: "America/New_York" },
  { code: "gb", name: "United Kingdom", hello: "Hello", meaning: "Good day", lang: "en-GB", tz: "Europe/London" },
  { code: "ae", name: "United Arab Emirates", hello: "مرحبا", meaning: "Marhaba · Welcome", lang: "ar", dir: "rtl", tz: "Asia/Dubai" },
  { code: "my", name: "Malaysia", hello: "Selamat datang", meaning: "Welcome", lang: "ms", tz: "Asia/Kuala_Lumpur" },
  { code: "au", name: "Australia", hello: "G'day", meaning: "Hello, mate", lang: "en-AU", tz: "Australia/Sydney" },
];

// Rotating hero greeting order (distinct words first).
export const GREETINGS = [
  { code: "us", word: "Hello", lang: "en" },
  { code: "in", word: "नमस्ते", lang: "hi" },
  { code: "ae", word: "مرحبا", lang: "ar", dir: "rtl" as const },
  { code: "my", word: "Selamat datang", lang: "ms" },
  { code: "au", word: "G'day", lang: "en-AU" },
  { code: "gb", word: "Hello there", lang: "en-GB" },
];
