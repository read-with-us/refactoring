[⬅️ 1장](https://github.com/read-with-us/refactoring/tree/main/ch01) | [3장 ➡️](https://github.com/read-with-us/refactoring/tree/main/ch03)

# 2장 리팩터링 원칙

- [2.1 리팩터링 정의](#21-리팩터링-정의)
- [2.2 두 개의 모자](#22-두-개의-모자)
- [2.3 리팩터링하는 이유](#23-리팩터링하는-이유)
- [2.4 언제 리팩터링해야 할까?](#24-언제-리팩터링해야-할까)
- [2.5 리팩터링 시 고려할 문제](#25-리팩터링-시-고려할-문제)
- [2.6 리팩터링, 아키텍처, 애그니(YAGNI)](#26-리팩터링-아키텍처-애그니yagni)
- [2.7 리팩터링과 소프트웨어 개발 프로세스](#27-리팩터링과-소프트웨어-개발-프로세스)
- [2.8 리팩터링과 성능](#28-리팩터링과-성능)
- [2.9 리팩터링의 유래](#29-리팩터링의-유래)
- [2.10 리팩터링 자동화](#210-리팩터링-자동화)
- [2.11 더 알고 싶다면](#211-더-알고-싶다면)

> **Note**
>
> '리팩터링 원칙'챕터는 다음 질문을 중심으로 읽어나가시면 좋습니다.
>
> 1. 리팩터링이란 무엇인가
> 2. 리팩터링은 왜 해야 하는가
> 3. 리팩터링은 언제 해야 하는가
> 4. 리팩터링하면 어떤 효과가 있는가

## 2.1 리팩터링 정의

79p

> **리팩터링: [명사] 소프트웨어의 겉보기 동작은 그대로 유지한 채, 코드를 이해하고 수정하기 쉽도록 내부 구조를 변경하는 기법**

> **리팩터링: [동사] 소프트웨어의 겉보기 동작은 그대로 유지한 채, 여러 가지 리팩터링 기법을 적용해서 소프트웨어를 재구성하다.**

80p

> **리팩터링하는 동안에는 코드가 항상 정상 작동하기 때문에 전체 작업이 끝나지 않았더라도 언제든 멈출 수 있다.**

> **누군가 "리팩터링하다가 코드가 깨져서 며칠이나 고생했다"라고 한다면, 십중팔구 리팩터링한 것이 아니다.**

> **리팩터링 과정에서 발견된 버그는 리팩터링 후에도 그대로 남아 있어야 한다.**

- 버그를 발견해도 고치지 말아야 한다는 걸 보고 깜짝 놀랐어요. 그런데 리팩터링한 뒤에 버그를 수정하는 것이 더 쉽고 또 다른 버그가 발생하는 일을 줄이기 때문이라는 걸 알고 나니까 이해가 되더라구요.

> **리팩터링의 목적은 코드를 이해하고 수정하기 쉽게 만드는 것이다. 프로그램 성능은 좋아질 수도, 나빠질 수도 있다.**

## 2.2 두 개의 모자

81p

> **리팩터링할 때는 '리팩터링' 모자를 쓴 다음 기능 추가는 절대 하지 않기로 다짐한 뒤 오로지 코드 재구성에만 전념한다.**

> **소프트웨어를 개발하는 동안 나는 두 모자를 자주 바꿔 쓴다.**

## 2.3 리팩터링하는 이유

81p

> **리팩터링하면 소프트웨어 설계가 좋아진다.**

82p

> **코드만 봐서는 설계를 파악하기 어려워진다. 코드 구조가 무너지기 시작하면 악효과가 누적된다.**

> **코드가 길수록 실수 없이 수정하기 어려워진다. 이해해야 할 코드량도 늘어난다.**

> **리팩터링하면 소프트웨어를 이해하기 쉬워진다.**

> **프로그래밍은 결국 내가 원하는 바를 정확히 표현하는 일이다.**

> **단지 다른 사람을 배려하기 위해서가 아니다. 사실 그 다른 사람이 바로 나 자신일 때가 많다.**

83p

> **기억할 필요가 있는 것들은 최대한 코드에 담으려고 한다.**

- 코드 자체를 문서화하는 것이 역시 중요하다고 생각했습니다.

> **리팩터링하면 버그를 쉽게 찾을 수 있다.**

> **리팩터링하면 프로그래밍 속도를 높일 수 있다.**

84p

> **내부 설계가 잘 된 소프트웨어는 새로운 기능을 추가할 지점과 어떻게 고칠지를 쉽게 찾을 수 있다.**

- 레거시 코드를 수정하다 보면 정말 건들기 까다롭다 싶은 코드를 만나게 되는데요. 이런 경험 때문에 리팩터링 책을 읽어야겠다고 마음을 먹은 것 같아요.

## 2.4 언제 리팩터링해야 할까?

85p

> **비슷한 일을 세 번째 하게 되면 리팩터링한다.**

- 코드를 개선해야겠다고 마음 먹을 때 그때 그때 상황에 따랐는데 이렇게 명확한 기준을 두면 좋겠다고 생각했습니다.

86p

> **준비를 위한 리팩터링: 기능을 쉽게 추가하게 만들기**

> **리팩터링하기 가장 좋은 시점은 코드베이스에 기능을 새로 추가하기 직전이다. 이 시점에 현재 코드를 살펴보면서, 구조를 살짝 바꾸면 다른 작업을 하기가 훨씬 쉬워질 만한 부분을 찾는다.**

> **이해를 위한 리팩터링: 코드를 이해하기 쉽게 만들기**

> **나는 코드를 파악할 때마다 그 코드의 의도가 더 명확하게 드러나도록 리팩터링할 여지는 없는지 찾아본다.**

87p

> **쓰레기 줍기 리팩터링**

> **간단히 수정할 수 있는 것은 즉시 고치고, 시간이 좀 걸리는 일은 짧은 메모만 남긴 다음, 하던 일을 끝내고 나서 처리한다.**

- 알게 모르게 무의식적으로는 이런 방법을 따라 코딩했던 것 같아요. 리팩토링은 정말 개발 과정에 자연스럽게 녹아들어야 하는구나를 깨달았습니다.

> **캠핑 규칙이 제안하듯, 항상 처음 봤을 때보다 깔끔하게 정리하고 떠나자.**

88p

> **계획된 리팩터링과 수시로 하는 리팩터링**

> **기능을 추가하거나 버그를 잡는 동안 리팩터링도 함께 한다. 프로그래밍 과정에 자연스럽게 녹인 것이다.**

> **무언가 수정하려 할 때는 먼저 수정하기 쉽게 정돈하고(단, 만만치 않을 수 있다) 그런 다음 쉽게 수정하자.**

89p

> **계획된 리팩터링을 하게 되는 일은 최소한으로 줄여야 한다. 리팩터링 작업 대부분은 드러나지 않게, 기회가 될 때마다 해야 한다.**

> **버전 관리 시스템에서 리팩터링 커밋과 기능 추가 커밋을 분리해야 한다.**

> **리팩터링은 기능 추가와 밀접하게 엮인 경우가 너무나 많기 때문에 굳이 나누는 것은 시간 낭비일 수 있다. 또한 해당 리팩터링을 하게 된 맥락 정보가 사라져서 왜 그렇게 수정했는지 이해하기 어려워진다.**

- 커밋을 잘 나누는 건 언제나 어려운 문제인 것 같아요. 현실적으로는 한 커밋에 기능과 리팩터링이 섞이는 경우가 더 많은 것 같습니다.

> **오래 걸리는 리팩터링**

> **누구든지 리팩터링해야 할 코드와 관련한 작업을 하게 될 때마다 원하는 방향으로 조금씩 개선하는 식이다.**

90p

> **코드 리뷰에 리팩터링 활용하기**

> **코드 리뷰는 개발팀 전체에 지식을 전파하는 데 좋다.**

> **리팩터링은 다른 이의 코드를 리뷰하는 데도 도움된다.**

> **관리자에게는 뭐라고 말해야 할까?**

91p

> **프로 개발자에게 주어진 임무는 새로운 기능을 빠르게 구현하는 것이고, 가장 빠른 방법은 리팩터링이다. 그래서 리팩터링부터 한다.**

> **리팩터링하지 말아야 할 때**

> **나는 지저분한 코드를 발견해도 굳이 수정할 필요가 없다면 리팩터링하지 않는다.**

> **리팩터링하는 것보다 처음부터 새로 작성하는 게 쉬울 때도 리팩터링하지 않는다.**

- 리팩터링 기법을 잘 알게 된 후에는 오히려 언제 리팩터링을 하지 말아야 하는지 정하는 부분이 더 어렵겠네요.

## 2.5 리팩터링 시 고려할 문제

92p

> **리팩터링의 궁극적인 목적은 개발 속도를 높여서, 더 적은 노력으로 더 많은 가치를 창출하는 것이다.**

93p

> **리팩터링의 본질은 코드 베이스를 예쁘게 꾸미는 데 있지 않다. 오로지 경제적인 이유로 하는 것이다. 리팩터링은 개발 기간을 단축하고자 하는 것이다. 기능 추가 시간을 줄이고, 버그 수정 시간을 줄여준다.**

- 리팩터링을 코드를 아름답게 만드는 것으로 오해하고 있지 않았나 싶고 반성하는 시간을 가졌습니다.

> **건강한 코드의 위력을 충분히 경험해보지 않고서는 코드베이스가 건강할 때와 허약할 때의 생산성 차이를 체감하기 어렵다.**

- '생산성'과 '경제적'이라는 두 가지 키워드가 핵심이네요.

94p

> **코드의 소유권을 팀에 두는 것이다. 그래서 팀원이라면 누구나 팀이 소유한 코드를 수정할 수 있게 한다.**

95p

> **지속적 통합(CI), 또는 트렁크 기반 개발(TBD)이라 한다.**

- 현 회사에서는 Git Flow 방식을 일부 따르고 있는데 트렁크 기반 개발이나 기능 플래그를 사용하면 정말 리팩터링하기 쉬울까 궁금합니다.

- 국내에서는 대부분 Git Flow나 GitHub Flow 방식을 따르는 것 같아요.

> **마스터를 건강하게 유지하고, 거대한 기능을 잘게 쪼개는 법을 배우고, 각 기능을 끌 수 있는 기능 토글(기능 플래그)을 적용하여 완료되지 않은 기능이 시스템 전체를 망치지 않도록 해야 한다.**

96p

> **리팩터링하기 위해서는 (대부분의 경우에) 자가 테스트 코드를 마련해야 한다는 뜻이다.**

97p

> **자가 테스트 코드는 리팩터링을 할 수 있게 해줄 뿐만 아니라, 새 기능 추가도 훨씬 안전하게 진행할 수 있도록 도와준다.**

> **또한 리팩터링 과정에서 버그가 생길 위험이 아주 크다는 불안감을 해소할 수 있다.**

> **안전한 자동 리팩터링만을 활용한다면 테스트 없이 리팩터링해도 좋다.**

98p

> **레거시 시스템을 파악할 때 리팩터링이 굉장히 도움된다.**

> **『레거시 코드 활용 전략』**

- 회사 레거시 코드에 테스트 코드가 한 줄도 없는 상황인데 나중에 이 책을 참고해 보아야겠어요.

> **'프로그램에서 테스트를 추가할 틈새를 찾아서 시스템을 테스트해야 한다.'**

> **코드의 한 부분을 훑고 넘어갈 때마다 예전보다 조금이라도 개선하려고 노력한다.**

## 2.6 리팩터링, 아키텍처, 애그니(YAGNI)

100p

> **요구사항 변화에 자연스럽게 대응하도록 코드 베이스를 잘 설계해준다는 데 있다.**

101p

> **유연성 메커니즘이 오히려 변화에 대응하는 능력을 떨어뜨릴 때가 대부분이다.**

- 미래에 이런 기능도 필요하겠지 넣어두었던 코드가 확장성을 떨어뜨린 경험이 있어요.

- 이 글과는 반대로 나에게 필요한 기능만 넣어두고 다른 사람들이 Input이라는 단어를 보았을 때 기대하는 기본값을 추가하지 않아서 문제가 생겼던 적도 있어요.

> **현재까지 파악한 요구사항만을 해결하는 소프트웨어를 구축한다.**

> **간결한 설계, 점진적 설계, YAGNI("you aren't going to need it"의 줄임말)**

## 2.7 리팩터링과 소프트웨어 개발 프로세스

102p

> **자가 테스트 코드와 리팩터링을 묶어서 테스트 주도 개발(TDD)이라 한다.**

> **팀으로 개발하면서 리팩터링을 하려면 각 팀원이 다른 사람의 작업을 방해하지 않으면서 언제든지 리팩터링할 수 있어야 한다. 지속적 통합을 적극 권장하는 이유도 바로 이 때문이다.**

## 2.8 리팩터링과 성능

103p

> **리팩터링하면 소프트웨어가 느려질 수도 있는 건 사실이다. 하지만 그와 동시에 성능을 튜닝하기는 더 쉬워진다.**

105p

> **성능에 대한 흥미로운 사실은, 대부분 프로그램은 전체 코드 중 극히 일부에서 대부분의 시간을 소비한다는 것이다.**

106p

> **먼저 프로파일러로 프로그램을 분석하여 시간과 공간을 많이 잡아먹는 지점을 알아낸다.**

> **각 단계마다 컴파일과 테스트를 거치고 프로파일러를 다시 실행해본다. 성능이 개선되지 않았다면 수정 내용을 되돌린다.**

## 2.9 리팩터링의 유래

## 2.10 리팩터링 자동화

108p

> **실제 리팩터링은 나 대신 개발 도구가 처리해주며, 따로 테스트할 필요가 없을 정도로 안정적이다.**

- 이 글을 보기 전에는 IDE에서 리팩터링 기능이 지원된다는 사실조차 몰랐어요. VS Code에서 어떤 리팩터링 기능을 제공하는지 찾아보려구요.

- Rename symbol 기능을 추천합니다. `F2`를 눌러서 사용할 수 있어요.

- `Ctrl + D`로 같은 텍스트를 전체 선택할 수 있어요. 정규식도 사용할 수 있습니다.

## 2.11 더 알고 싶다면

<br>

[⬅️ 1장](https://github.com/read-with-us/refactoring/tree/main/ch01) | [⬆️ 위로](#2장-리팩터링-원칙) | [3장 ➡️](https://github.com/read-with-us/refactoring/tree/main/ch03)
