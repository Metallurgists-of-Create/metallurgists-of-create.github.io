---
prev:
    text: Registering Mixers
    link: /tfmg/pack-developers/kubejs/registry/vat/mixer

title: "Create: TFMG"
description: Registering Electrodes
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---
# Electrodes

First, you would need to create an [item](https://kubejs.com/wiki/tutorials/item-registry) using a model similar to an electrode (See [copper_electrode_mode.json](https://github.com/Metallurgists-of-Create/Create-TFMG-CE/blob/1.21.1/src/main/resources/assets/tfmg/models/item/copper_electrode_model.json) for example.)

Once you have the model and item setup correctly, you can now tell TFMG to use that item!

This must be put inside `startup_scripts`
```js
StartupEvents.registry("tfmg:electrodes", event => {
    event.create("super_electrode")
        .properties(p => 
            // Resistance is an int only. This is optional as it defaults to no resistance (0)
            .resistance(5)

            // You MUST have a vat operation registered so the vat knows what machine this is
            .operation("kubejs:some_operation") 
        )
        
        // Using the item registered, this tells TFMGJS to put these items for this electrode id
        // A list of items can also be used if you have more than one item for the same electrode type
        .accepts("kubejs:super_electrode") 

        // This is called on every tick of the electrode holder using this electrode
        .onTick((controller, level, pos, active, clientTick) => {
            // The following arguments provided are:
            // controller - VatBlockEntity (The controller vat block)
            // level      - Level          (Either a server or client level. Use clientTick to check for sideness)
            // pos        - BlockPos       (The position of the electrode)
            // active     - boolean        (If electricity is being provided to the electrode holder)
            // clientTick - boolean        (If onTick is being called on the client)

            // See SparkingElectrode#tick or ArcElectrode#tick for examples 
        })
})
```