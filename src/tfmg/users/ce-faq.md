---
prev: 
    text: Home
    link: /tfmg/users/index

next: false

title: "Create: TFMG"
description: "Community Edition FAQ"
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# Community Edition FAQ

### What is the Community Edition?
The CE is a **fork** of the main mod with bug fixes, more customisability, and some optimisation. It acts as a **replacement for the official mod** and will be **merged into the official mod at a later date**.

### What about the official version?
The official version of TFMG **is not abandoned**. DrMangoTea is aware of the CE and has approved it on the condition **our fixes become part of the main mod** when he is back developing.

### Was AI Used?
We are **strongly against** the use of AI and will **never** use it to develop any part of the CE, be that code, text or assets.

### Will I lose anything if I load an old world with this fork?
We use the **same namespace** so you can load a world from the official version and (*hopefully*) **nothing will be lost**.

### What happens about the data storage changing on some things?
We **safely remap** any old data/items/blocks if they have changed.

### Does this work with addons?
We have native support for Chemica but **most bug fix addons would be incompatible**.

### Can I downgrade to the Official TFMG from the CE?
NO! The CE safely upgrades old data but there is nothing in place in the official TFMG to downgrade new data. This could cause various issues and possibly world corruption!

# Incompatible Mods
### TFMG: bugs fixes
Marked incompatible since 1.2.5 due to **overlapping bug fixes**. Status likely won't be changed.

### Pondus inventory & TFMG Fix
Marked incompatible since 1.2.5 due to **overlapping bug fixes**. Directional capability providers now provide all capabilities when the direction is null. Status likely won't be changed.

### TFMG Converter Fix
Marked incompatible since 1.2.5. The Converter **no-longer exists** and thus, this mod would not be able to fix the Converter. Status won't be changed.

### Create:TFMG Plastic Fix
Marked incompatible since 1.2.5. The plastic casting recipe has been fixed since 1.2.3 but this hadn't been marked incompatible. Status won't be changed.

### TFMG: Fix engine controller
Marked incompatible since 1.2.5. The Engine Controller **no-longer exists** and thus, this mod would not be able to fix the Engine Controller. Status won't be changed.

### TFMG Optimizer (Create: The Factory Must Grow Optimizer)
Marked incompatible since 1.2.5 due to **overlapping bug fixes**. Status likely won't be changed.

### TFMG Electricity Performance Patch
Marked incompatible since 1.3.1 due to **overlapping bug fixes**. Status likely won't be changed.

### The DanielBasov Addons
This user has presumably AI Generated a large amount of "Bug Fix" addons that are obsolete with the Community Edition or inject unsupported data into block entities.
- `TFMG Tank Fix`: To be marked incompatible in 1.4.0. It injects boiler data into tanks which cannot be boilers, potentially breaking some features.
- `TFMG Vat Processing Fix`: To be marked incompatible in 1.4.0. It attempts to modify recipe processing in an older version of the Vat block entity which has been updated.
- `TFMG Mixer Blade Fix`: To be marked incompatible in 1.4.0. It is not needed as Industrial Mixers now properly store mixer items.
- `TFMG Engine Drops Fix`: To be marked incompatible in 1.4.0. It is not needed as Engines now properly drop all assembly components.
- `TFMG Casting Capacity`: To be marked incompatible in 1.4.0. It is not needed as Casting Basins can reasonably produce all recipes.
- `TFMG Casting Fluid Fix`: To be marked incompatible in 1.4.0. It is not needed as Casting Basins now drain the appropriate amount.
- `TFMG Winding Fix`: To be marked incompatible in 1.4.0. It is not needed as Winding Machines now check for the component before retrieving it.
Due to the possible AI nature of these addons, alongside the future incompatibilities these will cause, the status will not be changed.
