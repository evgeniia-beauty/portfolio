const browsLaminationImage = new URL('../assets/before-after/26791100-3F72-4AC8-8FF3-74EEFE4FEB41.PNG', import.meta.url)
  .href
const lashExtensionImage = new URL('../assets/before-after/2F13C963-EC0A-4859-B699-9405C73FC8A0.PNG', import.meta.url)
  .href
const lashLiftImage = new URL('../assets/before-after/642FC066-1992-4F58-BBB0-833A2ED0CE30.PNG', import.meta.url).href
const browCorrectionImage = new URL('../assets/before-after/76FC6AA9-0AC2-4676-AFA4-32BD876B5EFF.PNG', import.meta.url)
  .href
const browStylingImage = new URL('../assets/before-after/C84D9820-4F24-4E8B-ABD8-FBBF4A645E73.PNG', import.meta.url)
  .href
const complexImage = new URL('../assets/before-after/FC1DFAC3-217D-4651-BBC7-3BAF3A0B6A0F.PNG', import.meta.url).href

const resultImage1 = new URL('../assets/results/IMG_4234.jpg', import.meta.url).href
const resultImage2 = new URL('../assets/results/IMG_4232.jpg', import.meta.url).href
const resultImage3 = new URL('../assets/results/IMG_4812.PNG', import.meta.url).href
const resultImage4 = new URL('../assets/results/IMG_4815.PNG', import.meta.url).href
const resultImage5 = new URL('../assets/results/IMG_4828.JPG', import.meta.url).href
const resultImage6 = new URL('../assets/results/IMG_4832.jpg', import.meta.url).href

export interface PortfolioItem {
  id: string
  title: string
  image: string
  imageAlt: string
}

export interface BeforeAfterItem {
  id: string
  title: string
  image: string
  imageAlt: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'result-4234',
    title: 'Ламинирование ресниц и бровей + Botox + Питание',
    image: resultImage1,
    imageAlt: 'Портрет девушки после ламинирования ресниц и бровей и ухода с ботоксом',
  },
  {
    id: 'result-4232',
    title: 'Комплекс: Ламинирование ресниц и бровей',
    image: resultImage2,
    imageAlt: 'Портрет девушки после ламинирования ресниц и бровей',
  },
  {
    id: 'result-4812',
    title: 'Архитектура и окрашивание бровей',
    image: resultImage3,
    imageAlt: 'Брови девушки после архитектуры и окрашивания',
  },
  {
    id: 'result-4815',
    title: 'Ламинирование бровей + Botox',
    image: resultImage4,
    imageAlt: 'Брови девушки после ламинирования и ухода с ботоксом',
  },
  {
    id: 'result-4828',
    title: 'Окрашивание и коррекция бровей',
    image: resultImage5,
    imageAlt: 'Брови девушки после окрашивания и коррекции',
  },
  {
    id: 'result-4832',
    title: 'Комплекс: Брови + Ламинирование ресниц',
    image: resultImage6,
    imageAlt: 'Брови и ресницы девушки после ламинирования ресниц и оформления бровей',
  },
]

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 'comparison-26791100',
    title: 'Окрашивание + Botox',
    image: browsLaminationImage,
    imageAlt: 'Брови до и после окрашивания и ухода с ботоксом',
  },
  {
    id: 'comparison-2f13c963',
    title: 'Коррекция + Окрашивание',
    image: lashExtensionImage,
    imageAlt: 'Брови до и после коррекции и окрашивания',
  },
  {
    id: 'comparison-642fc066',
    title: 'Ламинирование ресниц и бровей + Окрашивание',
    image: lashLiftImage,
    imageAlt: 'Брови и ресницы до и после ламинирования и окрашивания',
  },
  {
    id: 'comparison-76fc6aa9',
    title: 'Окрашивание + Коррекция',
    image: browCorrectionImage,
    imageAlt: 'Брови до и после окрашивания и коррекции',
  },
  {
    id: 'comparison-c84d9820',
    title: 'Архитектура + Окрашивание',
    image: browStylingImage,
    imageAlt: 'Брови до и после архитектуры и окрашивания',
  },
  {
    id: 'comparison-fc1dfac3',
    title: 'Коррекция + Окрашивание',
    image: complexImage,
    imageAlt: 'Брови до и после коррекции и окрашивания',
  },
]
