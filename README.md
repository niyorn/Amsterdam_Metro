# Amsterdam_Metro
Show the metro line of Amsterdam over the years 

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

__Gray scale__
![adding gray scale](/readme-assets/color-grey-scale-progressive.PNG)

When enabling gray scale the lines are not easy to differenciate between each other.

__change__
One thing we can add is a texture on the lines so that even if the colors are the same, there is still something to differenciate between the lines.

__Inverted colors__
!['adding inverted colors'](/readme-assets/color-inverted-progressive.PNG)

When enabling inverting the colors, the lines are still easy to differenciate. So no changes here.



- Breedband
- Cookie
- Local storage
- Trackpad 