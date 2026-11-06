---
prev:
  text: Datapack Functionality
  link: /tfmg/pack-developers/datapack

next: false

title: "Create: TFMG"
description: Datapack Recipes
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# Datapack Recipes

> [!WARNING]
> This page is under construction!

> [!NOTE]
> It is generally good practice to use your own namespace when creating datapack entries.<br>
> It avoids polluting the TFMG namespace and makes debugging easier.

## Quick reference

Every recipe type has a fixed "shape". The number of item/fluid inputs and outputs it will accept.

| Recipe type          | Item inputs | Fluid inputs | Item outputs | Fluid outputs |
|-----------------------|:-----------:|:------------:|:-------------:|:--------------:|
| `tfmg:casting`              | 0           | 1            | 1             | 0              |
| `tfmg:coking`               | 1           | 0            | 1             | 2              |
| `tfmg:distillation`         | 0           | 1            | 0             | 3–6            |
| `tfmg:industrial_blasting`  | 1–2         | 0            | 0             | 1–3            |
| `tfmg:polarizing`           | 1           | 0            | 1             | 0              |
| `tfmg:winding`              | 2           | 0            | 1             | 0              |
| `tfmg:hot_blast`            | 0           | 2            | 0             | 2              |
| `tfmg:vat`                  | 0–4         | 0–1          | 0–3           | 0–2            |

To get to know ingredients, see [Ingredients Guide](/tfmg/pack-developers/datapack/ingredients)

---

## Casting

**Limits**
- Exactly **1** fluid ingredient
- Exactly **1** item output
- No fluid outputs

**Example**
```json
{
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:tag",
      "amount": 90,
      "tag": "c:molten_steel"
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "id": "tfmg:steel_ingot"
    }
  ]
}
```

---
