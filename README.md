# Asserts Comparer (lit)

Create three ways to compare modified asserts(images/video/component?) between old and new. Like [this](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/25824)

![](./Snipaste_2023-05-27_18-48-48.png)

## How to use

```html
<script type="module" src="./asserts-comparer.mjs"></script>
<asserts-comparer mode="split">
    <img slot="one" src="https://placehold.co/500x200/000000/FFF" />
    <img slot="two" src="https://placehold.co/400x200" />
</asserts-comparer>
```

## Mode

* 2-up (`two-up`)
* Swipe (`split`)
* Onion skin(`blend`)
