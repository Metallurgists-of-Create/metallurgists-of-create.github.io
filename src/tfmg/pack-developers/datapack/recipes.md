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

## Coking

**Limits**
- Exactly **1** item ingredient
- Exactly **1** item output
- Exactly **2** fluid outputs

**Example**
```json
{
  "type": "tfmg:coking",
  "ingredients": [
    {
      "tag": "minecraft:logs_that_burn"
    }
  ],
  "processing_time": 600,
  "results": [
    {
      "id": "minecraft:charcoal"
    },
    {
      "amount": 2,
      "id": "tfmg:creosote"
    },
    {
      "amount": 20,
      "id": "tfmg:carbon_dioxide"
    }
  ]
}
```

---

## Distillation

**Limits**
- Exactly **1** fluid ingredient
- Between **3** and **6** fluid outputs
- Output order runs **bottom → top** (lowest index = bottom of the column)

**Example**
```json
{
  "type": "tfmg:distillation",
  "ingredients": [
    {
      "type": "neoforge:tag",
      "amount": 200,
      "tag": "c:heavy_oil"
    }
  ],
  "processing_time": 600,
  "results": [
    {
      "amount": 100,
      "id": "tfmg:heavy_oil"
    },
    {
      "amount": 50,
      "id": "tfmg:diesel"
    },
    {
      "amount": 50,
      "id": "tfmg:lubrication_oil"
    }
  ]
}
```

---

## Industrial Blasting

**Limits**
- Between **1** and **2** item ingredients
- Between **1** and **3** fluid outputs
- No item outputs

> [!Important]
> The inputs and results must be correctly ordered for this recipe.<br>
> - Input 1: The item to be melted.
> - Input 2: The flux (must be tagged as `tfmg:flux`)
> - Results 1-2: Primary fluid results, extracted from the Blast Furnace Output.
> - Result 3: Gas byproduct. Produced constantly over the duration of the recipe, if a Top Hatch is present.

**Example**
```json
{
  "type": "tfmg:industrial_blasting",
  "hot_air_usage": 20,
  "ingredients": [
    {
      "tag": "c:raw_materials/iron"
    },
    {
      "tag": "tfmg:flux"
    }
  ],
  "processing_time": 800,
  "results": [
    {
      "amount": 180,
      "id": "tfmg:molten_steel"
    },
    {
      "amount": 160,
      "id": "tfmg:molten_slag"
    },
    {
      "amount": 20,
      "id": "tfmg:furnace_gas"
    }
  ]
}
```

---

## Polarizing

**Limits**
- Exactly **1** item ingredient
- Exactly **1** item output
- No fluid inputs or outputs

> [!note]
> Polarising also has an optional `"energy"` integer, defaulting to 2000, which defines the power needed to process this recipe.

**Example**
```json
{
  "type": "tfmg:polarizing",
  "ingredients": [
    {
      "item": "tfmg:magnetic_alloy_ingot"
    }
  ],
  "results": [
    {
      "id": "tfmg:magnet"
    }
  ]
}
```

---

## Winding

**Limits**
- Exactly **2** item ingredients
- Exactly **1** item output
- No fluid inputs or outputs

> [!Important]
> The inputs must be correctly ordered for this recipe.<br>
> - Input 1: The item the spool is wound around.
> - Input 2: The spool (Must be in inheritor of `SpoolItem`)

> [!note]
> `"processing_time"` defines the amount of turns required for this recipe.

**Example**
```json
{
  "type": "tfmg:winding",
  "ingredients": [
    {
      "item": "tfmg:unfinished_electromagnetic_coil"
    },
    {
      "item": "tfmg:copper_spool"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "components": {
        "tfmg:coil_turns": 100
      },
      "id": "tfmg:electromagnetic_coil"
    }
  ]
}
```

---

## Hot Blasting (aka Air Blasting)

**Limits**
- Exactly **2** fluid ingredients
    - The first entry is the "Input Tank" (air), piped into a side
    - The second entry is the "Fuel Tank" (fuel), piped into the bottom
- Exactly **2** fluid outputs
    - The first entry is the "Output Tank 1" (product), piped out of the top
    - The second entry is the "Output Tank 2" (byproduct), piped out of a side
- No item inputs or outputs

**Example**
```json
{
  "type": "tfmg:hot_blast",
  "ingredients": [
    {
      "type": "neoforge:tag",
      "amount": 50,
      "tag": "c:air"
    },
    {
      "type": "neoforge:tag",
      "amount": 10,
      "tag": "tfmg:blast_stove_fuel"
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "amount": 50,
      "id": "tfmg:hot_air"
    },
    {
      "amount": 50,
      "id": "tfmg:carbon_dioxide"
    }
  ]
}
```

## Chemical Vat
Vat recipes are more complex than the previous types due to the many different requirements that can be specified.
**Limits**
- Up to **4** item inputs, up to **1** fluid input
- Up to **3** item outputs, up to **2** fluid outputs
- At least one input and one output are required


| Field | Purpose |
|---|---|
| `heat_level` | Any integer heat level. |
| `pressure` | Pressure requirement: can be positive or negative. Remove for a pressureless recipe. |
| `machines` | The machine(s) that must be attached to the vat (see below). |
| `allowed_vat_types` | Restricts which vat materials the recipe can run in (see below). |
| `min_size` | Minimum vat size. Defaults to `1`. |

**Machines**<br>
See [TFMGVatOperations](https://github.com/Metallurgists-of-Create/Create-TFMG-CE/blob/1.21.1/src/main/java/com/drmangotea/tfmg/registry/TFMGVatOperations.java) for the full list.
- `tfmg:graphite_electrode` - single graphite electrode, list 3 for Arc Blasting
- `tfmg:centrifuge` - centrifuge
- `tfmg:mixer` - mixing
- `tfmg:electrode` - single electrode, list 2 for Electrolysis

**Vat types**<br>
See [TFMGVatTypes](https://github.com/Metallurgists-of-Create/Create-TFMG-CE/blob/1.21.1/src/main/java/com/drmangotea/tfmg/registry/TFMGVatTypes.java) for the full list.
- `tfmg:steel`
- `tfmg:cast_iron`
- `tfmg:fireproof`
- If omitted entirely, **any** vat type is accepted

**Example**
```json
{
  "type": "tfmg:vat",
  "allowed_vat_types": [
    "tfmg:fireproof"
  ],
  "heat_level": 2,
  "ingredients": [
    {
      "item": "minecraft:netherite_scrap"
    },
    {
      "type": "neoforge:tag",
      "amount": 360,
      "tag": "c:molten_steel"
    }
  ],
  "machines": [
    "tfmg:graphite_electrode",
    "tfmg:graphite_electrode",
    "tfmg:graphite_electrode"
  ],
  "min_size": 1,
  "results": [
    {
      "amount": 360,
      "id": "createbigcannons:molten_nethersteel"
    }
  ]
}
```

