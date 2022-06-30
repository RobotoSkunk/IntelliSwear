# IntelliSwear
A simple and intelligent library for censorship detection.


## Why this was created?
Have you ever played an online game with a censorship filter? Or have you ever commented on a website with a censorship filter? What commonly happens is that the filter is not working properly, or the filter is not detecting the censorship correctly.

Commonly censorship filters works like...

1. Store the censored words in a list.
2. Check if the comment contains the censored words.
3. If it does, then the comment is censored.

And that's all, but the problem is that the censorship filter is not detecting the censorship correctly, or it censored wrong words.


### By example...
Let's imagine I'm playing a game, like Minecraft. I speak spanish and I wanted to say `"¿Tienes lana negra?"` but I was censored by the filter. Why? Because the word `negra` is in the list of censored words.

That word is a slur in English, so I can't say it, even if I'm talking Spanish. But in spanish it's not a slur, it's just a color.

... and Roblox is even worse than Minecraft filter.


## So, that's why I created this library.
This library is currently in beta, so I'm not sure if it will work properly. The purpose of this library is to detect bad words in an intelligent way.

It censors bad words in a smart way, so I can say `"¿Tienes lana negra?"` in spanish and it will not be censored, but in english it will be censored.

This library works with the following parameters at the moment:
- **Language**: The language where the bad word will be censored.
- **Severity**: The severity of the word.
- **Type**: The type of slur that the word is.


### Postdata
*I was using GitHub Copilot to write this README, and it doesn't work with the word `n*gro` because it's censored by GitHub too... thank you developers, you know how to do job wrong.*


# Future plans
At the moment this library doesn't have a lot of features, but I'm working on it. I want to add more features, like:

- Detecting the language of text.
- Detecting if someone is using a word with a bad purpose.
- Detecting obvious attempts to bypass the censorship.

Also I want to export this library to a different language, so I can use it in other languages.


# Support
If you want to support this project to do the best swearing detection, you can open a pull request and I'll check it out.

## License
This project is licensed under the MIT license.

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
