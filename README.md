# DOP-Eye

A frontend homage to the Japanese pop artist Takashi Murakami.

## Table of Content

- [THE PROJECT](#the-project)
- [LIVE DEMO](#live-demo)
- [DEVELOPER ROADMAP](#roadmap)

## The Project <a name="the-project"></a>

I became intrigued by the potential of the Document Object Model (DOM) and the utilization of div elements or SVGs for [vector graphics](https://en.wikipedia.org/wiki/Vector_graphics). Being an artist who frequently employs vector graphics due to their scalability advantages, I had not yet experimented with SVGs within the realm of HTML. This sparked the idea of crafting a responsive rendition of [Takashi Murakmie's](https://en.wikipedia.org/wiki/Takashi_Murakami) jellyfish eyes, as depicted in the provided photos.

<img src="https://fineartmultiple.de/media/product/6f4/jellyfish-eyes-tmu-43-1501160216-300-dbd.jpg" width="250"> <img src="https://d16kd6gzalkogb.cloudfront.net/__sized__/auction_artwork_images/Takashi-Murakami-Jellyfish-Eyes-Painting-2000-thumbnail_webp-9999x9999.webp" width="250"> <img src="https://www.kollerauktionen.ch/CatCache/catcache.3/pictures/446492/446492_m_1.jpg" width="250">

The eye is constructed using a combination of div and SVG elements and is interactive, responding to user clicks. Upon clicking, a random RGB code is generated to color the relevant element. A mechanic is implemented to track the user's actions in the background. After five seconds of inactivity, the mechanic triggers a playback of the recorded actions, restoring the eye's colors to their original state. That's the gist of it.

<a name="live-demo"></a>
Visit the [life demo](sirpixiejerry.github.io/dop-eye/) to try it yourself.

### DEVELOPER ROADMAP <a name="roadmap"></a>

- [x] change element color
- [x] rewind to original color
- [x] scroll steps
- [x] add pause button
- [x] add undo button
- [x] add redo button
- [x] add info button
- [ ] add save button
- [ ] optimization for mobile devices
