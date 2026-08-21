---
tfmg_version: 1.2.4-community
minecraft_version: 1.21.1

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
        maven { url = "https://api.modrinth.com/maven" } // TFMG
    }

    dependencies {
        implementation("maven.modrinth:tfmg-community-edition:${tfmg_version}")
    }
```
```kotlin [build.gradle.kts]
    repositories {
        maven("https://api.modrinth.com/maven") // TFMG
    }

    dependencies {
        implementation("maven.modrinth:tfmg-community-edition:${property("tfmg_version")}")
    }
```

:::

And in your `gradle.properties` file:

```properties-vue [gradle.properties]
tfmg_version = {{ $frontmatter.tfmg_version }}
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
    versionRange="[{{ tfmg_version }},{{ next_minor_version }})"
    ordering="NONE"
    side="BOTH"
```
