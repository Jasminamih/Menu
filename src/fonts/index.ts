import { Inter, Roboto, Source_Sans_Pro, Ubuntu } from "@next/font/google";

export const F_Ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const F_Roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
  display: "swap",
});

export const F_Inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const F_Source_Sans_Pro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
  display: "swap",
});
