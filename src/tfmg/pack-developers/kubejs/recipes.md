---
prev:
    text: Datapack Registries
    link: /tfmg/pack-developers/datapack

next: false

title: "Create: TFMG"
description: KubeJS Integration
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# KubeJS Integration

> [!NOTE]
> The example scripts provided are only here to demonstrate the recipes and are just examples.
> All recipes not given a processing time will default to `100` ticks!

# Recipes
## Casting
Syntax: `casting(fluidIngredient, itemOutput[], processingTime)`

Information:
- Only supports **one** fluid ingredient
- Item output cannot have more than 3 item outputs

Example:
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.casting("minecraft:lava", "minecraft:sand", 150)
})
```

## Coking
Syntax: `coking(itemIngredient, [itemOutput | fluidOutput], processingTime)`

Information:
- Only supports **one** item ingredient
- Item output cannot have more than 1 item output
- Fluid output cannot have more than 2 fluid outputs

Example:
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.coking("minecraft:mud", ["minecraft:dirt", Fluid.water(1000)], 200)
})
```

## Distillation
Syntax: `distillation(fluidIngredient, fluidOutput[])`

Information:
- Only supports **one** fluid ingredient
- Fluid output cannot have more than 6 fluid outputs
- The order of fluid outputs goes from bottom to top (from lower to higher index)

Example:
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.distillation("minecraft:water", ["tfmg:air", "minecraft:lava"])
})
```

## Industrial Blasting
Syntax: `industrial_blasting(itemIngredient[], fluidOutput[], processingTime)`

Information:
- Only supports up to **two** item ingredients
- Fluid output cannot have more than 3 fluid outputs

Example:
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.industrial_blasting(["minecraft:anvil", "minecraft:dirt"], ["minecraft:water"], 200)
})
```

## Polarizing
Syntax: `polarizing(itemIngredient, itemOutput, energyNeeded)`

Information:
- Only supports **one** item ingredient
- Item output cannot have more than 1 item output

Example:
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.polarizing("minecraft:sand", "minecraft:glass", 500)
})
```

## Winding
Syntax: `winding(itemIngredients[], itemOutput, processingTime)`

Information:
- Only supports up to **two** item ingredients
- Item output cannot have more than 1 item output

Example:
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.winding(["minecraft:dirt", "minecraft:stick"], "minecraft:sand", 200)
  event.recipes.tfmg.winding("minecraft:glass", "minecraft:sand", 150)
})
```

## Hot Blasting (aka Air Blasting)
Syntax: `hot_blast(fluidIngredient[], fluidOutput[], processingTime)`

Information:
- Only supports up to **two** fluid ingredients
- Fluid output cannot have more than 2 fluid outputs

Example:
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.hot_blast(["minecraft:water", "minecraft:lava"], "tfmg:air", 300)
  event.recipes.tfmg.hot_blast("minecraft:lava", "minecraft:air", 250)
})
```

## Chemical Vat
Syntax:
```js
vat_machine_recipe([itemIngredient | fluidIngredient], [itemOutput | fluidOutput], machines[]?, vatTypes[]?, minSize?, processingTime?, heatRequirement?)
```

> [!TIP]
> Read the info below so the syntax is less confusing!

Information:
- There can only be up to **four** item inputs
  - Stacking items in one entry (e.g., `Item.of("some:item", 2)`) is not allowed. Instead, list each item individually, like: `[js]["some:item", "some:item"]`.
- There can only be up to **four** fluid inputs
- Item output cannot have more than 4 item outputs
- Fluid output cannot have more than 4 fluid outputs
- Chemical vats can be heated by doing the following:
  - Heatless recipes do not need this method attached
  - `.heatLevel(int)`: This can be any positive integer
- Chemical vats can also be given a pressure requirement:
  - Pressureless recipes do not need this method attached
  - `.pressure(int)`: This can be a positive or negative integer
- Machines to make the results can have:
  - To see all vat operations (machines), see [TFMGVatOperations](https://github.com/Metallurgists-of-Create/Create-TFMG-CE/blob/1.21.1/src/main/java/com/drmangotea/tfmg/registry/TFMGVatOperations.java)
  - A graphite electrode can be added by doing `.machines("tfmg:graphite_electrode")`
    - For **arc blasting**, there would be three graphite electrodes. Example: `.machines("3x tfmg:graphite_electrode")`
  - A centrifuge can be added by doing `.machines("tfmg:centrifuge")`
  - Mixing can be added by doing `.machines("tfmg:mixing")`
  - Electrode can be added by doing `.machines("tfmg:electrode")`
    - For electrolysis or similar recipes, you would do `.machines("2x tfmg:electrode")`
- Chemical vat types to make the results can have:
  - To see all of TFMGs built-in vats, see [TFMGVatTypes](https://github.com/Metallurgists-of-Create/Create-TFMG-CE/blob/1.21.1/src/main/java/com/drmangotea/tfmg/registry/TFMGVatTypes.java)
  - Steel vat by adding `.allowedVatTypes("tfmg:steel")`
  - Cast Iron vat by adding `.allowedVatTypes("tfmg:cast_iron")`
  - Firebrick-lined vat by adding `.allowedVatTypes("tfmg:fireproof")`
    - Note: you can "mix-and-match" them by doing (for example): `.allowedVatTypes("tfmg:steel", "tfmg:cast_iron")`
    - Note: By default, when no vat types are present, TFMG will accept any vat type to be used
- You can set the minimum size of the vat by attaching `.minSize(int)` (replace int with the min size)
  - Note: If the method is not provided, it will default to a min size of 1
- To set the processing time, attach the method `.processingTime(int)` (replace the int with the processing time in ticks)
- The output also supports items with a chance of being made with `Item.of("item here").withChance(chance here)` (Chance is from a 0-1 scale)

> [!NOTE]
> To add more machines (for example, requiring 3 electrodes), you add more into the "machines" method. (Example: `.machine ("3x tfmg:electrode")`)

Example:
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.vat_machine_recipe("minecraft:dirt", "minecraft:diamond")
    .superheated() // Makes the vat require superheating
    .allowedVatTypes("tfmg:fireproof") // It's super hot, so we should use the firebrick vat for some realism
    .processingTime(500) // Takes 500 ticks to make dirt to diamonds

  // This recipe can be used in any vat type
  event.recipes.tfmg.vat_machine_recipe(["tfmg:sulfuric_acid", "tfmg:hot_air", "minecraft:water"], ["minecraft:lava", "minecraft:mud"])
    .heated() // Make this recipe use basic heating
    .machines("tfmg:mixing") // Make it where you have to have a mixer machine on top of the vat
    .processingTime(250) // Takes 250 ticks to make the ingredients into lava and mud
})
```
