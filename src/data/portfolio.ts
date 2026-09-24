export type PortfolioCategory = 'all' | 'lash-lam' | 'brows' | 'lash-ext' | 'complex'

export interface PortfolioItem {
  title: string
  category: Exclude<PortfolioCategory, 'all'>
  image: string
  imageAlt: string
}

export interface BeforeAfterItem {
  title: string
  description: string
  beforeImage: string
  beforeAlt: string
  afterImage: string
  afterAlt: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Ламинирование + Botox + Питание',
    category: 'lash-lam',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChbjDQoScrxAEC8vAVXKoej445qOegkkLkXt9QIETCLQiYK5wpB_-K1yqffOp1bvL7QTiPA_5u7p_7l-SPE3bjNyQoqdIGSyumySBV9KciWYKF9_T_TJsBZXfYMvvQBcOVe5yTb-A5Yr8RRicI3HPPDyd93SAKR3KqWc9ZDrji7U5x3-DCUyakvxNrYzGUsMfGFbEuQTPCE8z6s5ZL1H1soOATU1AUMlXgV0R2qflxIxnvq_VdFxca',
    imageAlt:
      'Macro beauty editorial shot of female eyes showing glossy laminated eyelashes with soft natural lift and dark deep pigment, skin with natural dewy finish',
  },
  {
    title: 'Осветление на 1 тон & Коррекция',
    category: 'brows',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOfr1kHp_o0veXFveC_EFdNq7onmZSFbxFulLntcegB4YjOi4mCRv6psw67KdOaN3-VKrPCwccNGpMBQMyZe4t2Uxq8YW_wniU5RdGHZamamgV-Yb84tx-KwD5WD8HGdx0VTbj2P5TpIeE7_flJKbaZ7OfYBIG929w9sPYaHSRv3NPDxdMECccrC9jLkzD-mMEtKCSuWpfrolIgs_PBCH1IJq5XhNW_ubVmvSUpyY5hP2YMIpUjly3',
    imageAlt:
      'High precision macro photo of clean feathered natural eyebrows after soft waxing and gentle blonde hair lightening with clean brow arch on fair female model',
  },
  {
    title: 'Бархатный 1.5D объем в цвете Mocha',
    category: 'lash-ext',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqf04R9QUmm7PXzyK7zN02Lb58l9O6tXljWC2JZXdHk44DnIF0sxmhEaO1h_Wk8_qGDm07wpSWwt4GMN9mdu7fv7zEMkapnuAh1yhreQMKztjG_flbrr1gS5H5c7pkhMcM8aqssdbLIda3sJqCiDkBGwMxgptq8TEsbOktNgiHNqZWY1427u0L8aZis42kZgBi9INbTFe2BuGAKt7WVf8Ucprs6NCVLotP3Jw7xIdw2Ar0uIWhme2b',
    imageAlt:
      'Subtle natural eyelash extension 1.5D volume in warm mocha brown color, airy feather light lashes with perfect isolation and soft eyelid line',
  },
  {
    title: 'Воздушная долговременная укладка',
    category: 'brows',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbEPgdowO9PepdcyIZLOTma8-uGxRbTsC7qjz9fXipplsnHDoUnOiwMTWzzUzIfqqeosfbhs3hqTIuMMzHJj_o-ufhOSmoGDhFEHWUZ0InGSinKERRt1zLw90FR6yWc49xeSl_u-u20tqMQtgM-HR6xDt2MHCW_dQwt3PnV0iMPqThBKVnMZ-Yop4mpa_XNBV8lqH0QBQ_g_ivionIbGthqA-KrOeF8nlNjFT6WqYcy_ZcpTbxhLbU',
    imageAlt:
      'Close up view of fluffy laminated brows with beautiful hair-by-hair texture, natural arch, glowing healthy sheen and soft powder shading underneath',
  },
  {
    title: 'Lash Botox & Эффект распахнутого взгляда',
    category: 'lash-lam',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9NutGCI3AHzVmtcXxLSgZtRCaDKPOv--AzriNucBjWsu8MzTBMmBbRF3CnD1PalFSjRRrsSrCgnbziWD8YeRBdWcPQRFz4Bh4wJJwRM53EQ9MBJTcMLq6ZLG9WEOkVoqXJlRqZZ_x9kcft-Hx4iR9qyqrxdnaMLzYKUil5cYQku-B_zlpeFPPdTAQw5ILB0elqsf0xBZb-tpE55duCILuuF3b9QNNok4kP4_f3zQtvUEBJ3J_mwb',
    imageAlt:
      'Ultra high-definition macro photograph of dark glossy curled eyelashes after keratin lash lifting treatment, healthy sheen, no clump mascara look',
  },
  {
    title: 'Комплекс: Брови + Ламинирование ресниц',
    category: 'complex',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVZwMLMAmXKhyeAhLlLKivJCyAlueXa-CY9vQC0fvUjfjJnfeyLdXc67s9fEH39YaCLFBkqliNGrccHIJYnnWU4818XBfNWIyyAqNCDqmhXb_Z7_5p9Urec-BnQmg0d2AhxiCXb4-XGqnTPWSZLSvO46YxlomiTc5SBsH5xlofyuE5ZQvMS_aftRcQlZ0ypcqCK909d_Ydtd4jrBSB4TrMTYCbB5XXdAFs7j-6Yk_0D0M64521rOrD',
    imageAlt:
      'Harmonious face beauty portrait of elegant woman with both perfectly styled feathery brows and glossy curved eyelashes, balanced warm aesthetic',
  },
]

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    title: 'Ламинирование и питание бровей',
    description: 'Мягкая податливая текстура, послушные волоски и естественный объем.',
    beforeImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwX8GePNRc1JoqR0h4BvG3FfvgXonrekst12E3qTXaqWL0cOR-21teUTxeoyTyFQy0r9v6UbYGGz0KpbMbdWGNP4Nd6CYn_8W2poRihlxZtYNQ9EutEhThERFHbkjECyYK3KD2zxZqvwCsYcNZYyvxscKhDZSQgMZF984fvg_93f_EmJSRkFeVUL7jRXy1UmtW8KlIwUFI8ZMU6hb6qjdK8diETk-vmaN3jQAIuqom_lhSD0WbyUiw',
    beforeAlt: 'До: брови до ламинирования',
    afterImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvvUn3bbHBxCtxrlMgK5M1opUrZxQ-0eAQgS3dcIzX53cwr-7vf60Xd1tztpJG9M9-DEppuKMsVoQlTKpso54_kp9pDg2TBDUW9ujgkYDd9RJi62AWEVkeniqrR_2MIc4KTdBoN-ngdGQ5iHWrdjRyuY6QQdiIldLG0Z8ZKiyEHo-GMm4DxB7SVIpPsotIwu7liumR-GHLRmEuYqTaJ8lAod9_vX021mNK7f_n0WQHHsSFSX7GSGhV',
    afterAlt: 'После: ламинирование и протеиновое питание бровей',
  },
  {
    title: 'Осветление на 1 тон & Коррекция',
    description: 'Смягчение жесткого контура для гармонии с теплым оттенком волос.',
    beforeImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbEPgdowO9PepdcyIZLOTma8-uGxRbTsC7qjz9fXipplsnHDoUnOiwMTWzzUzIfqqeosfbhs3hqTIuMMzHJj_o-ufhOSmoGDhFEHWUZ0InGSinKERRt1zLw90FR6yWc49xeSl_u-u20tqMQtgM-HR6xDt2MHCW_dQwt3PnV0iMPqThBKVnMZ-Yop4mpa_XNBV8lqH0QBQ_g_ivionIbGthqA-KrOeF8nlNjFT6WqYcy_ZcpTbxhLbU',
    beforeAlt: 'До: жесткий темный волосок бровей',
    afterImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOfr1kHp_o0veXFveC_EFdNq7onmZSFbxFulLntcegB4YjOi4mCRv6psw67KdOaN3-VKrPCwccNGpMBQMyZe4t2Uxq8YW_wniU5RdGHZamamgV-Yb84tx-KwD5WD8HGdx0VTbj2P5TpIeE7_flJKbaZ7OfYBIG929w9sPYaHSRv3NPDxdMECccrC9jLkzD-mMEtKCSuWpfrolIgs_PBCH1IJq5XhNW_ubVmvSUpyY5hP2YMIpUjly3',
    afterAlt: 'После: осветление и коррекция формы',
  },
  {
    title: 'Ламинирование и лифтинг ресниц',
    description: 'Плавный открытый изгиб от корня с глубоким насыщением пигментом.',
    beforeImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqf04R9QUmm7PXzyK7zN02Lb58l9O6tXljWC2JZXdHk44DnIF0sxmhEaO1h_Wk8_qGDm07wpSWwt4GMN9mdu7fv7zEMkapnuAh1yhreQMKztjG_flbrr1gS5H5c7pkhMcM8aqssdbLIda3sJqCiDkBGwMxgptq8TEsbOktNgiHNqZWY1427u0L8aZis42kZgBi9INbTFe2BuGAKt7WVf8Ucprs6NCVLotP3Jw7xIdw2Ar0uIWhme2b',
    beforeAlt: 'До: прямые ресницы без изгиба',
    afterImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChbjDQoScrxAEC8vAVXKoej445qOegkkLkXt9QIETCLQiYK5wpB_-K1yqffOp1bvL7QTiPA_5u7p_7l-SPE3bjNyQoqdIGSyumySBV9KciWYKF9_T_TJsBZXfYMvvQBcOVe5yTb-A5Yr8RRicI3HPPDyd93SAKR3KqWc9ZDrji7U5x3-DCUyakvxNrYzGUsMfGFbEuQTPCE8z6s5ZL1H1soOATU1AUMlXgV0R2qflxIxnvq_VdFxca',
    afterAlt: 'После: ламинирование и лифтинг ресниц',
  },
]
