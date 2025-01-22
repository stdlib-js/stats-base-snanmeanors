<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# snanmeanors

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [arithmetic mean][arithmetic-mean] of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@8aea2a0cdd426388aeb325d5711205df9b5bd1af/lib/node_modules/@stdlib/stats/base/snanmeanors/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import snanmeanors from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-snanmeanors@esm/index.mjs';
```

#### snanmeanors( N, x, strideX )

Computes the [arithmetic mean][arithmetic-mean] of a single-precision floating-point strided array `x`, ignoring `NaN` values and using ordinary recursive summation.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = snanmeanors( x.length, x, 1 );
// returns ~0.3333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [arithmetic mean][arithmetic-mean] of every other element in `x`,

<!-- eslint-disable max-len -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ] );

var v = snanmeanors( 5, x, 2 );
// returns 1.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = snanmeanors( 5, x1, 2 );
// returns 1.25
```

#### snanmeanors.ndarray( N, x, strideX, offsetX )

Computes the [arithmetic mean][arithmetic-mean] of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation and alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = snanmeanors.ndarray( x.length, x, 1, 0 );
// returns ~0.33333
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [arithmetic mean][arithmetic-mean] for every other element in `x` starting from the second element

<!-- eslint-disable max-len -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );

var v = snanmeanors.ndarray( 5, x, 2, 1 );
// returns 1.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   If every indexed element is `NaN`, both functions return `NaN`.
-   Ordinary recursive summation (i.e., a "simple" sum) is performant, but can incur significant numerical error. If performance is paramount and error tolerated, using ordinary recursive summation to compute an arithmetic mean is acceptable; in all other cases, exercise due caution.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@esm/index.mjs';
import snanmeanors from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-snanmeanors@esm/index.mjs';

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var x = filledarrayBy( 10, 'float32', rand );
console.log( x );

var v = snanmeanors( x.length, x, 1 );
console.log( v );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/snanmeanors.h"
```

#### stdlib_strided_snanmeanors( N, \*X, strideX )

Computes the [arithmetic mean][arithmetic-mean] of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.

```c
const float x[] = { 1.0f, -2.0f, 0.0f/0.0f, 2.0f };

float v = stdlib_strided_snanmeanors( 4, x, 1 );
// returns ~0.3333f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
float stdlib_strided_snanmeanors( const CBLAS_INT N, const float *X, const CBLAS_INT strideX );
```

#### stdlib_strided_snanmeanors_ndarray( N, \*X, strideX, offsetX )

Computes the [arithmetic mean][arithmetic-mean] of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation and alternative indexing semantics.

```c
const float x[] = { 1.0f, -2.0f, 0.0f/0.0f, 2.0f };

float v = stdlib_strided_snanmeanors_ndarray( 4, x, 1, 0 );
// returns ~0.3333f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
float stdlib_strided_snanmeanors_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/snanmeanors.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, 2.0f, 0.0f/0.0f, 3.0f, 0.0f/0.0f, 4.0f, 5.0f, 6.0f, 0.0f/0.0f, 7.0f, 8.0f, 0.0f/0.0f };

    // Specify the number of elements:
    const int N = 6;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the arithmetic mean:
    float v = stdlib_strided_snanmeanors( N, x, strideX );

    // Print the result:
    printf( "mean: %f\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/dnanmeanors`][@stdlib/stats/base/dnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring NaN values and using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/stats-base/nanmeanors`][@stdlib/stats/base/nanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring NaN values and using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/stats-base/smeanors`][@stdlib/stats/base/smeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/stats-base/snanmean`][@stdlib/stats/base/snanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-snanmeanors.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-snanmeanors

[test-image]: https://github.com/stdlib-js/stats-base-snanmeanors/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-snanmeanors/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-snanmeanors/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-snanmeanors?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-snanmeanors.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-snanmeanors/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-snanmeanors/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-snanmeanors/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-snanmeanors/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-snanmeanors/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-snanmeanors/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-snanmeanors/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-snanmeanors/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-snanmeanors/main/LICENSE

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dnanmeanors]: https://github.com/stdlib-js/stats-base-dnanmeanors/tree/esm

[@stdlib/stats/base/nanmeanors]: https://github.com/stdlib-js/stats-base-nanmeanors/tree/esm

[@stdlib/stats/base/smeanors]: https://github.com/stdlib-js/stats-base-smeanors/tree/esm

[@stdlib/stats/base/snanmean]: https://github.com/stdlib-js/stats-base-snanmean/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
