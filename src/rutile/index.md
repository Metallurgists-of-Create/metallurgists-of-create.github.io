---
layout: home

lastUpdated: false

hero:
  name: "Rutile"
  tagline: "API for easy material registry using flags."
  image:
    src: /assets/rutile-icon-large.webp
    alt: Rutile Icon


features:
  - title: For Users
    details: "Information for players."
    link: ./users/materials
    linkText: Read More
  - title: For Mod Developers
    details: "How to implement Rutile into your modding projects."
    link: ./mod-developers/depending
    linkText: Read More
  - title: For Pack Developers
    details: "How to modify Rutile for your modpack."
    link: ./pack-developers/kubejs
    linkText: Read More
---

# About

Rutile is an API that works similarly to how GregTech registers Materials but in a more standalone and expandable manner.

With it you can use plugins to create your own materials and elements, add and remove recipes on world load, and assign chemical compositions to items.

Materials can be expanded upon and modified with the use of Flags and prefixes. Prefixes can register new objects like Items and Blocks, and Flags can define the behaviour of a material like if its items can be used as furnace fuel.

