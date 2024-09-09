const data = [
  {
    name: '쿠쿠 밥솥',
    description: '쿠쿠하세요~~쿠쿠하세요~~',
    price: 310000,
    tags: ['쿠쿠쿠쿠쿸'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/92/1725209779217/CRP-DHP0610FD.png'
    ],
    ownerId: 92,
    favoriteCount: 0
  },
  {
    name: '토스터',
    description: '토스트를 만들기 위한 토스터~',
    price: 19000,
    tags: ['토스터'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/72/1724836584916/2.jpg'
    ],
    ownerId: 72,
    favoriteCount: 0
  },
  {
    name: '상품 이름',
    description: 'stringstringstringstringstringstring',
    price: 0,
    tags: [],
    images: ['https://example.com/...'],
    ownerId: 78,
    favoriteCount: 1
  },
  {
    name: '화사한분위기의수련',
    description: '무료 이미지 꽃, 수련, water lily',
    price: 12000,
    tags: ['꽃', '수련', 'water lily'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/36/1724120702896/water-lily-8175845_1280.jpg'
    ],
    ownerId: 36,
    favoriteCount: 1
  },
  {
    name: '밝은분위기의벽지와전',
    description: '무료 이미지 전등, 벽지, 인테리어',
    price: 36000,
    tags: ['전등', '벽지', '인테리어'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/36/1724119838524/pexels-colour-creation-28649-112811.jpg'
    ],
    ownerId: 36,
    favoriteCount: 1
  },
  {
    name: '갤럭시북4',
    description: '또 다른 갤럭시를 만나보세요',
    price: 1000000,
    tags: [],
    images: [
      'https://images.samsung.com/kdp/event/sec/2024/0301_galaxy_book4_ultra/buying/slide_v7/gbu_buying_defalut_pc.jpg'
    ],
    ownerId: 29,
    favoriteCount: 1
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '맥북 프로',
    description: '애플 맥북 프로 13인치',
    price: 1500000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '맥북 프로',
    description: '애플 맥북 프로 13인치',
    price: 1500000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '맥북 프로',
    description: '애플 맥북 프로 13인치',
    price: 1500000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '맥북 프로',
    description: '애플 맥북 프로 13인치',
    price: 1500000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '맥북 프로',
    description: '애플 맥북 프로 13인치',
    price: 1500000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 1
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '맥북 프로',
    description: '애플 맥북 프로 13인치',
    price: 1500000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '맥북 프로',
    description: '애플 맥북 프로 13인치',
    price: 1500000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  },
  {
    name: '스니커즈',
    description: '편안한 스니커즈편안한 스니커즈',
    price: 100000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png'
    ],
    ownerId: 1,
    favoriteCount: 10
  },
  {
    name: '갤럭시 탭 S7',
    description: '삼성 갤럭시 탭 S7',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '보스 헤드폰',
    description: '보스 노이즈 캔슬링 헤드폰 700',
    price: 350000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png'
    ],
    ownerId: 1,
    favoriteCount: 12
  },
  {
    name: '사무용 의자',
    description: '편안한 사무용 의자',
    price: 120000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '레노버 노트북',
    description: '레노버 아이디어패드 5',
    price: 800000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991798558/321351.png'
    ],
    ownerId: 1,
    favoriteCount: 4
  },
  {
    name: '갤럭시 S21',
    description: '삼성 갤럭시 S21',
    price: 600000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991786504/31563.png'
    ],
    ownerId: 1,
    favoriteCount: 8
  },
  {
    name: '아이패드',
    description: '애플 아이패드 10.2인치',
    price: 450000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991756711/21353.png'
    ],
    ownerId: 1,
    favoriteCount: 15
  },
  {
    name: '퀸사이즈 침대',
    description: '퀸사이즈 침대 프레임',
    price: 500000,
    tags: ['가구'],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991744735/2113.png'
    ],
    ownerId: 1,
    favoriteCount: 6
  },
  {
    name: '판다인형',
    description: '귀여운 판다인형입니다',
    price: 30000,
    tags: [],
    images: [
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991725132/233.png'
    ],
    ownerId: 1,
    favoriteCount: 7
  }
];

export default data;
