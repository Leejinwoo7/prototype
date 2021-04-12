/*
'ISTJ', 0
'ISTP', 1
'ISFJ', 2
'ISFP', 3
'INTJ', 4
'INTP', 5
'INFJ', 6
'INFP', 7
'ESTJ', 8
'ESTP', 9
'ESFJ', 10
'ESFP', 11
'ENTJ', 12
'ENTP', 13
'ENFJ', 14
'ENFP', 15
        */


const qnaList = [
  {
    q: '1. 외계인이 나타나 다음 중 하나를<br> 죽을 때까지 해야한다고 협박을 합니다. <br> 둘 중 하나를 무조건 해야한다면<br> 차라리 나은 것은?',
    a: [
      { answer: 'A.죽을 때 까지 재밌는 이야기 들려주기', type: ['ESTJ', 'ESTP','ESFJ', 'ESFP','ENTJ','ENTP','ENFJ','ENFP'] },
      { answer: 'B.죽을 때 까지 외계인의 말 들어주기', type: ['ISTJ', 'ISTP', 'ISFJ', 'ISFP', 'INTJ', 'INTP', 'INFJ', 'INFP'] } ]
  },
  {
    q: '2. 외계인이 나타나 신체의 한 부위를 <br>가져가겠다고 협박을 합니다.<br> 둘 중 어느 쪽을 내어줄까요? ',
    a: [
      { answer: 'A.입 (말할 수 없게 된다)', type: ['ISTJ', 'ISTP', 'ISFJ', 'ISFP', 'INTJ', 'INTP', 'INFJ', 'INFP'] },
      { answer: 'B.귀 (들을 수 없게 된다)', type: ['ESTJ', 'ESTP','ESFJ', 'ESFP','ENTJ','ENTP','ENFJ','ENFP'] },]
  },
  {
    q: '3. ‘맨날 월요일 바이러스’가 퍼진 전세계에 <br>딱 한 집단만 구할 수 있다고 했을 때, 당신은?',
    a: [
      { answer: 'A. 사랑하는 가족과 친구 10명', type: ['ISTJ', 'ISTP', 'ISFJ', 'ISFP', 'INTJ', 'INTP', 'INFJ', 'INFP'] },
      { answer: 'B. 가족과 친구를 제외한 전 세계 사람들', type: ['ESTJ', 'ESTP','ESFJ', 'ESFP','ENTJ','ENTP','ENFJ','ENFP'] }
    ]
  },

  {
    q: '4. 1억원 어치 주식투자를 하려는 당신,<br> 어느 기업에 투자할 것인가요?',
    a: [
      { answer: 'A. 현재까지의 실적이 우수한 안정적인 기업  ', type: ['ISTJ', 'ISTP', 'ISFJ', 'ISFP','ESTJ', 'ESTP', 'ESFJ', 'ESFP'] },
      { answer: 'B. 실적은 다소 부족하지만, <br>미래의 유망주로 각광을 받는 기업 ', type: ['INTJ', 'INTP', 'INFJ', 'INFP', 'ENTJ', 'ENTP', 'ENFJ', 'ENFP' ] }
    ]
  },

  {
    q: '5. 노트북을 사려는 당신,<br>우선으로 고려하는 것은?',
    a: [
      { answer: 'A. “나에게 필요한 성능을 갖췄나? ”', type: ['ISTJ', 'ISTP', 'ISFJ', 'ISFP','ESTJ', 'ESTP', 'ESFJ', 'ESFP' ] },
      { answer: 'B. “내가 원하는 디자인인가?”', type: ['INTJ', 'INTP', 'INFJ', 'INFP', 'ENTJ', 'ENTP', 'ENFJ', 'ENFP'] }
    ]
  },

  {
    q: '6. 친구에게 제일 좋아하는 영화를<br> 소개할 때 어떻게 말할까?',
    a: [
      { answer: 'A. “이병헌 주연의 느와르 영화야. 인기 많아” <br>영화를 최대한 객관적으로 전달한다.', type: ['ISTJ', 'ISTP', 'ISFJ', 'ISFP','ESTJ', 'ESTP', 'ESFJ', 'ESFP'] },
      { answer: 'B. “정말 재밌어, 최고야! 이병헌 연기 너무 잘해!” <br>내가 감동을 느낀 순간을 전달한다.', type: ['INTJ', 'INTP', 'INFJ', 'INFP', 'ENTJ', 'ENTP', 'ENFJ', 'ENFP' ] },
    ]
  },

  {
    q: '7. 직장 상사가 내가 저지른 실수 때문에<br> 크게 화나셨다. 어떻게 풀어드리지?',
    a: [
      { answer: 'A. 커피와 쿠키를 드린다.', type: ['ESFJ', 'ESFP', 'ENFJ', 'ENFP', 'ISFJ', 'ISFP', 'INFJ', 'INFP'] },
      { answer: 'B. 더 나은 업무로 보답한다.', type: ['ISTJ', 'ISTP', 'ESTJ', 'ESTP', 'INTJ', 'INTP', 'ENTJ', 'ENTP' ] },
    ]
  },

  {
    q: '8. 주변인에게 무리한 부탁을 해야한다.<br> 더 싫은 상황은?',
    a: [
      { answer: 'A. 부탁을 거절 당하는 것', type: ['ISTJ', 'ISTP', 'ESTJ', 'ESTP', 'INTJ', 'INTP', 'ENTJ', 'ENTP'  ] },
      { answer: 'B. 그 사람과 사이가 껄끄러워지는 것', type: ['ESFJ', 'ESFP', 'ENFJ', 'ENFP', 'ISFJ', 'ISFP', 'INFJ', 'INFP'] },
    ]
  },

  {
    q: '9. 친구들과 게임을 하는 나. <br>무슨 생각으로 게임에 임할까 ?',
    a: [
      { answer: 'A. 꼭 이겼으면 좋겠다.', type: ['ISTJ', 'ISTP', 'ESTJ', 'ESTP', 'INTJ', 'INTP', 'ENTJ', 'ENTP' ] },
      { answer: 'B. 지면 어때, 즐거우면 그만.', type: ['ESFJ', 'ESFP', 'ENFJ', 'ENFP', 'ISFJ', 'ISFP', 'INFJ', 'INFP'] },
    ]
  },

  {
    q: '10. 도시에 좀비 바이러스가 퍼졌다. <br>이를 처음 안 나는 어떻게 행동할까?',
    a: [
      { answer: 'A. 도시를 빠져나갈 작전과 계획을 세워 준비한다.', type: ['ISTJ', 'ESTJ', 'INTJ', 'ENTJ', 'ESFJ', 'ENFJ', 'ISFJ', 'INFJ'] },
      { answer: 'B. 우선 사람들이 있는 안전한 곳을 찾아 이동한다.', type: ['ISTP', 'ESTP', 'INTP', 'ENTP', 'ESFP', 'ENFP', 'ISFP', 'INFP'] },
    ]
  },

  {
    q: '11. 요리대회에 나간 나,<br>심사위원에게 요리를 어떻게 소개할까?',
    a: [
      { answer: 'A. “그리스에서 수입해온 올리브를 갈아서 ...”<br>  요리를 어떻게 만들었는지 소개한다.', type: ['ISTP', 'ESTP', 'INTP', 'ENTP', 'ESFP', 'ENFP', 'ISFP', 'INFP'] },
      { answer: 'B. “손님들이 부드럽게 음식을 즐길 있게 ...”<br> 강조하고 싶었던 요리의 포인트를 소개한다.', type: ['ISTJ', 'ESTJ', 'INTJ', 'ENTJ', 'ESFJ', 'ENFJ', 'ISFJ', 'INFJ'] },
    ]
  },

  {
    q: '12. 전설의 마법의 약 레시피를 얻은 당신, <br>레시피대로 했는데 실패했다! 왜지?!',
    a: [
      { answer: 'A. 레시피가 잘못됐나?', type: ['ISTJ', 'ESTJ', 'INTJ', 'ENTJ', 'ESFJ', 'ENFJ', 'ISFJ', 'INFJ'] },
      { answer: 'B. 내가 뭘 실수했나?', type: ['ISTP', 'ESTP', 'INTP', 'ENTP', 'ESFP', 'ENFP', 'ISFP', 'INFP'] },
    ]
  }
]

const infoList = [
  {
    name: '1번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '2번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '3번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '4번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '5번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '6번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '7번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '8번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '9번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '10번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '11번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
  {
    name: '12번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },{
    name: '13번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },{
    name: '14번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },{
    name: '15번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },{
    name: '16번.<br>참여해주셔서 감사합니다.',
    desc: ''
  },
]
