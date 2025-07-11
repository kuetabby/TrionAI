import { Poppins, Red_Hat_Display } from "next/font/google";

export const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const redHat = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
