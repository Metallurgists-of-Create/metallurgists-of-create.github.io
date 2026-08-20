---
prev:
    text: KubeJS
    link: /hematite/kubejs

title: Hematite
description: Tick Sources
image: https://metallurgists-of-create.github.io/assets/empty-icon-large.webp
---

# Tick Sources

Hematite adds a registry for "Tick Sources". They have no properties and are used as a way to determine the origins of a tick. Block Growths utilise Tick Sources to restrict the growth to certain conditions.
For example, a Growth with the source "hematite:lightning" will only be ticked when lightning strikes a block. 

Hematite has support for Tick Sources to be registered via KubeJS startup scripts.

::: code-group
```javascript [Replacing a sky access tick source]
    //Startup Script
    StartupEvents.registry('hematite:tick_sources', event => {
        event.create('thunder')
    });

    //Server Script
    HematiteEvents.skyTickSource(event => {
        if(event.getLevel().isThundering()) {
            event.setTickSource(HematiteObjects.getTickSource('kubejs:thunder'));
        }
    });
```
```javascript [Calling a tick source directly]
    //Startup Script
    StartupEvents.registry('hematite:tick_sources', event => {
        event.create('explosion')
    });

    //Server Script
    LevelEvents.afterExplosion(event => {
        for (let block of event.affectedBlocks) {
            Hematite.blockGrowth.callGrowth(HematiteObjects.getTickSource('kubejs:explosion'), block.level, block.pos);
        }
    });
```
:::
