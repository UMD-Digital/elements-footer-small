# &lt;umd-footer-small&gt; element

## Installation

```
$ yarn add @umd/footersmall
```

## Basic Usage

#### Import the utility header in your js if you bundle using a transpile with babel or typescript.

```js
import '@umd/footersmall';
```

#### HTML usage

```html
<umd-footer-small
  youtube="https://www.youtube.com/user/UMD2101"
  facebook="https://www.facebook.com/UnivofMaryland"
  twitter="https://twitter.com/UofMaryland"
  instagram="https://www.instagram.com/univofmaryland/"
>
  <div slot="contact">
    <a href="https://www.usmd.edu/" target="_blank" rel="noopener noreferrer">
      The Flagship Institution of the State of Maryland
    </a>
    <address>
      <p>College Park, MD 20742, USA</p>
      <a href="tel:3014051000" aria-label="3014051000">301.405.1000</a>
    </address>
  </div>
  <div slot="links">
    <a href="http://calendar.umd.edu/" target="_blank" rel="noopener noreferrer"
      >Calendar</a
    >
  </div>
</umd-footer-small>
```

## License

Distributed under the MIT license. See LICENSE for details.
