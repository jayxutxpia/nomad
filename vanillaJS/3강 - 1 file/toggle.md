# ๐ #3.7 CSS in JavaScript - part 2-3
###### ์ผ์: 22/01/23  โ  ์์ฑ์ผ: 22/01/24
&nbsp;

```java
// (...)
// querySelector๋ก h1์ ์ง์ , active ํด๋์ค๋ช์ ์ถ๊ฐํ๋ ค๊ณ  ๊ฐ์ 

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

โ ํด๋์ค๋ช์ ์ถ๊ฐ/์ ๊ฑฐํ๊ณ  ์ถ์ ๋ if-else๋ฌธ์ ์ฌ์ฉํด๋ ๋๋ค.  
โ ์ด๋ ํด๋์ค๋ช์ CSS์์ ์ง์ ํด ์ค ์ด๋ฆ๊ณผ ์ผ์นํด์ผ ์ฝ๋๊ฐ ์ ์์ ์ผ๋ก ์ํ๋๋ค.

#

&nbsp;
&nbsp;

### โ ๋ฌธ์ ์ 

&nbsp;

โ raw string์ ์ฌ์ฉ์ด ์ฆ์ผ๋ฉด CSS์์ ํด๋์ค๋ช์ ๋ณ๊ฒฝํ๊ฑฐ๋ ์คํ๋ฅผ ๋ผ ๊ฒฝ์ฐ, ์ผ์ผ์ด ์์ ํด ์ค์ผ ํ๋ค๋ ๋ฒ๊ฑฐ๋ก์์ด ์๋ค.

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

๐ ๋ณ์๋ก ๋ฐ๋ก ์ง์ ํ์ฌ ์ค๋ฅ๋ฅผ ๋ฒํ  ํ๋ฅ ์ ์ค์ฌ ์ค ์ ์๋ค.

##

&nbsp;

โ ์์ ์ฝ๋๋ก ์คํํ  ๊ฒฝ์ฐ, HTML์์ ์ง์ ํด ์ค ํด๋์ค๋ช๊น์ง ์ ๊ฑฐ๊ฐ ๋๋ ๋ฌธ์ ๊ฐ ๋ฐ์ํ๋ค.  
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

๐ ํด๋น ํด๋์ค๋ช์ ์ถ๊ฐ๋ก ๋ฃ์ด์ฃผ๋ ๋ฐฉ๋ฒ๋ ์๋ค.

๐ ๊ทธ๋ฌ๋, ์ด๋ ๋๋ค๋ฅธ ๋ฒ๊ทธ๊ฐ ๋ฐ์ํ  ๊ฐ๋ฅ์ฑ์ด ์๋ค.  
ใ ๐ ํด๋์ค ์์  ์์ JS์ CSS๊น์ง ๋ชจ๋ ์์ ํด ์ค์ผ ํ๋ ๋ฌธ์ ๊ฐ ์๊ธฐ์ ์ข์ ๋ฐฉ๋ฒ์ ์๋๋ค.  
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

๐ className โ classList / .add() & .remove()๋ฅผ ์ด์ฉํ์ฌ ์ง๊ด์ ์ด๊ณ  ํด๋์ค๋ช์ ํฐ์นํ์ง ์๊ณ ๋ ์์์ ์ํํ  ์ ์๋ค.

#

&nbsp;
&nbsp;

### ๐ ๋์๊ฐ๊ธฐ

&nbsp;

โ ๋๋๋ก JS๋ก๋ ํด๋์ค๋ช์ ๋ณ๊ฒฝํ์ง ์๋๋ก ํ๋ค.  
โ ๋ ๊ฐ๊ฒฐํ๊ณ  ์งง์ function์ผ๋ก ๊ตฌ์ถํ์ฌ ์คํ ์๋๋ฅผ ์ค์ธ๋ค.

&nbsp;

```java
function onclickClassName() {
  h1.classList.toggle("active");
}

h1.addEventListener("click", onclickClassName);
```

๐ .toggle()์ boolean์ผ๋ก token์ด ์กด์ฌํ  ๊ฒฝ์ฐ ์ ๊ฑฐํด ์ฃผ๋ ์์(vice versa)์ ์ํํ๋ค.

#

&nbsp;
&nbsp;
