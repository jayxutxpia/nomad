# #3.7 CSS in JavaScript - part 2-3

```java
// (...)
// querySelector로 h1을 지정, active 클래스명을 추가하려고 가정

function onclickClassName() {
  if (h1.className === "active") {
    h1.className = "";
  } else {
    h1.className = "active";
  }
}

h1.addEventListener("click", onclickClassName);
```
&nbsp;

➖ 클래스명을 추가/제거하고 싶을 때 if-else문을 사용해도 된다.   
➖ 이때 클래스명은 CSS에서 지정해 준 이름과 일치해야 코드가 정상적으로 수행된다.   

#
&nbsp;
&nbsp;
### ⛔ 문제점

&nbsp;

❌ raw string의 사용이 잦으면 CSS에서 클래스명을 변경하거나 오타를 낼 경우, 일일이 수정해 줘야 한다는 번거로움이 있다.   
```java
function onclickClassName() {

  const activeClass = "active";
  
  if (h1.className === activeClass) {
    h1.className = "";
  } else {
    h1.className = activeClass;
  }
}

h1.addEventListener("click", onclickClassName);
```   

　 👉 변수로 따로 지정하여 오류를 범할 확률을 줄여 줄 수 있다.   
##
&nbsp;


❌ 위의 코드로 실행할 경우, HTML에서 지정해 준 클래스명까지 제거가 되는 문제가 발생한다.   
&nbsp;

```java
// <h1 class="blog-title">(text)</h1>

function onclickClassName() {

  const activeClass = "blog-title active";
  
  if (h1.className === activeClass) {
    h1.className = "";
  } else {
    h1.className = activeClass;
  }
}

h1.addEventListener("click", onclickClassName);
```   

　 👉 해당 클래스명을 추가로 넣어주는 방법도 있다.   
  
  
　 👉 그러나, 이는 또다른 버그가 발생할 가능성이 있다.   
　 👉 클래스 수정 시에 JS와 CSS까지 모두 수정해 줘야 하는 문제가 있기에 좋은 방법은 아니다.   
&nbsp;

&nbsp;

```java
// <h1 class="blog-title">(text)</h1>

function onclickClassName() {

  const activeClass = "blog-title active";
  
  if (h1.classList.contains(activeClass)) {
    h1.classList.remove(activeClass);
  } else {
    h1.classList.add(activeClass);
  }
}

h1.addEventListener("click", onclickClassName);
```   

　 👉 className → classList / .add() & .remove()를 이용하여 직관적이고 클래스명을 터치하지 않고도 작업을 수행할 수 있다.
#
&nbsp;
&nbsp;
### 🚀 나아가기

&nbsp;

✔ 되도록 JS로는 클래스명을 변경하지 않도록 한다.   
✔ 더 간결하고 짧은 function으로 구축하여 실행 속도를 줄인다.   

&nbsp;

```java
function onclickClassName() {
  h1.classList.toggle("active");
}

h1.addEventListener("click", onclickClassName);
```   

　 👉 .toggle()은 boolean으로 token이 존재할 경우 제거해 주는 작업(vice versa)을 수행한다.
#
&nbsp;
&nbsp;
