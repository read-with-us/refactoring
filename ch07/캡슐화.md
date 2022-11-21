# 7장 캡슐화

> **Note**
>
> '캡슐화' 챕터는 다음 질문을 중심으로 읽어나가시면 좋습니다.
>
> 1. 어떤 기준으로 모듈을 나눠야 하는가
> 2. 무엇을 숨기고 무엇을 드러내야 하는가
> 3. 클래스는 어떻게 정보를 숨기는가

p.235

> 모듈을 잘 분리하는 가장 중요한 기준은 각 모듈이 자신을 제외한 외부에 드러내지 않아야 할 비밀을 얼마나 잘 숨기느냐에 있다.

## 7-1 레코드 캡슐화하기

p.237

> - 객체를 사용하면 어떻게 저장했는지 숨긴 채 세 값을 각각의 메서드로 제공할 수 있다.
> - 사용자는 무엇이 저장된 값이고 무엇이 계산된 값인지 알 필요가 없다.

<br/>

> - "가변" 데이터일 때 객체를 선호한다.
> - 레코드 구조는 두 가지로 구분할 수 있는데, 하나는 필드 이름을 노출하는 형태고, 다른 하나는 내가 원하는 이름을 쓸 수 있는 형태이다. 후자는 주로 라이브러리에서 제공한다.

<br/>

> 코드를 작성하다 보면 중첩된 리스트나 해시맵을 받아서 JSON이나 XML 같은 포맷으로 직렬화할 때가 많다. <br/>이런 구조 역시 캡슐화할 수 있는데, 그러면 **나중에 포맷을 바꾸거나 추적하기 어려운 데이터를 수정하기 수월**해진다.

p.243

> 캡슐화에서는 값을 수정하는 부분을 명확하게 드러내고 한 곳에 모아두는 일이 굉장히 중요하다.

### 예시

```javascript
// Before
organization = { name: 'Acme Gooseberries', country: 'GB' };
```

```javascript
// After
class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get country() {
    return this._country;
  }
  set country(arg) {
    this._country = arg;
  }
}
```

## 7-2 컬렉션 캡슐화하기

p.246

> 컬렉션 변수로의 접근을 캡슐화하면서 게터가 컬렉션 자체를 반환하도록 하면 그 컬렉션을 감싼 클래스가 눈치채지 못하는 상태에서 원소들이 바뀌어버릴 수 있다.
> <br/><br/>
> 위 문제를 방지하기 위해 컬렉션 변경자 메서드를 만든다. 이렇게 항상 컬렉션을 소유한 클래스를 통해서만 원소를 변경하도록 하면 프로그램을 개선하면서 컬렉션 변경 방식도 원하는 대로 수정할 수 있다.

p.247

> 중요한 점은 코드베이스에서 일관성을 주는 것이다. 앞에 나온 방식 중에서 한 가지만 적용해서 컬렉션 접근 함수의 동작 방식을 통일해야 한다.

```javascript
class Person {
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
  }
}
```

```javascript
class Person {
  get courses() {return this._courses.slice();}
  addCourse(aCourse)    { ... }
  removeCourse(aCourse) { ... }
}
```

## 7-3 기본형을 객체로 바꾸기

p.251

> 단순한 정보를 표현하는 데이터도 개발이 진행되면서 더 이상 간단하지 않을 때가 종종 있다.
> <br/> <br/> **단순한 출력 이상의 기능이 필요해지는 순간 그 데이터를 표현하는 전용 클래스를 정의하는 편**이다. 이렇게 하면 처음에는 효과가 미비할 수 있지만 나중에 특별한 동작이 필요해지면 이 클래스에 추가하면 되니 프로그램이 커질수록 점점 유용한 도구가 된다.

p.253

> 필드는 자가 캡슐화하면 필드 이름을 바꿔도 클라이언트 코드는 유지할 수 있다.

```javascript
// Before
orders.filter(o => 'high' === o.priority || 'rush' === o.priority);
```

```javascript
// After
orders.filter(o => o.priority.higherThan(new Priority('normal')));
```

> 💡의견
>
> 1. After 예제가 Before 예제에 비해 가독성이 더 뛰어난지 의문이 듭니다.
> 2. 여러 곳에서 사용할 경우 필터 조건이 바뀐다면 Before 예제는 모두 찾아서 바꿔야하지만 After 예제는 클래스에서 메서드의 동작을 제어할 수 있다는 면이 장점이라고 봅니다.

## 7-4 임시 변수를 질의 함수로 바꾸기

p.256

> 함수 안에서 어떤 코드의 결과값을 다시 참조할 목적으로 임시 변수를 쓰기도 하는데, 더 나아가 함수로 만들어 사용하는 편이 나을 때가 많다.
> <br/> <br/>
> 긴 함수의 한 부분을 별도 함수로 추출하고자 할 때 먼저 변수들을 각각의 함수로 만들면 일이 수월해진다. **추출한 함수에 변수를 따로 전달할 필요가 없어지기 때문이다.**

p.257

> 변수 대신 함수로 만들어두면 비슷한 계산을 수행하는 다른 함수에서도 사용할 수 있어 코드 중복이 줄어든다. 그래서 똑같은 방식으로 계산되는 변수를 발견할 때마다 함수로 바꿀 수 있는지 살펴본다.

> 이번 리팩터링은 클래스 안에서 적용할 때 효과가 가장 크다. 클래스는 추출할 메서드들에 공유 컨텍스트를 제공하기 때문이다.

```javascript
// Before
const basePrice = this._quantity * this._itemPrice;
if (basePrice > 1000) return basePrice * 0.95;
else return basePrice * 0.98;
```

```javascript
// After
get basePrice() {this._quantity * this._itemPrice;}

...

if (this.basePrice > 1000)
  return this.basePrice * 0.95;
else
  return this.basePrice * 0.98;
```

## 7-5 클래스 추출하기

p.260

> 클래스는 반드시 명확하게 추상화하고 소수의 주어진 역할만 처리해야 한다.

> 메서드와 데이터가 너무 많은 클래스는 이해하기가 쉽지 않으니 잘 살펴보고 적절히 분리하는 것이 좋다. 특히 일부 데이터와 메서드를 따로 묶을 수 있다면 어서 분리하라는 신호다.

## 7-6 클래스 인라인하기

p.264

> 클래스 인라인하기는 클래스 추출하기를 거꾸로 돌리는 리펙터링이다. 나는 더 이상 제 역할을 못해서 그대로 두면 안 되는 클래스는 인라인해버린다.
> <br/><br/>
> 역할을 옮기는 리펙터링을 하고 특정 클래스에 남은 역할이 거의 없을 때 이런 현상이 자주 생기는데, 이럴 땐 **클래스를 가장 많이 사용하는 클래스로 흡수**시키자.

> 두 클래스의 기능을 지금과 다르게 배분하고 싶을 때도 클래스를 인라인한다.

## 7-7 위임 숨기기

p.268

> 서버 객체의 필드가 가리키는 객체의 메서드를 호출하려면 클라이언트는 이 위임 객체를 알아야 한다.
> <br/><br/>
> 위임 객체의 인터페이스가 바뀌면 이 인터페이스를 사용하는 모든 클라이언트 코드를 수정해야 하는데, **이러한 의존성을 없애려면 서버 자체에 위임 메서드를 만들어서 위임 객체의 존재를 숨기면 된다.**

```javascript
manager = aPerson.department.manager;
```

```javascript
manager = aPerson.manager;

class Person {
  get manager() {
    return this.department.manager;
  }
}
```

## 7-8 중개자 제거하기

p.271

> 위임 객체의 캡슐화 이점은 거저 주어지는 것이 아니다. 클라이언트가 위임 객체의 또 다른 기능을 사용하고 싶을 때마다 **서버의 위임 메서드를 추가해야 하는데, 이렇게 기능을 추가하다 보면 단순히 전달만 하는 위임 메서드들이 점점 성가셔진다.** <br/><br/>
> 이 경우, 서버 클래스는 그저 중개자 역할만 하기 때문에 **차라리 클라이언트가 위임 객체를 직접 호출하는 것이 나을 수 있다.**

> 💡의견
>
> 1. React의 props drilling이 떠올랐습니다. 어떤 상태를 사용하는 하위 컴포넌트가 있을 때 props를 전달만 하는 컴포넌트들이 많아지는 경우가 생기는데요. 클라이언트가 위임 객체를 직접 호출하는 방법과 상태를 사용할 컴포넌트가 전역 상태 또는 지역 상태를 바로 호출하는 방법이 유사하다고 생각합니다.

```javascript
manager = aPerson.manager;

class Person {
  get manager() {
    return this.department.manager;
  }
}
```

```javascript
manager = aPerson.department.manager;
```

## 7-9 알고리즘 교체하기

p.274

> 때로는 알고리즘 전체를 걷어내고 훨씬 간결한 알고리즘으로 바꿔야 할 때가 있다. 문제를 더 확실히 이해하고 훨씬 쉽게 해결하는 방법을 발견했을 때 이렇게 한다.
> <br/><br/>
> 알고리즘을 살짝 다르게 동작하도록 바꾸고 싶을 때도 이 변화를 더 쉽게 가할 수 있는 알고리즘으로 통째로 바꾼 후에 처리하면 편할 수 있다.

> 💡의견
>
> 1. 알고리즘을 아예 바꾸는 것도 리팩터링의 한 방법이었지 하고 새삼 느꼈습니다.

```javascript
// Before
function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') {
      return 'Don';
    }
    if (people[i] === 'John') {
      return 'John';
    }
    if (people[i] === 'Kent') {
      return 'Kent';
    }
  }
  return '';
}
```

```javascript
// After
function foundPerson(people) {
  const candidates = ['Don', 'John', 'Kent'];
  return people.find(p => candidates.includes(p)) || '';
}
```
