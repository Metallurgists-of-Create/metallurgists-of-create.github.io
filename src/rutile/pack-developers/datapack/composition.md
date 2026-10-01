---
prev:
    text: Datapack Functionality
    link: /rutile/pack-developers/datapack

next: false

title: "Rutile"
description: Compositions
image: https://metallurgists-of-create.github.io/assets/rutile-icon-large.webp
---

# Compositions

Compositions are individual JSON files located at `data/<namespace>/rutile/composition/<type>`

Compositions are not a registry and thus, can be reloaded in-game using the `/reload` command.

> [!NOTE]
> Fluid compositions will also be applied to their bucket items!

This is an example of how to format the file for a Composition: <br>
::: code-group
```json [Elements List]
// Would display as: CuNi
{
  "compositions": [
    {
      "elements": [
        {
          "amount": 1,
          "id": "rutile:copper"
        },
        {
          "amount": 1,
          "id": "rutile:nickel"
        }
      ]
    }
  ]
}
```
```json [Sized Group]
// Would display as: (CuNi)₂
{
  "compositions": [
    {
      "amount": 2,
      "elements": [
        {
          "amount": 1,
          "id": "rutile:copper"
        },
        {
          "amount": 1,
          "id": "rutile:nickel"
        }
      ]
    }
  ]
}
```
```json [Mixed]
// Would display as: (CH)₂O
{
  "compositions": [
    {
      "amount": 2,
      "elements": [
        {
          "amount": 1,
          "id": "rutile:carbon"
        },
        {
          "amount": 1,
          "id": "rutile:hydrogen"
        }
      ]
    },
    {
      "elements": [
        {
          "amount": 1,
          "id": "rutile:oxygen"
        }
      ]
    }
  ]
}
```
:::

The contents of a composition are then added at the bottom of the file. 
Currently, compositions are not mergeable meaning two identical compositions under different locations will have different tabs in JEI. We will work on a way to merge them soon.

> [!WARNING]
> Make sure you are creating the composition in the correct folder!<br>
> Item compositions go in the `item` folder.<br>
> Fluid compositions go in the `fluid` folder.

::: code-group
```json [Objects List]
{
  "contents": [
    "tfmg:sulfur_dust",
    "tfmg:sulfur"
  ]
}
```
```json [Tags List]
{
  "contents": [
    "#c:dusts/sulfur",
    "#c:storage_blocks/sulfur"
  ]
}
```
:::


