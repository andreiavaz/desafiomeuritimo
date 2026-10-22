import heroTransformationImg from './assets/images/mulher_emagrecendo_leveza_1792677474441.jpg';
import mockupMateriaisImg from './assets/images/mockup_materiais_ritmo_1792676982432.jpg';
import andreiaLiveImg from './assets/images/andreia_vaz_foto2.png';
import officialLogoImg from './assets/images/logo_desafio_meu_ritmo_transparent.png';

export const CHECKOUT_URL = "https://payfast.greenn.com.br/9r6pcty";

export const PRODUCT_INFO = {
  name: "DESAFIO MEU RITMO",
  subtitle: "7 Dias Guiados com a Nutri Andréia Vaz",
  startDate: "09 de novembro (segunda-feira)",
  startDateShort: "09 de novembro",
  closingDate: "08 de novembro (domingo) às 20h",
  duration: "7 dias",
  format: "Online · Ao Vivo todos os dias",
  price: "37",
  priceFull: "R$ 37,00",
  professional: "Nutricionista Andréia Vaz",
  registry: "CRN-8 3188",
  experienceYears: "20 anos",
  groupsConducted: "+100 grupos",
} as const;

export const IMAGES = {
  heroTransformation: heroTransformationImg || "/images/mulher_emagrecendo_leveza_1792677474441.jpg",
  mockupMateriais: mockupMateriaisImg || "/images/mockup_materiais_ritmo_1792676982432.jpg",
  andreiaLive: andreiaLiveImg || "/images/andreia_vaz_foto2.png",
  andreiaFoto2Url: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/design-sem-nome.png",
  officialLogo: officialLogoImg || "/images/logo_desafio_meu_ritmo_transparent.png",
  officialLogoUrl: "https://andreiavaz846109688.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-19-at-09.23.53.jpeg",
} as const;
