---
prev:
    text: KubeJS Integration
    link: /tfmg/pack-developers/kubejs/registry/vats

title: "Create: TFMG"
description: Engine and Cylinder Registration
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---
> [!INFO]
> Due to how engine fuels and cylinders work, there are two parts to creating custom fuels

# Startup
This is engine cylinders and fuels are defined
```js
TFMGEvents.registerEngineFuel(event => {
    // This is the ID of the engine fuel, remember this for the server script.
    // Internally, this will be kubejs:water
    // Lang keys go by "engine_fuel.<namespace>.<path>", so this will be "engine_fuel.kubejs.water"
    // TFMGJS will automatically create the lang key, and this will show up as "Water"
    event.create("water")
        // This is where you tell TFMGJS what items can use this fuel id
        // This can also be a list of items
        .accepts("kubejs:water_cylinder")
})
```

# Server
## Defining Fuels
This is where you can do `/reload` for fuels to change. However, accepted items can **not** change as that requires a restart of Minecraft
```js
TFMGEvents.engineFuel(event => {
    // Use the same ID as from the startup script
    event.fuel("water")
        // A list of fluids and fluid tags are also accepted
        // ["magic_mod:rainbow_fluid", "some_mod:evil_fluid"]
        // #namespace:special_fuel
        .fluids("minecraft:water")
        // Speed modifier
        .speed(2.1)
        // Efficiency modifier (affects fuel consumption)
        .efficiency(1.4)
        // Torque modifier (affects Stress Units)
        .torque(2.4)
})
```

## Modifing Fuels
To be implemented

## Removing Fuels
To be implemented