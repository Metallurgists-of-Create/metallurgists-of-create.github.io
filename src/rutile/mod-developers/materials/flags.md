---
prev: 
    text: Creating Your First Material
    link: /rutile/mod-developers/materials/first-material
    
next:
    text: Creating Prefixes
    link: /rutile/mod-developers/materials/prefixes
---

<meta property="og:title" content="Rutile" />
<meta property="og:description" content="Adding Flags" />
<meta property="og:image" content="https://metallurgists-of-create.github.io/assets/rutile-icon-large.webp" />

# Adding Flags

Materials use FlagKeys to handle specific behaviors and whether a TagPrefix should be interacting with that Material.<br>

When adding a flag to a Material, you have two options:
::: code-group
```java [Unit]
// The unit flag() builder method creates the default instance of the FlagKey. This example tells the Ingot TagPrefix that it should be creating an iron ingot.
public static Material Iron = new Material.Builder(Rutile.id("iron"))
                .element("iron")
                .colour(0xff949496)
                .flag(FlagKey.INGOT)
                .build();
```
```java [Instanced]
// The instanced flag() builder method sets the value of the flag to a specific instance. This example sets the Harvest Tier of the Material to 1 (or stone)
public static Material Iron = new Material.Builder(Rutile.id("iron"))
                .element("iron")
                .colour(0xff949496)
                .flag(FlagKey.HARVEST_TIER, new HarvestTierFlag(1))
                .build();
```
:::

## Creating Your Own Flag
You can create your own FlagKeys by creating a class that implements [`IMaterialFlag`](https://github.com/Metallurgists-of-Create/Rutile/blob/1.21.1-rewrite/src/main/java/dev/metallurgists/rutile/api/material/flags/IMaterialFlag.java)
<br> Rutile has multiple extensions of `IMaterialFlag` that can be useful:
- [`StandaloneFlag`](https://github.com/Metallurgists-of-Create/Rutile/blob/1.21.1-rewrite/src/main/java/dev/metallurgists/rutile/api/material/flags/StandaloneFlag.java) Simple empty flag. Useful for acting as a boolean.
- [`UnitFlag<T>`](https://github.com/Metallurgists-of-Create/Rutile/blob/1.21.1-rewrite/src/main/java/dev/metallurgists/rutile/api/material/flags/UnitFlag.java) Holds a single typed value that can be retrieved via [`getFlagValue(FlagKey<T>)`](https://github.com/Metallurgists-of-Create/Rutile/blob/1.21.1-rewrite/src/main/java/dev/metallurgists/rutile/api/material/Material.java#L124) method in `Material`.
- [`BiUnitFlag<A, B>`](https://github.com/Metallurgists-of-Create/Rutile/blob/1.21.1-rewrite/src/main/java/dev/metallurgists/rutile/api/material/flags/BiUnitFlag.java) Holds two different typed values that can be retrieved via [`getFlagValues(FlagKey<T>)`](https://github.com/Metallurgists-of-Create/Rutile/blob/1.21.1-rewrite/src/main/java/dev/metallurgists/rutile/api/material/Material.java#L131) method in `Material`.
- [`MapFlag<K, V>`](https://github.com/Metallurgists-of-Create/Rutile/blob/1.21.1-rewrite/src/main/java/dev/metallurgists/rutile/api/material/flags/MapFlag.java) Holds a typed Map of values that can be retrieved via [`getFlagValue(FlagKey<T>, K)`](https://github.com/Metallurgists-of-Create/Rutile/blob/1.21.1-rewrite/src/main/java/dev/metallurgists/rutile/api/material/Material.java#L139) method in `Material`.
<br> If you just want to use your Flag for a Prefix, you can just implement `IMaterialFlag`.

To use your Flag, create a new class and `FlagKey` using that class.
```java
public class MyFlag implements IMaterialFlag {
    // You can check the flags of a Material with this to invalidate the Flag if certain conditions are met.
    @Override
    public void verifyFlag(MaterialFlags flags) {
        
    }
}

public class MyFlagKeys {
    public static final FlagKey<MyFlag> MY_FLAG = new FlagKey<>(YourMod.asResource("my_flag"), MyFlag.class);
}
```
Now to add your new Flag to your Material:
```java
public static Material Netherium = new Material.Builder(YourMod.asResource("netherium"))
        .element("netherium")
        .colour(0xff333756)
        .flag(MyFlagKeys.MY_FLAG)
        .build();
```

## Builtin Flags
Rutile has multiple builtin Flags that it uses for its builtin Materials. They are located within `FlagKey`

- `FLUID` [Instanced] This causes the Material to register a Fluid.
- `VISCOSITY` [Instanced] This flag specifies the viscosity of specific Fluids registered under the Material.
- `LUMINOSITY` [Instanced] This flag specifies the luminosity (or light emission) of specific Fluids registered under the Material.
- `GEM` [Unit] Tells the `Gem` and `Block` Prefixes that it should be enabled for the Material. Incompatible with `INGOT`.
- `INGOT` [Unit] Tells the `Ingot` and `Block` Prefixes that it should be enabled for the Material. Incompatible with `GEM`.
- `DUST` [Unit] Tells the `Dust` Prefix that it should be enabled for the Material.
- `ORE` [UNIT / INSTANCED] Tells the `Raw Ore` and `Raw Ore Block` Prefixes that they should be enabled for the Material.
- `HARVEST_TIER` [Instanced] Sets the Harvest Tier of the Material, As an `int`.
- `BURNABLE` [Instanced] Sets the `burnTime` of the Material, in ticks. Used by MaterialItem to specify the amount of time it lasts as Furnace Fuel with the formula (`burnableValue * prefixMaterialAmount / defaultMaterialAmount`)
- `DISABLE_RECIPES` [Unit] Stops material-specific runtime recipes from being generated for the Material.
