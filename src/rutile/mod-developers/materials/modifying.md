---

prev: 
    text: Creating Prefixes
    link: /rutile/mod-developers/materials/prefixes
    
next: false
---

# Modifying Materials

You might want to redirect a Prefix to use an existing Item, or just tell the Prefix to use a different block constructor for a specific material. You can do this with Modification!

```java
public static void configurePrefixes() {
    // Tells the Ingot prefix to not generate an ingot but to use Minecraft's Iron Ingot instead.
    Ingot.setIgnored(RutileMaterials.Iron, Items.IRON_INGOT);
}

// Calling this in the init method of your Material registry class will ensure materials are modified at the right time

public class MyMaterials {
    public static void init() {
        configurePrefixes();
    }
}
```

There are multiple options for configuring an existing Prefix...

- `setIgnored(Material material, Object obj)` Redirects the registered object from the Prefix to the other specified object.
- `setIgnored(Material material)` Forces the prefix to ignore the specified Material.
- `removeIgnored(Material material)` Forces the prefix to be enabled the specified Material.
- `setBlockConstructor(Material material, BlockConstructor blockConstructor)` Changes the Block constructor for the specified Material.
- `setItemConstructor(Material material, ItemConstructor itemConstructor)` Changes the Item constructor for the specified Material.
- `setBlockAssets(Material material, BlockAssetProperties assetProperties)` Changes the Block assets for the specified Material.
- `setMaterialName(Material material, String name)` Changes the Material name that is used in the id and localization. Eg: `Ingot.setMaterialName(RutileMaterials.Gold, "golden")`.<br>
The localization key for the Material is altered for the prefixed item to the format `modid.material.prefix`.
- `modifyMaterialAmount(Material material, float amount)` Changes the Material amount for the specified prefix. Useful for storage blocks that should contain less than 9 units.

Soon you will be able to add flags to Materials directly.
