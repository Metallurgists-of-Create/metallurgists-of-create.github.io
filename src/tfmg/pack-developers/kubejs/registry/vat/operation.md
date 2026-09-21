---
next:
    text: Registering Mixers
    link: /tfmg/pack-developers/kubejs/registry/vat/mixer

title: "Create: TFMG"
description: Vat Operation Registration
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# Vat Operations
Vat Operations, also known as "machines" in recipes, tell chemical vats what "machines" to use.

```js
StartupEvents.registry("tfmg:vat_operation", event => {.
    // This will create kubejs:evil_mixing
    event.create("evil_mixing");
})
```
