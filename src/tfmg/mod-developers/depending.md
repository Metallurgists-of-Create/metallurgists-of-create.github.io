---
tfmg_version: 1.2.5-community
minecraft_version: 1.21.1
next_minor_version: 1.3.0

prev:
  text: TFMG
  link: /tfmg

next: 
  text: Registering Your Objects
  link: /tfmg/mod-developers/registry

title: "Create: TFMG"
description: Depending on TFMG
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

<!--@include: ./template.md-->

::: code-group
```groovy [build.gradle]
repositories {
    maven {
        name "Krystals Maven"
        url "https://krystalsmaven.oreostack.uk/snapshots" // TFMG
    }
    maven { url = "https://maven.ryanhcode.dev/releases" } // Sable Companion
}

dependencies {
    implementation("com.drmangotea:tfmg:${minecraft_version}-${tfmg_version}")
}
```
```kotlin [build.gradle.kts]
repositories {
    maven {
        name = "Krystals Maven"
        url = uri("https://krystalsmaven.oreostack.uk/snapshots") // TFMG
    }
    maven("https://maven.ryanhcode.dev/releases") // Sable Companion
}

dependencies {
    implementation("com.drmangotea:tfmg:${property("minecraft_version")}-${property("tfmg_version")}")
}
```

:::

And in your `gradle.properties` file:

```properties-vue [gradle.properties]
tfmg_version = {{ $frontmatter.tfmg_version }}
minecraft_version = {{ $frontmatter.minecraft_version }}
```

### Production Environment Dependency

This type of dependency is added to the `neoforge.mods.toml` file so that NeoForge knows your mod will not work without
a certain version of TFMG. This type of dependency is only useful if a development environment dependency was also added. This
type of dependency should not be added if your mod is able to work in a production environment without TFMG.

#### Configuration

Add the following dependency definition to your `neoforge.mods.toml` file,
replacing `${modid}` with your mod's ID. This tells Forge that your mod depends on TFMG.
If TFMG is not present or is outdated, NeoForge will display an error screen explaining this to the user.

```toml-vue
[[dependencies.${mod_id}]]
    modId="tfmg"
    type="required"
    versionRange="[{{ $frontmatter.tfmg_version }},{{ $frontmatter.next_minor_version }})"
    ordering="NONE"
    side="BOTH"
```
