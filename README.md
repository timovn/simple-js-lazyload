# Simple JS lazyload
by Timo van Neerden, 2018

---

This JS script enables you to have a “lazyload” for the images on your webpages.
It detects the images that are on screen and load them. The images that are not are not loaded until they are on screen (actually they are even loaded slightly before ;)).

This script also comes with a slightly improvment that reduces CPU load.


## Usage

- Change the images you wish to lazyload from `<img src="myimg.jpg" />` to `<img data-src="myimg.jpg" class="lazyload" />` ;
- Put the JS code at the end of your document ;
- Enjoy.

## Demo

- [Here](https://lehollandaisvolant.net/tout/examples/lazy-lazyload/).
