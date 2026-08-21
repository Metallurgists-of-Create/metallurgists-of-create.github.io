---
prev:
    text: TFMG
    link: /tfmg

next:
    text: KubeJS Integration
    link: /tfmg/pack-developers/kubejs

title: "Create: TFMG"
description: Datapack Registries
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# Datapack Registries

For KubeJS, see [KubeJS Integration](https://metallurgists-of-create.github.io/tfmg/pack-developers/kubejs) <p>
The Community Edition of TFMG adds some new datapack registries, mostly related to fuel but that's besides the point.

## Engine Fuel
Engine Fuels are registered at `data/yourmod/tfmg/fuel_type/engine`. <br>
This is an example of an Engine Fuel that TFMG adds:
```json
{
  "efficiency": 0.4,
  "fluids": "#c:creosote",
  "speed": 0.7,
  "torque": 0.5
}
```
If an Engine Fuel is tagged as `tfmg:large_engine` then it will be valid in Large Engines, however, only the valid fluids are important for Large Engines as they have static Efficiency Speed and Torque.
## Flamethrower Fuel
Flamethrower Fuels are registered at `data/yourmod/tfmg/fuel_type/flamethrower`. <br>
This is an example of a Flamethrower Fuel that TFMG adds:
```json
{
  "amount": 15,
  "color": 10733129,
  "fluids": "tfmg:napalm",
  "speed": 1.8,
  "spread": 20
}
```
`"amount"` affects the amount of projectiles created by the Flamethrower but also affects the fuel consumption.<br>
`"color"` is currently only used to define the fuel bar colour on the item.<br>
`"fluids"` accepts lists of fluids, a fluid tag or just a single valid fluid.<br>
`"speed"` affects the speed of the flamethrower's projectiles.<br>
`"spread"` affects the spread of the flamethrower's projectiles.<br>

Flamethrower Fuels tagged as `tfmg:hellfire` will create Lithium Sparks instead of flames.<br>
Flamethrower Fuels tagged as `tfmg:cold` will create Dry Ice Flakes instead of flames.

## Fire Extinguisher Fuel
Not yet implemented.

