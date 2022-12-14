[⬅️ 4장](https://github.com/read-with-us/refactoring/tree/main/ch04) | [7장 ➡️](https://github.com/read-with-us/refactoring/tree/main/ch07)

# 6장 기본적인 리팩터링

- [6.1 함수 추출하기](#61-함수-추출하기)
- [6.2 함수 인라인하기](#62-함수-인라인하기)
- [6.3 변수 추출하기](#63-변수-추출하기)
- [6.4 변수 인라인하기](#64-변수-인라인하기)
- [6.5 함수 선언 바꾸기](#65-함수-선언-바꾸기)
- [6.6 변수 캡슐화하기](#66-변수-캡슐화하기)
- [6.7 변수 이름 바꾸기](#67-변수-이름-바꾸기)
- [6.8 매개변수 객체 만들기](#68-매개변수-객체-만들기)
- [6.9 여러 함수를 클래스를 묶기](#69-여러-함수를-클래스를-묶기)
- [6.10 여러 함수를 변환 함수로 묶기](#610-여러-함수를-변환-함수로-묶기)
- [6.11 단계 쪼개기](#611-단계-쪼개기)

> **Note**
>
> '기본적인 리팩터링' 챕터는 다음 질문을 중심으로 읽어나가시면 좋습니다.
>
> 1. 해당 리팩터링 기법이 왜 필요한가
> 2. 해당 리팩터링 기법을 언제 적용해야 하는가
> 3. 해당 리팩터링 기법은 어떤 효과가 있는가
>
> 프로그래밍의 기본 요소인 변수와 함수를 중심으로 살펴보세요.

p.157

> 1. 추출은 결국 이름 짓기이며, 코드 이해도가 높아지다 보면 이름을 바꿔야 할 때가 많다.

## 6.1 함수 추출하기

p. 159

> 1. 목적과 구현을 분리하는 방식이 가장 합리적인 기준으로 보인다. 코드를 보고 무슨 일을 하는지 파악하는데 한참이 걸린다면 그 부분을 함수로 추출한 뒤 ‘무슨 일’에 걸맞는 이름을 짓는다.
> 2. 함수를 짧게 만들면 함수 호출이 많아져서 성능이 느려질까 걱정하는 사람도 있다. 내가 젊던 시절에는 간혹 문제가 되긴 했지만 요즘은 그럴 일이 거의 없다. 함수가 짧으면 캐싱하기가 더 쉽기 때문에 컴파일러가 최적화하는 데 유리할 때가 많다.
> 3. “최적화를 할 때는 다음 두 규칙을 따르기 바란다. 첫 번째, 하지마라. 두 번째(전문가 한정), 아직 하지 마라” - M.A. 잭슨

p.160

> 1. 짧은 함수의 이점은 이름을 잘 지어야만 발휘되므로 이름 짓기에 특별히 신경 써야 한다.

> 💡의견
>
> 1. 성능 최적화 경험 공유
>
>    - 코드 스플리팅을 이용한 진입점 제어
>
> 2. React를 쓰면서 평소에 함수 추출을 해뒀더니, 파일 구조를 바꿀 때 너무 좋았던 경험이 있었음.

## 6.2 함수 인라인하기

p.169

> 1. 함수 본문이 이름만큼 명확한 경우도 있다. 또는 함수 본문 코드를 이름만큼 깔끔하게 리팩터링할 때도 있다.
> 2. 간접호출을 너무 과하게 쓰는 코드도 흔한 인라인 대상이다.

## 6.3 변수 추출하기

p.173

> 1.  표현식이 너무 복잡해서 이해하기 어려울 때가 있다. 이럴 때 지역 변수를 활용하면 표현식을 쪼개 관리하기 더 쉽게 만들 수 있다. 그러면 복잡한 로직을 구성하는 단계마다 이름을 붙일 수 있어서 코드의 목적을 훨씬 명확하게 드러낼 수 있다.
> 2.  이 과정에서 추가한 변수는 디버깅에도 도움된다. 디버거에 중단점을 지정하거나 상태를 출력하는 문장을 추가할 수 있기 떄문이다.
> 3.  변수 추출을 고려한다고 함은 표현식에 이름을 붙이고 싶다는 뜻이다.
> 4.  현재 함수 안에서만 의미가 있다면 변수로 추출하는 것이 좋다. 그러나 함수를 벗어난 넓은 문맥에서까지 의미가 된다면 그 넓은 범위에서 통용되는 이름을 생각해야 한다. 다시 말해 변수가 아닌 (주로) 함수를 추출해야 한다.

p.177

> 1. 여기서 객체의 엄청난 장점을 볼 수 있다. 객체는 특정 로직과 데이터를 외부와 공유하려 할 때 공유할 정보를 설명해주는 적당한 크기의 문맥이 되어준다. 이 예처럼 간단한 경우라면 효과가 크지 않지만, 덩치가 큰 클래스에서 공통 동작을 별도 이름으로 뽑아내서 추상화해두면 그 객체를 다룰 때 쉽게 활용할 수 있어서 매우 유용하다.

## 6.4 변수 인라인하기

p.178

> 1. 하지만 그 이름이 원래 표현식과 다를 바 없을 때도 있다. 또 변수가 주변 코드를 리팩터링하는 데 방해가 되기도 한다. 이럴 때는 그 변수를 인라인하는 것이 좋다.

## 6.5 함수 선언 바꾸기

p.179

> 1. 함수 선언은 각 부분이 서로 맞물리는 방식을 표현하며, 실질적으로 소프트웨어 시스템의 구성 요소를 조립하는 연결부 역할을 한다.
> 2. 연결부를 잘 정의하면 시스템에 새로운 부분을 추가하기가 쉬워지는 반면, 잘못 정의하면 지속적인 방해 요인으로 작용하여 소프트웨어 동작을 파악하기 어려워지고 요구사항이 바뀔 때 적절히 수정하기 어렵게 한다.
> 3. 이러한 연결부에서 가장 중요한 요소는 함수의 이름이다. 이름이 좋으면 함수의 구현 코드를 살펴볼 필요 없이 호출문만 보고도 무슨 일을 하는지 파악할 수 있다.
> 4. 그래서 나는 이름이 잘못된 함수를 발견하면 더 나은 이름이 떠오르는 즉시 바꾸라는 명령으로 받아들인다. 그래야 나중에 그 코드를 다시 볼 때 무슨 일을 하는지 ‘또’ 고민하지 않게 된다.

p.180

> 1. 좋은 이름을 떠올리는 데 효과적인 방법이 하나 있다. 바로 주석을 이용해 함수의 목적을 설명해보는 것이다. 그러다 보면 주석이 멋진 이름으로 바뀌어 되돌아올 때가 있다.
> 2. 매개변수는 함수가 외부 세계와 어우러지는 방식을 정의한다. 매개변수는 함수를 사용하는 문맥을 설정한다.
> 3. 이렇게 하면 활용 범위가 넓어질 뿐만 아니라, 다른 모듈과의 결합을 제거할 수도 있다. 예컨데 전화번호 포매팅 로직을 사람 관련 정보를 전혀 모르는 모듈에 둘 수 있다.

> 💡의견
>
> 1. 전화번호 예시가 매우 적절해서 이해하기 쉬웠습니다.

p.182

> 1. 공개된 API를 리팩터링할 때는 새 함수를 추가한 다음 리팩터링을 잠시 멈출 수 있다.

p.185

> 1. 나는 자바스크립트로 프로그래밍한다면 호출문을 변경하기 전에 어셔션을 추가하여 호출하는 곳에서 새로 추가한 매개변수를 실제로 사용하는지 확인한다.

P.187

> 1. 자동 리팩터링 도구는 마이그레이션 절차의 활용도를 떨어뜨리기도 하고 효과를 배가하기도 한다.

## 6.6 변수 캡슐화하기

p.188

> 1. 함수는 데이터보다 다루기가 수월하다. 함수를 사용한다는 건 대체로 호출한다는 뜻이고, 함수의 이름을 바꾸거나 다른 모듈로 옮기기는 어렵지 않다. 여차하면 기존 함수를 그대로 둔 채 전달 함수로 활용할 수도 있기 때문이다.
> 2. 데이터는 참조하는 모든 부분을 한 번에 바꿔야 코드가 제대로 작동한다. 짧은 함수 안의 임시 변수처럼 유효범위가 아주 좁은 데이터는 어려울 게 없지만, 유효범위가 넓어질수록 다루기 어려워진다.
> 3. 그래서 접근할 수 있는 범위가 넓은 데이터를 옮길 때는 먼저 그 데이터로의 접근을 독점하는 함수를 만드는 식으로 캡슐화하는 것이 가장 좋은 방법일 때가 많다.

p.189

> 1. 불변 데이터는 가변 데이터보다 캡슐화할 이유가 적다.
> 2. 불변 데이터는 옮길 필요 없이 그냥 복제하면 된다. 그래서 원본 데이터를 참조하는 코드를 변경할 필요도 없고, 데이터를 변형시키는 코드를 걱정할 일도 없다. 불변성은 강력한 방부제인 셈이다.

> 💡의견
>
> 1. JS/TS에서 프라이빗 변수로 선언하는 방법
>
>    - JS/TS 둘 다 ‘#’을 붙이면 되고, TS에서는 private 키워드도 사용 가능함.

## 6.7 변수 이름 바꾸기

p.194

> 1. 사실 나는 이름을 잘못 지을 때가 많다. 고민을 충분히 하지 않아서거나, 개발을 더 하다 보니 문제에 대한 이해도가 높아져서거나, 혹은 사용자의 요구가 달라져서 프로그램의 목적이 변해 그럴 때도 있다.

> 💡의견
>
> 1. 완벽하게 좋은 이름을 정할 수는 없구나. 변화하는 건 자연스러운 것이고 받아들여야 하는구나라고 생각했습니다.

## 6.8 매개변수 객체 만들기

p197

> 데이터 항목 여러 개가 이 함수에서 저 함수로 함께 몰려다니는 경우를 자주 본다. 나는 이런 데이터 무리를 발견하면 데이터 구조 하나로 모아주곤 한다.
>
> 데이터 뭉치를 데이터 구조로 묶으면 데이터 사이의 관계가 명확해진다는 이점을 얻는다. 게다가 함수가 이 데이터 구조를 받게 하면 매개변수 수가 줄어든다.
> 같은 데이터 구조를 사용하는 모든 함수가 원소를 참조할 때 항상 똑같은 이름을 사용하기 때문에 일관성도 높여준다.
>
> 리팩터링의 진정한 힘은 코드를 더 근본적으로 바꿔준다는 데 있다.
> 데이터 구조에 담길 데이터에 공통으로 적용되는 동작을 추출해서 함수로 만드는 것이다.
> 이 과정에서 새로 만든 데이터 구조가 문제 영역을 훨씬 간결하게 표현하는 새로운 추상 개념으로 격상되면서 코드의 개념적인 그림을 다시 그릴 수도 있다.

p199

> 여기서는 기본 자바스크립트 객체가 아닌 클래스로 선언했는데, 이 리팩터링은 새로 생성한 객체로 동작까지 옮기는 더 큰 작업의 첫 단계로 수행될 때가 많기 때문이다. 이 시나리오에는 클래스가 적합하므로 곧바로 클래스를 사용했다. 한편 값 객체로 만들 가능성이 높기 때문에 세터는 만들지 않는다. 내가 이 리팩터링을 할 때는 대부분 값 객체를 만들게 된다.

p201

> 코드에 범위 개념이 필요함을 깨달았다면 최대값과 최솟값 쌍을 사용하는 코드를 발견할 때마다 범위 객체로 바꾸자

## 6.9 여러 함수를 클래스를 묶기

p202

> 클래스는 데이터와 함수를 하나의 공유 환경으로 묶은 후, 다른 프로그램 요소와 어울러질 수 있도록 그중 일부를 외부에 제공한다.
> 클래스로 묶으면 이 함수들이 공유하는 공통 환경을 더 명확하게 표현할 수 있고, 각 함수에 전달되는 인수를 줄여서 객체 안에서의 함수 호출을 간결하게 만들 수 있다. 또한 이런 객체를 시스템의 다른 부분에 전달하기 위한 참조를 제공할 수 있다.

p203

> 클래스로 묶을 때의 두드러진 장점은 클라이언트가 객체의 핵심 데이터를 변경할 수 있고, 파생 객체들을 일관되게 관리할 수 있다는 것이다.
> 나는 중첩 함수보다 클래스를 선호하는 편인데, 중첩 함수는 테스트하기가 까다로울 수 있기 때문이다.

p207

> 프로그램의 다른 부분에서 데이터를 갱신할 가능성이 꽤 있을 때는 클래스로 묶어두면 큰 도움이 된다.

## 6.10 여러 함수를 변환 함수로 묶기

p208

> 변환 함수는 원본 데이터를 입력받아서 필요한 정보를 모두 도출한 뒤, 각각을 출력 데이터의 필드에 넣어 반환한다.

p209

> 원본 데이터가 코드 안에서 갱신될 때는 클래스로 묶는편이 훨씬 낫다. 변환 함수로 묶으면 가공한 데이터를 새로운 레코드에 저장하므로, 원본 데이터가 수정되면 일관성이 깨질 수 있기 때문이다.

> 💡의견
>
> 1. 함수형 프로그래밍과 변환 함수는 다른 개념

p210

> 참고로 나는 본질은 같고 부가 정보만 덧붙이는 변환 함수의 이름은 'enrich'라 하고, 형태가 변할 때만 'transform'이라는 이름을 쓴다.

p211

> 변환 함수 안에서는 결과 객체를 매번 복제할 필요 없이 마음껏 변경해도 된다.

p213

> 측정값에 부가 정보를 추가하는 지금 방식에서 클라이언트가 데이터를 변경하면 심각한 문제가 생길 수 있다. 예컨대 사용량 필드를 변경하면 데이터의 일관성이 깨진다. 내 생각에 자바스크립트에서 이 문제를 방지하기 가장 좋은 방법은 여러 함수를 클래스로 묶기다.

## 6.11 단계 쪼개기

p214

> 나는 서로 다른 두 대상을 한꺼번에 다루는 코드를 발견하면 각각을 별개 모듈로 나누는 방법을 모색한다. 코드를 수정해야 할 때 두 대상을 동시에 생각할 필요 없이 하나에만 집중하기 위해서다. 모듈이 잘 분리되어 있다면 다른 모듈의 상세 내용은 전혀 기억하지 못해도 원하는 대로 수정을 끝마칠 수도 있다.

p215

> 가장 대표적인 예는 컴파일러다. 컴파일러는 기본적으로 어떤 텍스트(코드)를 입력받아서 실행 가능한 형태(목적 코드)로 변환한다. 컴파일러의 역사가 오래되다 보니 사람들은 컴파일 작업을 여러 단계가 순차적으로 연결된 형태로 분리하면 좋다는 사실을 깨달았다.

> 💡의견
>
> 1. 컴파일러처럼 큰 소프트웨어에도 이 기법이 유용하구나 싶었고 예시를 주의 깊게 보았습니다.

p222

> 테스트가 느리거나 불편하면 리팩터링 속도가 느려지고 오류가 생길 가능성도 커진다. 따라서 먼저 테스트를 쉽게 수행할 수 있도록 수정한 다음에 리팩터링하는 게 좋다.

p223

> 이번 예에서는 명령줄 호출과 표준 출력에 쓰는 느리고 불편한 작업과 자주 테스트해야 할 복잡한 동작을 분리함으로써 테스트를 더 쉽게 수행하게 만들었다. 이 원칙을 흔히 험블 객체 패턴이라 한다.

> 💡의견
>
> 1. 동작을 분리해서 테스트하기 쉽게 하는 작업이 인상깊었고 험블 객체 패턴이라는 용어를 알게 되어 좋았습니다.

p234

> 핵심은 어디까지나 단계를 명확히 분리하는 데 있기 때문이다.

<br>

[⬅️ 4장](https://github.com/read-with-us/refactoring/tree/main/ch04) | [⬆️ 위로](#6장-기본적인-리팩터링) | [7장 ➡️](https://github.com/read-with-us/refactoring/tree/main/ch07)
