# Amsterdam_Metro
Show the metro line of Amsterdam over the years.

# Progressive Enhancement
> *Progressive Enhancement (PE) is the principle of starting with a rock-solid foundation and then adding enhancements to it if you know certain visiting user-agents can handle the improved experience.* - [Sam Dwyer](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/)
## Images

__Disabling images__

- Chrome: Settings -> Advanced -> Content Settings -> Do not show any images
- Firefox: about:config -> permissions.default.image -> 2 (all images) of 3 (third-party images)
- Safari: Settings -> Advanced -> Show Develop menu in menu bar -> Develop -> Disable images

__Result__ 

![result of disabling images](/readme-assets/images-progressive.PNG)

__Change__

When disabling images no images are displayed, also there is no alt text. So what I did is generating alt text in the template engine, so that even if no images are displayed, there is still something to read.

```javascript
let directive = {
						photo: {
							src: function () {
								return this.photo
							},
							alt: function () {
								return this.title
							}
							
						}
					}
```

__Result__

![add alt text](/readme-assets/images-progressive-add-alt-text.PNG)

## Custom font

__Disabling font__

- Chrome: extensie (of --disable-remote-fonts als command line switch)
- Firefox: about:config -> gfx.downloadable_fonts.enabled -> false
- Safari: extensie (https://github.com/lurado/SansFonts, 1Blocker)

__Result__

![result of disabling font](/readme-assets/font-progressive.PNG)

When disabling the font the font somehow doesn't change, this is maybe do though loading the font from a 3rd party (google) 

It still works with disabling the font, so I'll will change nothing to the code

## Javacript

The whole site is created in javascript so when disabling this, the whole site is shut down. No result is displayed.

__Change__
The base functionality of the site is showing the tram and metro line. So one solution for this can be fetching the lines from the server.

## Color

__Windows__: You can apply different color filter by going to Settings > Ease of Acces > Color and highcontrast

![Window ease of acces settings](/readme-assets/color-settings-progressive.PNG)


__Gray scale__
![adding gray scale](/readme-assets/color-grey-scale-progressive.PNG)

When enabling gray scale the lines are not easy to differenciate between each other.

__Change__

One thing we can add is a texture on the lines so that even if the colors are the same, there is still something to differenciate between the lines.

__Inverted colors__

!['adding inverted colors'](/readme-assets/color-inverted-progressive.PNG)

When enabling inverting the colors, the lines are still easy to differenciate. So no changes here.

__Protanopia__

>*Protanopia (1% of males): Lacking the red cones for long-wavelength sensitive retinal cones, those with this condition are unable to distinguish between colors in the green–yellow–red section of the spectrum.* - [wikipedia](https://en.wikipedia.org/wiki/Color_blindness#Protanopia)

__Result__

!['Result when protanopia filter is applied'](/readme-assets/color-protanopia-progressive.PNG)

After applying the protanopia filter, the lines are still easy enough to differenciate between each other, so we don't need to apply any changes.

__Tritanopia__

>*Tritanopia (less than 1% of males and females): Lacking the short-wavelength cones, those affected see short-wavelength colors (blue, indigo and a spectral violet) greenish and drastically dimmed, some of these colors even as black. Yellow is indistinguishable from pink, and purple colors are perceived as various shades of red.* - [wikipedia](https://en.wikipedia.org/wiki/Color_blindness#Tritanopia)

__Result__

!['Result when tritanopia filter is applied'](/readme-assets/color-tritanopia-progressive.PNG)

After applying the trianopia filter, we can still differenciate between all the lines, so also no changes here.

## Breedband

__Chrome:__ Open the devloper tool > Network > Slow 3g

!['Network tab in chrome developer tool'](/readme-assets/breedband-throttle-progressive.PNG)

__Result__

!['Network tab in chrome developer tool'](/readme-assets/breedband-result-progressive.PNG)

__Change__

As you can see on the result image, the site is only usable after 17s on slow 3g. This is unacceptable. Also when clickin on a line, the image are very slowly loaded. 

What we can do to improve the perceiving speed, is loading the lines first. This is because the lines are our core functionality. Then when we're loading the map, the map should be cached or saved on the local storage, this is to have it load immediately when the user is visiting the site again. As for images, we should load less of them. What we're doing now is loading the whole image galery from the database. What we should do is loading maybe three or four images and then load more images after the user scrolled through all the images.

## Cookie

__Chrome:__ Settings > Advanced > Privacy and security >  Content settings > Cookies > Block 3rd parties

!['disable third parties cookies'](/readme-assets/cookies-disable-progressive.PNG)

__Result__
Because the site is not using any cookies, there is no change to performance of the site. So no changes here.

##  Local storage
__Chrome:__  Developer tool > Application > Local storge > Clear local storage

!['clear local storage'](/readme-assets/local-storage-clear-progressive.PNG)

__Result__

Like the cookies, we're not using any local storage functions, so the site is not affected if we clear the local storage.

## Trackpad
for this test we'll disable the trackpad and only use the keyboard

__Result__

Immediately when we try to navigate through the site, there is no highlight on focus. We can't even select any line with the keyboard. After activating the lines with the keyboard the images are displayed. When trying to navigate through the images there is also no highlight.

__Change__

The lines should've a tab-index or an anchor element to be able to navigate through the lines with an keyboard, also the Images should've a focus state so that the user know where they are when tabbing through the site.

!['added border to images'](/readme-assets/trackpad-focus-progressive.PNG)