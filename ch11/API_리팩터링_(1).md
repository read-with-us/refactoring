[⬅️ 10장](https://github.com/read-with-us/refactoring/tree/main/ch10) | [12장 ➡️](https://github.com/read-with-us/refactoring/tree/main/ch12)

# 11장 API 리팩터링 (1)

- [11.1 질의 함수와 변경 함수 분리하기](#111-질의-함수와-변경-함수-분리하기)
- [11.2 함수 매개변수화하기](#112-함수-매개변수화하기)
- [11.3 플래그 인수 제거하기](#113-플래그-인수-제거하기)
- [11.4 객체 통째로 넘기기](#114-객체-통째로-넘기기)
- [11.5 매개변수를 질의 함수로 바꾸기](#115-매개변수를-질의-함수로-바꾸기)
- [11.6 질의 함수를 매개변수로 바꾸기](#116-질의-함수를-매개변수로-바꾸기)
- [11.7 세터 제거하기](#117-세터-제거하기)

<br>

> **Note**
>
> 'API 리팩터링' 챕터는 다음 질문을 중심으로 읽어나가시면 좋습니다.
>
> 1. 부수효과가 있는 함수와 없는 함수를 어떻게 분리해야 하는가
> 2. 매개변수에 따라 책임 소재가 어디로 이동하는가
> 3. 참조 투명성이란 무엇인가

<br>

p.411

> 모듈과 함수는 소프트웨어를 구성하는 빌딩 블록이며, API는 이 블록들을 끼워 맞추는 연결부다.

> 좋은 API는 데이터를 갱신하는 함수와 그저 조회만 하는 함수를 명확하게 구분한다.

<br>


## 11.1 질의 함수와 변경 함수 분리하기
p.413
> 우리는 외부에서 관찰할 수 있는 겉보기 부수효과<sup>observable side effect</sup>가 전혀 없이 값을 반환해주는 함수를 추구해야 한다. 이런 함수는 어느 때건 원하는 만큼 호출해도 아무 문제가 없다. 호출하는 문장의 위치를 호출하는 함수 안 어디로든 옮겨도 되며 테스트하기도 쉽다.

> 겉보기 부수효과가 있는 함수와 없는 함수는 명확히 구분하는 것이 좋다.

<br>

p.414
> 나는 값을 반환하면서도 부수효과도 있는 함수를 발견하면 상태를 변경하는 부분과 질의하는 부분을 분리하려 시도한다. 무조건이다!

<br>

## 11.2 함수 매개변수화하기
p.417
> 두 함수의 로직이 아주 비슷하고 단지 리터럴 값만 다르다면, 그 다른 값만 매개변수로 받아 처리하는 함수 하나로 합쳐서 중복을 없앨 수 있다.

<br>

> 💡 **의견**
>
> - 경진: 리팩터링 후의 코드가 가독성이 훨씬 좋아서 인상 깊었다.
> - 이수: 중간 단계인 `middleBand`부터 리팩터링을 시작한 점이 인상 깊었다.

<table>
  <thead>
    <tr>
      <th>리팩터링 전</th>
      <th>리팩터링 후</th>
    </tr>
  </thead>
  <tbody>
<tr>
<td>

```js
function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount = bottomBand(usage) * 0.03
                + middleBand(usage) * 0.03
                + topBand(usage) * 0.07;
  return usd(amount);
}

function bottomBand(usage) {
  return Math.min(usage, 100);
}

function middleBand(usage) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0; 
}

function topBand(usage) {
  return usage > 200 ? usage - 200 : 0;   
}
```
</td>
<td>

```js
function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount = withinBand(usage, 0, 100) * 0.03
                + withinBand(usage, 100, 200) * 0.03
                + withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, 200) - bottom : 0;
}
```
</td>
</tr>
</tbody>
</table>

<br>

## 11.3 플래그 인수 제거하기
p.421
> 플래그 인수<sup>flag argument</sup>란 호출되는 함수가 실행할 로직을 호출하는 쪽에서 선택하기 위해 전달하는 인수다.

<br>

p.422
> 내가 플래그 인수를 싫어하는 이유가 있다. 호출할 수 있는 함수들이 무엇이고 어떻게 호출해야 하는지를 이해하기가 어려워지기 때문이다. 나는 API를 익힐 때 주로 함수 목록부터 살펴보는데, 플래그 인수가 있으면 함수들의 기능 차이가 잘 드러나지 않는다.

> 불리언 플래그는 코드를 읽는 이에게 뜻을 온전히 전달하지 못하기 때문에 더욱 좋지 못하다.

> 이보다는 다음처럼 특정한 기능 하나만 수행하는 명시적인 함수를 제공하는 편이 훨씬 깔끔하다.

> 플래그 인수가 되려면 호출하는 쪽에서 불리언 값으로 (프로그램에서 사용되는 데이터가 아닌) 리터럴 값을 건네야 한다. 또한, 호출되는 함수는 그 인수를 (달느 함수에 전달하는 데이터가 아닌) 제어 흐름을 결정하는데 사용해야 한다.

<br>

p.426
> 이 코드에서 `isRush`를 최상위 분배 조건문으로 뽑아내려면 생각보다 일이 커질 수도 있어 보인다. 그렇다면 `deliveryDate()`를 감싸는 래핑 함수를 생각해볼 수 있다.
```js
function rushDeliveryDate(anOrder) { return deliveryDate(anOrder, true); }
function regularDeliveryDate(anOrder) { return deliveryDate(anOrder, false); }
```

<br>

> 💡 **의견**
> - 경진: 함수 호출부에서 boolean이 있으면 가독성이 떨어진다고 생각해서 가능하면 사용을 피하려고 한다.
> - 플래그 변수 사용이 불가피한 경우에 대한 논의
>   - 경진: `isRush`처럼 의미있는 이름의 변수로 넘기거나, [Named Parameter](https://en.wikipedia.org/wiki/Named_parameter#With_data_structures)를 사용하려고 하는 편이다.
>   - 원진: React에서 추상화 레벨을 일치시키려고 hook으로 가려야는 경우에 사용했다.
>   - 이수: react-router-dom에서 제공하는 `useBlocker` hook도 플래그 변수를 사용한다. `useBlocker(blocker, when = true) { ... }` 와 같은 형식이다. ([코드](https://gist.github.com/rmorse/426ffcc579922a82749934826fa9f743#file-react-router-dom-v-6-02-prompt-blocker-js-L16-L39))

<br>

## 11.4 객체 통째로 넘기기
p.427
> 하나의 레코드에서 값 두어 개를 가져와 인수로 넘기는 코드를 보면, 나는 그 값들 대신 레코드를 통째로 넘기고 함수 본문에서 필요한 값들을 꺼내 쓰도록 수정하곤 한다.

> 레코드를 통째로 넘기면 변화에 대응하기 쉽다. 예컨대 그 함수가 더 다양한 데이터를 사용하도록 바뀌어도 매개변수 목록은 수정할 필요가 없다. 그리고 매개변수 목록이 짧아져서 일반적으로는 함수 사용법을 이해하기 쉬워진다.

> 하지만 함수가 레코드 자체에 의존하기를 원치 않을 때는 이 리팩터링을 수행하지 않는데, 레코드와 함수가 서로 다른 모듈에 속한 상황이면 특히 더 그렇다.

<br>

p.428
> 많은 사람이 놓치는 사례가 하나 더 있다. 다른 객체의 메서드를 호출하면서 호출하는 객체 자신이 가지고 있는 데이터 여러 개를 건네는 경우다. 이런 상황이면 데이터 여러 개 대신 객체 자신의 참조만 건네도록 수정할 수 있다(자바스크립트라면 `this`를 건넬 것이다).

<br>

## 11.5 매개변수를 질의 함수로 바꾸기
p.433
> 매개변수 목록은 함수의 변동 요인을 모아놓은 곳이다. 즉, 함수의 동작에 변화를 줄 수 있는 일차적인 수단이다.

> 피호출 함수가 스스로 '쉽게' 결정할 수 있는 값을 매개변수로 건네는 것도 일종의 중복이다.

> 해당 매개변수를 제거하면 값을 결정하는 책임 주체가 달라진다. 매개변수가 있다면 결정 주체가 호출자가 되고, 없다면 피호출 함수가 된다. 나는 습관적으로 호출하는 쪽을 간소하게 만든다. 

<br>

p.434
> 매개변수를 질의 함수로 바꾸지 말아야 할 상황도 있다. 가장 흔한 예는 매개변수를 제거하면 피호출 함수에 원치 않은 의존성이 생길 때다.

> 주의사항이 있다. 대상 함수가 참조 투명<sup>referential transparency</sup>해야 한다는 것이다. 참조 투명이란 '함수에 똑같은 값을 건네 호출하면 똑같이 동작한다'는 것이다. 

<br>

> 💡 **의견**
>
> - 경진: 리팩터링 전의 패턴을 실무 코드에서 많이 봤던 것 같은데, 리팩터링 후를 잘 익혀서 실무에 적용해보고 싶다.

<table>
  <thead>
    <tr>
      <th>리팩터링 전</th>
      <th>리팩터링 후</th>
    </tr>
  </thead>
  <tbody>
<tr>
<td>

```js
class Order {
  // ...
  
  get finalPrice() {
    const basePrice = this.qunatity * this.itemPrice;
    let discountLevel;
    if (this.qunatity > 100) discountLevel = 2;
    else discountLevel = 1;
    return this.discountedPrice(basePrice, discountLevel);
  }
  
  discountedPrice(basePrice, discountLevel) {
    switch (discountLevel) {
      case 1: return basePrice * 0.95;
      case 2: return basePrice * 0.9;
    }
  }
}
```
</td>
<td>

```js
class Order {
  // ...
    
  get finalPrice() {
    const basePrice = this.qunatity * this.itemPrice;
    return this.discountedPrice(basePrice);
  }
  
  discountedPrice(basePrice) {
    switch (this.discountLevel) {
      case 1: return basePrice * 0.95;
      case 2: return basePrice * 0.9;
    }
  }
}
```
</td>
</tr>
</tbody>
</table>

<br>

## 11.6 질의 함수를 매개변수로 바꾸기
p.437
> 코드를 읽다 보면 함수 안에 두기엔 거북한 참조를 발견할 때가 있다. 전역 변수를 참조한다거나(같은 모듈 안에서라도) 제거하길 원하는 원소를 참조하는 경우가 여기 속한다. 이 문제는 해당 참조를 매개변수로 바꿔 해결할 수 있다. 참조를 풀어내는 책임을 호출자로 옮기는 것이다.   

> 이런 상황 대부분은 코드의 의존 관계를 바꾸려 할 때 벌어진다. 예컨대 대상 함수가 더 이상 (매개변수화하려는) 특정 원소에 의존하길 원치 않을 때 일어난다. 이때 두 극단 사이에서 적절한 균형을 찾아야 한다.
<br>

## 11.7 세터 제거하기
p.442
> 세터 메서드가 있다고 함은 필드가 수정될 수 있다는 뜻이다. 객체 생성 후에는 수정되지 않길 원하는 필드라면 세터를 제공하지 않았을 것이다.
 
> 첫째, 사람들이 무조건 접근자 메서드를 통해서만 필드를 다루려 할 때다.<br>
> 나라면 세터를 제거해서 객체가 생성된 후에는 값이 바뀌면 안 된다는 뜻을 분명히 할 것이다.

> 두 번째 상황은 클라이언트에서 생성 스크립트<sup>creation script</sup>를 사용해 객체를 생성할 때다.

<br>

[⬅️ 10장](https://github.com/read-with-us/refactoring/tree/main/ch10) | [⬆️ 위로](#11장-API-리팩터링-1) | [12장 ➡️](https://github.com/read-with-us/refactoring/tree/main/ch12)
