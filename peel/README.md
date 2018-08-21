# copyright-peel

This is a couple of simple lines of Javascript to embed a page peel to warn against the EU copyright reform. You can check out how it looks on [my website](https://nini.su).

## How do I use it?

Add the following line to the end of the ```<body>``` of your website. Important! This does not work if you add it to the ```<head>``` of your website.

```
<script type="text/javascript" src="https://saveyourinternet.today/peel/snippet.js"></script>
```

If you want to have the peel in another corner than the left upper one, you can use one of these scripts instead:

```
<script type="text/javascript" src="https://saveyourinternet.today/peel/snippet-right-top.js"></script>
<script type="text/javascript" src="https://saveyourinternet.today/peel/snippet-left-bottom.js"></script>
<script type="text/javascript" src="https://saveyourinternet.today/peel/snippet-right-bottom.js"></script>
```

Alternatively, you can also host the script yourself and change a couple of settings inside the Javascript file (first 4 lines).

```
var peelCorner = 'left-top' // 'left-top' or 'right-top' or 'left-bottom' or 'right-bottom'
var peelClass = 'copyright-peel'
var peelBg = 'https://saveyourinternet.today/peel/bg.svg'
var peelBgBottom = 'https://saveyourinternet.today/peel/bg_bottom.svg'
```

## License

This project was made by [Bernhard Hayden](https://nini.su) and is licensed under [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/), which means that you can use it in any way you would like even without attributing the work to the author.
