---
prev:
    text: TFMG
    link: /tfmg/pack-developers/datapack

next: false

title: "Create: TFMG"
description: Engine Fuels
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# Engine Fuels

Engine Fuels are a datapack registry located at `data/<namespace>/tfmg/fuel_type/engine`

This is an example of how to format the file for an Engine Fuel: <br>
::: code-group
```json [Single Fluid]
{
  "efficiency": 0.4, // Efficiency modifier (affects fuel consumption)
  "fluids": "tfmg:creosote", // The fluid that will be used as fuel
  "speed": 0.7, // Speed modifier
  "torque": 0.5 // Torque modifier (affects Stress Units)
}
```
```json [Multiple Fluids]
{
  "efficiency": 0.4, // Efficiency modifier (affects fuel consumption)
  "fluids": ["tfmg:creosote", "tfmg:flowing_creosote"], // The fluids that can be used as fuel
  "speed": 0.7, // Speed modifier
  "torque": 0.5 // Torque modifier (affects Stress Units)
}
```
```json [Fluid Tag]
{
  "efficiency": 0.4, // Efficiency modifier (affects fuel consumption)
  "fluids": "#c:creosote", // The fluid tag that will be used as fuel
  "speed": 0.7, // Speed modifier
  "torque": 0.5 // Torque modifier (affects Stress Units)
}
```
:::
## Using your fuel in a Large Engine
Unlike other engines, Large Engines do not use "Cylinders" to determine their valid fuels, instead they use the `tfmg:large_engine` engine fuel tag located at `data/tfmg/tags/tfmg/fuel_type/engine/large_engine.json`

> [!WARNING]
> When adding your fuel to this tag it is important that you use the id of your fuel type and not the fluid it is valid for, as breaking the tag could cause a crash.

Only the valid fluids are important for Large Engines as they have static Efficiency, Speed and Torque.

## Using your fuel in an Engine
Engines determine their valid fuels through "Cylinder" items that are inserted into them. An engine can only ever have one type of cylinder, though they may require different amounts depending on type.
<br>
Cylinders are created through the `tfmg:engine_cylinder` data component and any item with this component is valid in an engine.
> [!NOTE]
> Turbine Engines restrict the insertion of items with the `tfmg:engine/cylinder` item tag. <br>
> Regular & Radial Engines restrict the insertion of items with the `tfmg:engine/turbine` item tag.

The component for Engine Cylinders is formatted as:
```json
{
  "valid_fuels": [
    "tfmg:creosote"
  ]
}
```

