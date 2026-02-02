---

prev: 
    text: Materials
    link: /rutile/mod-developers/materials/index
---

# Creating Your First Material

When creating your material, you can specify its composition. This will be used to display on any of the items related to it.<br>
The color of the Material is used to tint Fluids.

```java
// This Material is 100% Netherium so it only needs to specify one element
public static Material Netherium = new Material.Builder(YourMod.asResource("netherium"))
        .element("netherium")
        .colour(0xff333756)
        .build();

// Emeralds have a more complicated composition, but you can use the composition builder method to add multiple elements with specific quantities
public static Material Emerald = new Material.Builder(Rutile.id("emerald"))
        .composition("3 beryllium", "2 aluminum", "6 silicon", "18 oxygen")
        .colour(0xff41f384)
        .build();

// Netherite is an alloy of two other Materials. You can represent this using the components builder method
public static Material Netherite = new Material.Builder(YourMod.asResource("netherite"))
        .components(RutileMaterials.Gold, 4, Netherium, 4)
        .colour(0x4d494d)
        .build();
```

You only need to create the instances of the Material as the conclusion of the builder registers it to our registry.
