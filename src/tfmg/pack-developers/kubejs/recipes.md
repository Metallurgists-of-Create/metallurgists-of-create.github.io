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
> The example scripts below are only meant to demonstrate the recipe syntax. They are not
> a complete or balanced recipe pack.
> Any recipe that doesn't specify a processing time defaults to **100 ticks**.

All recipes are registered inside a `ServerEvents.recipes(event => { ... })` block using
`event.recipes.tfmg.<recipe_type>(...)`.

## Quick reference

Every recipe type has a fixed "shape". The number of item/fluid inputs and outputs it will accept.

| Recipe type          | Item inputs | Fluid inputs | Item outputs | Fluid outputs |
|-----------------------|:-----------:|:------------:|:-------------:|:--------------:|
| `casting`              | 0           | 1            | 1             | 0              |
| `coking`               | 1           | 0            | 1             | 0–2            |
| `distillation`         | 0           | 1            | 0             | 1–6            |
| `industrial_blasting`  | 1–2         | 0            | 0             | 0–3            |
| `polarizing`           | 1           | 0            | 1             | 0              |
| `winding`              | 1–2         | 0            | 1             | 0              |
| `hot_blast`            | 0           | 1–2          | 0             | 1–2            |
| `vat_machine_recipe`   | 0–4         | 0–4          | 0–4           | 0–4            |

---

## Casting
**Syntax:** `casting(fluidIngredient, itemOutput[], processingTime)`

**Limits**
- Exactly **1** fluid ingredient
- Up to **3** item outputs

**Example**
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.casting("minecraft:lava", "minecraft:sand", 150)
})
```

---

## Coking
**Syntax:** `coking(itemIngredient, [itemOutput | fluidOutput], processingTime)`

**Limits**
- Exactly **1** item ingredient
- Exactly **1** item output
- Up to **2** fluid outputs

**Example**
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.coking("minecraft:mud", ["minecraft:dirt", Fluid.water(1000)], 200)
})
```

---

## Distillation
**Syntax:** `distillation(fluidIngredient, fluidOutput[])`

**Limits**
- Exactly **1** fluid ingredient
- Up to **6** fluid outputs
- Output order runs **bottom -> top** (lowest index = bottom of the column)

**Example**
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.distillation("minecraft:water", ["tfmg:air", "minecraft:lava"])
})
```

---

## Industrial Blasting
**Syntax:** `industrial_blasting(itemIngredient[], fluidOutput[], processingTime)`

**Limits**
- Up to **2** item ingredients
- Up to **3** fluid outputs

**Example**
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.industrial_blasting(["minecraft:anvil", "minecraft:dirt"], ["minecraft:water"], 200)
})
```

---

## Polarizing
**Syntax:** `polarizing(itemIngredient, itemOutput, energyNeeded)`

**Limits**
- Exactly **1** item ingredient
- Exactly **1** item output

**Example**
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.polarizing("minecraft:sand", "minecraft:glass", 500)
})
```

---

## Winding
**Syntax:** `winding(itemIngredients[], itemOutput, processingTime)`

**Limits**
- Up to **2** item ingredients
- Exactly **1** item output

**Example**
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.winding(["minecraft:dirt", "minecraft:stick"], "minecraft:sand", 200)
  event.recipes.tfmg.winding("minecraft:glass", "minecraft:sand", 150)
})
```

---

## Hot Blasting (aka Air Blasting)
**Syntax:** `hot_blast(fluidIngredient[], fluidOutput[], processingTime)`

**Limits**
- Up to **2** fluid ingredients
- Up to **2** fluid outputs

**Example**
```js
ServerEvents.recipes(event => {
  event.recipes.tfmg.hot_blast(["minecraft:water", "minecraft:lava"], "tfmg:air", 300)
  event.recipes.tfmg.hot_blast("minecraft:lava", "minecraft:air", 250)
})
```

---

## Chemical Vat
**Syntax**
```js
vat_machine_recipe([itemIngredient | fluidIngredient], [itemOutput | fluidOutput], machines[]?, vatTypes[]?, minSize?, processingTime?, heatRequirement?)
```

**Limits**
- Up to **4** item inputs, up to **4** fluid inputs
- Up to **4** item outputs, up to **4** fluid outputs
- At least one input and one output are required
- Stacked item counts (e.g. `Item.of("some:item", 2)`) are **not allowed**. List the same
  item multiple times instead: `["some:item", "some:item"]`

| Method | Purpose |
|---|---|
| `.heatLevel(int)` | Any positive integer heat level. |
| `.pressure(int)` | Pressure requirement: can be positive or negative. Remove for a pressureless recipe. |
| `.machines(...)` | The machine(s) that must be attached to the vat (see below). |
| `.allowedVatTypes(...)` | Restricts which vat materials the recipe can run in (see below). |
| `.minSize(int)` | Minimum vat size. Defaults to `1`. |
| `.processingTime(int)` | Processing time in ticks. |

**Machines** 
See [TFMGVatOperations](https://github.com/Metallurgists-of-Create/Create-TFMG-CE/blob/1.21.1/src/main/java/com/drmangotea/tfmg/registry/TFMGVatOperations.java)
for the full list. A count prefix repeats a machine (e.g., arc blasting needs three graphite electrodes):
- `.machines("tfmg:graphite_electrode")` - single graphite electrode
- `.machines("3x tfmg:graphite_electrode")` - three graphite electrodes (arc blasting)
- `.machines("tfmg:centrifuge")` - centrifuge
- `.machines("tfmg:mixing")` - mixing
- `.machines("tfmg:electrode")` - single electrode
- `.machines("2x tfmg:electrode")` - two electrodes (e.g. electrolysis)

**Vat types**
See [TFMGVatTypes](https://github.com/Metallurgists-of-Create/Create-TFMG-CE/blob/1.21.1/src/main/java/com/drmangotea/tfmg/registry/TFMGVatTypes.java)
For the full list:
- `.allowedVatTypes("tfmg:steel")` - steel vat
- `.allowedVatTypes("tfmg:cast_iron")` - cast iron vat
- `.allowedVatTypes("tfmg:fireproof")` - firebrick-lined vat
- Mix and match: `.allowedVatTypes("tfmg:steel", "tfmg:cast_iron")`
- If omitted entirely, **any** vat type is accepted

**Chance outputs**
Item outputs can carry a chance of being produced:
`Item.of("item here").withChance(chanceHere)`, where chance is on a **0–1** scale.

**Example**
```js
ServerEvents.recipes(event => {
  // Dirt -> diamond, needs superheating in a firebrick vat
  event.recipes.tfmg.vat_machine_recipe("minecraft:dirt", "minecraft:diamond")
    .heatLevel(10)
    .allowedVatTypes("tfmg:fireproof")
    .processingTime(500)

  // Sulfuric acid + hot air + water -> lava + mud, needs a mixer, works in any vat type
  event.recipes.tfmg.vat_machine_recipe(
    ["tfmg:sulfuric_acid", "tfmg:hot_air", "minecraft:water"],
    ["minecraft:lava", "minecraft:mud"]
  )
    .heatLevel(2)
    .machines("tfmg:mixing")
    .processingTime(250)
})
```
