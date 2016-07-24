# hyperprogress

create a progress bar

``` js
var progress = require('hyperprogress')(10) //for a 10 step bar.

document.body.appendChild(progress)

progress.next() //go to next step
progress.next('step name') //append a step to the list.

//if the process fails, call with an error.
progress.fail(new Error('failed'))
```

has no dependencies. 1.4k

you'll need to use CSS to make the progress bar visible.
at minimum you need:

```
.hyperprogress__liquid { height: 1px; background: blue;}
```

## License

MIT

