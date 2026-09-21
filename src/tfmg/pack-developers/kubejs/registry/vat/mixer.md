---
prev:
    text: Vat Operations
    link: /tfmg/pack-developers/kubejs/registry/vat/operation

next:
    text: Registering Electrodes
    link: /tfmg/pack-developers/kubejs/registry/vat/electrode


title: "Create: TFMG"
description: Vat Operations and machine registration
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# Mixer Modes

## Registration

> [!NOTE]
> Due to how Rhino (JavaScript interpreter) works, you can't do `IndustrialMixerModels.getCentrifugeModel`.
> You need to have an arrow function in order for partial models to function. This may be a Rhino bug.

To see all `IndustrialMixerModels`, see [here](https://github.com/Metallurgists-of-Create/Create-TFMG-CE/blob/1.21.1/src/main/java/com/drmangotea/tfmg/content/machinery/vat/industrial_mixer/IndustrialMixerModels.java)

```js
StartupEvents.registry("tfmg:mixer_mode", event => {
    // Creates a mixer mode of kubejs:evil_mixing
    event.create("evil_mixing")
        .properties(p => p
          // You must set an operation as it will default to tfmg:none
          // This will use the vat operation kubejs:evil_mixing
          .operation("evil_mixing")

          // Partial, also known as Partial Models, are the models that would render inside the vat
          // Due to the above note, and until that's fixed, you would need to do the following:
          .partial((ch, th, be) => IndustrialMixerModels.getCentrifugeModel(ch, th, be)))

        // This function can also be a list of items (example: ["minecraft:deepslate", "minecraft:apple"])
        // This tells TFMG what items can be used for this mixer mode
        .accepts("minecraft:dirt");
})
```

## Custom Models
> [!NOTE]
> A dedicated event will be created to make creating custom Partial Models and built-in Partial Models easier.
> The following script is a temporary solution until a dedicated event is added

To see all of TFMG's Partial Models, see [here](https://github.com/Metallurgists-of-Create/Create-TFMG-CE/blob/1.21.1/src/main/java/com/drmangotea/tfmg/registry/TFMGPartialModels.java)

```js
.partial((ch, th, be) => {
// "ch" is "Current Height"; it is an int
// "th" is "Total Height"; it is an int
// "be" is "Block Entity"; it is an IndustrialMixerBlockEntity

// Here is an example:
// For each level of height, the model will be a mixer shaft.
// See IndustrialMixerModels for examples
return TFMGPartialModels.MIXER_SHAFT
})
```
