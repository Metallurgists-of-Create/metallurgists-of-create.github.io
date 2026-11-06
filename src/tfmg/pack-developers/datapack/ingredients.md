---
prev:
  text: Ingredients Guide
  link: /tfmg/pack-developers/datapack

next: false

title: "Create: TFMG"
description: Ingredients Guide
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# Ingredients Guide

The following is a list of builtin Minecraft and NeoForge ingredient types and how to use them.

---

# Items
Item Ingredients are added by both Vanilla and NeoForge. Other mods you use might add their own types too. It is always good to check in case there is a custom type you may find useful.

---

## Unspecified
When an ingredient type is unspecified, you are using the vanilla type. This accepts either `item` **or** `tag` but not both.<br>
A list can also be accepted, however, unlike `neoforge:compound`, this list must only contain unspecified ingredients.

Example:
::: code-group
```json [Item]
{
  "item": "minecraft:dirt"
}
```
```json [Tag]
{
  "tag": "c:ingots"
}
```
```json [List]
[
  {
    "item": "minecraft:dirt"
  },
  {
    "tag": "c:ingots"
  }
]
```
:::

---

## Block Tag
This ingredient parses a block tag to return valid items.<br>
This should be used for cases where you'd use an item tag, but there is only a block tag available.

Example: (Returns any blocks convertable to mud)
```json
{
  "type": "neoforge:block_tag",
  "tag": "minecraft:convertable_to_mud"
}
```

---

## Compound
This ingredient contain a list of any other ingredients.

Example: (Returns any blocks convertable to mud, and any ingots)
```json
{
  "type": "neoforge:compound",
  "children": [
    {
      "type": "neoforge:block_tag",
      "tag": "minecraft:convertable_to_mud"
    },
    {
      "tag": "c:ingots"
    }
  ]
}
```

---

## Components
This ingredient allows for restricting an input to also include specific data components.<br>
The boolean `strict` denotes strict matching (true) or partial matching (false). Strict matching means the data components must match exactly, 
while partial matching means the data components must match, but other data components may also be present.

Example: (Returns dirt with a resistance value of 1)
```json
{
  "type": "neoforge:components",
  "items": "minecraft:dirt",
  "components": {
    "tfmg:resistance": 1
  },
  "strict": false
}
```

---

## Difference
This ingredient matches everything in the first ingredient that doesn't also match the second ingredient.

Example: (Returns all flammable planks)
```json
{
  "type": "neoforge:difference",
  "base": {
    "tag": "minecraft:planks"
  },
  "subtracted": {
    "tag": "minecraft:non_flammable_wood"
  }
}
```

---

## Intersection
This ingredient matches everything that matches all sub-ingredients.

Example: (Returns all non-flammable planks)
```json
{
  "type": "neoforge:intersection",
  "children": [
    {
      "tag": "minecraft:planks"
    },
    {
      "tag": "minecraft:non_flammable_wood"
    }
  ]
}
```

---

# Fluids
Fluid Ingredients are added by NeoForge. Other mods you use might add their own types too. It is always good to check in case there is a custom type you may find useful.

## Single
This ingredient specifies a single valid fluid.

Example: (Returns 90mB of Molten Steel)
```json
{
  "type": "neoforge:single",
  "amount": 90,
  "fluid": "tfmg:molten_steel"
}
```

---

## Tag
This ingredient specifies a single valid fluid tag.

Example: (Returns 90mB of `c:molten_steel`)
```json
{
  "type": "neoforge:tag",
  "amount": 90,
  "tag": "c:molten_steel"
}
```

---

## Empty
This ingredient takes no arguments and will only match if the fluid is empty (0mB of empty) or `null`.

Example:
```json
{
  "type": "neoforge:empty"
}
```

---

## Compound
This ingredient contain a list of any other ingredients.

Example: (Returns 500mB of Hot Air and 250mB of any Water)
```json
{
  "type": "neoforge:compound",
  "children": [
    {
      "type": "neoforge:single",
      "amount": 500,
      "fluid": "tfmg:hot_air"
    },
    {
      "type": "neoforge:tag",
      "amount": 250,
      "fluid": "c:water"
    }
  ]
}
```

---

## Components
This ingredient allows for restricting an input to also include specific data components.<br>
The boolean `strict` denotes strict matching (true) or partial matching (false). Strict matching means the data components must match exactly,
while partial matching means the data components must match, but other data components may also be present.

Example: (Returns Hot Air with a resistance value of 1)
```json
{
  "type": "neoforge:components",
  "fluids": "tfmg:hot_air",
  "components": {
    "tfmg:resistance": 1
  },
  "strict": false
}
```

---

## Difference
This ingredient matches everything in the first ingredient that doesn't also match the second ingredient.

Example: (Returns all molten steel that isn't Create Big Cannons' molten steel)
```json
{
  "type": "neoforge:difference",
  "base": {
    "tag": "c:molten_steel"
  },
  "subtracted": {
    "fluid": "createbigcannons:molten_steel"
  }
}
```

---

## Intersection
This ingredient matches everything that matches all sub-ingredients.

Example: (Returns all firebox-fuel gasses)
```json
{
  "type": "neoforge:intersection",
  "children": [
    {
      "tag": "tfmg:gas"
    },
    {
      "tag": "tfmg:firebox_fuel"
    }
  ]
}
```
