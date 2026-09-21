---
prev:
    text: Engine Fuel Registration
    link: /tfmg/pack-developers/kubejs/registry/fuel/engine

title: "Create: TFMG"
description: Flamethrower Fuels
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# Flamethrower Fuels
## Adding Fuels
```js
TFMGEvents.flamethrowerFuel(event => {
    // A list of fluids and fluid tags are also accepted
    // ["magic_mod:rainbow_fluid", "some_mod:evil_fluid"]
    // #namespace:special_fuel
    event.create("minecraft:water")
        // Speed of the Flamethrower's projectiles
        .speed(20)
        // Amount of projectiles created by the Flamethrower (also affects the fuel consumption)
        .amount(1.4)
        // Fuel bar colour on the item
        .color(0xFFFFFF)
        // Spread of the Flamethrower's projectiles
        .spread(1.8) 
})
```

## Modifing Fuels
to be implemented

## Removing Fuels
to be implemented
