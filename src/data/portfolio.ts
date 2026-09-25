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

export type PortfolioCategory = 'all' | 'lash-lam' | 'brows' | 'lash-ext' | 'complex'

export interface PortfolioItem {
  title: string
  category: Exclude<PortfolioCategory, 'all'>
  image: string
  imageAlt: string
}

export interface BeforeAfterItem {
  title: string
  image: string
  imageAlt: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Ламинирование рисниц и бровей + Botox + Питание',
    category: 'lash-lam',
    image: resultImage1,
    imageAlt:
      'Macro beauty editorial shot of female eyes showing glossy laminated eyelashes with soft natural lift and dark deep pigment, skin with natural dewy finish',
  },
  {
    title: 'Комплекс: Ламинирование ресниц и бровей',
    category: 'brows',
    image: resultImage2,
    imageAlt:
      'High precision macro photo of clean feathered natural eyebrows after soft waxing and gentle blonde hair lightening with clean brow arch on fair female model',
  },
  {
    title: 'Типа архитектура и окрашивание бровей',
    category: 'lash-ext',
    image: resultImage3,
    imageAlt:
      'Subtle natural eyelash extension 1.5D volume in warm mocha brown color, airy feather light lashes with perfect isolation and soft eyelid line',
  },
  {
    title: 'Ламиривание бровей + Botox',
    category: 'brows',
    image: resultImage4,
    imageAlt:
      'Close up view of fluffy laminated brows with beautiful hair-by-hair texture, natural arch, glowing healthy sheen and soft powder shading underneath',
  },
  {
    title: 'Окрашивание и коррекция бровей',
    category: 'lash-lam',
    image: resultImage5,
    imageAlt:
      'Ultra high-definition macro photograph of dark glossy curled eyelashes after keratin lash lifting treatment, healthy sheen, no clump mascara look',
  },
  {
    title: 'Комплекс: Брови + Ламинирование ресниц',
    category: 'complex',
    image: resultImage6,
    imageAlt:
      'Harmonious face beauty portrait of elegant woman with both perfectly styled feathery brows and glossy curved eyelashes, balanced warm aesthetic',
  },
]

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    title: 'Окрашивание + Botox',
    image: browsLaminationImage,
    imageAlt: 'Брови до и после ламинирования и питания',
  },
  {
    title: 'Корекция + Окрашивание',
    image: lashExtensionImage,
    imageAlt: 'Ресницы до и после наращивания в объеме 1.5D',
  },
  {
    title: 'Ламинирование ресниц и бровей + Окрашивание',
    image: lashLiftImage,
    imageAlt: 'Ресницы до и после ламинирования и Botox',
  },
  {
    title: 'Окрашивание + Коррекция',
    image: browCorrectionImage,
    imageAlt: 'Брови до и после осветления и коррекции формы',
  },
  {
    title: 'Архитектура + Окрашивание',
    image: browStylingImage,
    imageAlt: 'Брови до и после долговременной укладки',
  },
  {
    title: 'Коррекция + Окрашивание',
    image: complexImage,
    imageAlt: 'Брови и ресницы до и после комплексного оформления',
  },
]
