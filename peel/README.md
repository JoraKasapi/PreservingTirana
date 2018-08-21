# copyright-peel

This is a couple of simple lines of Javascript to embed a page peel to warn against the EU copyright reform. You can check out how it looks on [my website](https://nini.su).

## How do I use it?

Add the following line to the end of the ```<body>``` of your website. Important! This does not work if you add it to the ```<head>``` of your website.

```
<script type="text/javascript" src="https://saveyourinternet.today/peel/snippet.js"></script>
```

There are a couple of settings that you can change inside the Javascript file (first 4 lines), but you will have to host it yourself if you make any changes. (Recommended anyways!)

```
var peelCorner = 'left-top' // 'left-top' or 'right-top' or 'left-bottom' or 'right-bottom'
var peelClass = 'copyright-peel'
var peelBg = 'https://saveyourinternet.today/peel/bg.svg'
var peelBgBottom = 'https://saveyourinternet.today/peel/bg_bottom.svg'
```

## License

This project was made by [Bernhard Hayden](https://nini.su) and is licensed under [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/), which means that you can use it in any way you would like even without attributing the work to the author.
