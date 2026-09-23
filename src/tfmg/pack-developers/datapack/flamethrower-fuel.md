---
prev:
    text: Datapack Functionality
    link: /tfmg/pack-developers/datapack

next: false

title: "Create: TFMG"
description: Flamethrower Fuels
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# Flamethrower Fuels

Flamethrower Fuels are a datapack registry located at `data/<namespace>/tfmg/fuel_type/flamethrower`

This is an example of how to format the file for a Flamethrower Fuel: <br>
::: code-group
```json [Single Fluid]
{
  "amount": 15, // Amount of projectiles created by the Flamethrower (also affects the fuel consumption)
  "color": 10733129, // Fuel bar colour on the item
  "fluids": "tfmg:napalm", // The fluid that will be used as fuel
  "speed": 1.8, // Speed of the Flamethrower's projectiles
  "spread": 20 // Spread of the Flamethrower's projectiles
}
```
```json [Multiple Fluids]
{
  "amount": 15, // Amount of projectiles created by the Flamethrower (also affects the fuel consumption)
  "color": 10733129, // Fuel bar colour on the item
  "fluids": ["tfmg:napalm", "tfmg:flowing_napalm"], // The fluids that can be used as fuel
  "speed": 1.8, // Speed of the Flamethrower's projectiles
  "spread": 20 // Spread of the Flamethrower's projectiles
}
```
```json [Fluid Tag]
{
  "amount": 15, // Amount of projectiles created by the Flamethrower (also affects the fuel consumption)
  "color": 10733129, // Fuel bar colour on the item
  "fluids": "#c:napalm", // The fluid tag that will be used as fuel
  "speed": 1.8, // Speed of the Flamethrower's projectiles
  "spread": 20 // Spread of the Flamethrower's projectiles
}
```
:::
> [!NOTE]
> Flamethrower Fuels tagged as `tfmg:hellfire` will create Lithium Sparks instead of flames.<br>
> Flamethrower Fuels tagged as `tfmg:cold` will create Dry Ice Flakes instead of flames.
