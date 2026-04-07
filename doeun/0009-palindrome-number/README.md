<h2><a href="https://leetcode.com/problems/palindrome-number">9. Palindrome Number</a></h2><h3>Easy</h3><hr><p>Given an integer <code>x</code>, return <code>true</code><em> if </em><code>x</code><em> is a </em><span data-keyword="palindrome-integer"><em><strong>palindrome</strong></em></span><em>, and </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = 121
<strong>Output:</strong> true
<strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> x = -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> x = 10
<strong>Output:</strong> false
<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it without converting the integer to a string?

---

[9. Palindrome Number](https://leetcode.com/problems/palindrome-number/description/?envType=study-plan-v2&envId=top-interview-150)

간단한거 풀고 싶어서 palindrome 풀었습니다.

### 1. 하수: 문자열 반전 (String Reversal)
방법: x.toString().split('').reverse().join('')
> 불필요한 메모리 할당(문자열, 배열)이 너무 많아 성능 구림

### 2. 중수: 투 포인터 (Two Pointers)
방법: left = 0, right = length - 1로 양 끝에서 중앙으로 비교.
> 하지만 length를 알기 위해 결국 문자열로 치환 필요

### 3.  한 스텝 더 밟기
방법: 문자열 치환 없이 **사칙연산(%, *, /)**만 사용.
>  숫자를 10으로 나눈 나머지는 항상 **'일의 자리'**라는 점을 이용

~~어렵다? 그럼 2번으로 가자~~ 

``` js
let xCopy = x;
    let rev = 0;

    while (x > 0) {
        // 맨 뒷자리 추출
        // 10으로 나눈 수의 나머지는 항상 일의 자리 
        let rem = x % 10;
        // 기존 숫자를 한 칸 왼쪽으로 밀고(10 곱하기),
        //  새 숫자 추가
        rev = (rev * 10) + rem;
        // 3. 사용한 뒷자리 제거
        x = Math.floor(x / 10);
    }

    // 원본 복사본과 뒤집은 숫자가 같은지 비교
    return rev === xCopy;

```
<p>그니까...이게 123로 가정했을때 321을 만들기 위해서는...</p>
<p>10 나눴을때 3 나머지 => 3</p>
<p>2 가져와서 3 * 10 + 2 = > 32</p>
<p>1 가져와서 32 * 10 + 1 => 321</p>

예... 지나가면서 한번씩 알아두면 좋을거같네요...
