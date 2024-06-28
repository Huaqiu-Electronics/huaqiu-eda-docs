import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "KiCad HuaQiu",
      description: "HuaQiu KiCad",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "KiCad EDA 华秋",
      description: "KiCad EDA 华秋",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
