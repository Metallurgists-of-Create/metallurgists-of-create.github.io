---
rutile_version: 2.1.0-mc1.21.1
registrate_version: MC1.21-1.3.0+67
minecraft_version: 1.21.1

prev:
  text: Rutile
  link: /rutile
  
next: 
    text: Creating the Plugin
    link: /rutile/mod-developers/plugin

title: Rutile
description: Depending on Rutile
image: https://metallurgists-of-create.github.io/assets/rutile-icon-large.webp
---

<!--@include: ./template.md-->

::: code-group
```groovy [build.gradle]
    repositories {
        maven { url = "https://api.modrinth.com/maven" } // Rutile
        maven { url = "https://maven.ithundxr.dev/snapshots" } // Registrate
    }

    dependencies {
        implementation("com.tterrag.registrate:Registrate:${registrate_version}")
        implementation("maven.modrinth:rutile:${rutile_version}")
    }
```
```kotlin [build.gradle.kts]
    repositories {
        maven("https://api.modrinth.com/maven") // Rutile
        maven("https://maven.ithundxr.dev/snapshots") // Registrate
    }

    dependencies {
        implementation("com.tterrag.registrate:Registrate:${property("registrate_version")}")
        implementation("maven.modrinth:rutile:${property("rutile_version")}")
    }
```

:::

And in your `gradle.properties` file:

```properties-vue [gradle.properties]
rutile_version = {{ $frontmatter.rutile_version }}
registrate_version = {{ $frontmatter.registrate_version }}
```

### Production Environment Dependency

This type of dependency is added to the `neoforge.mods.toml` file so that NeoForge knows your mod will not work without
a certain
version of Rutile. This type of dependency is only useful if a development environment dependency was also added. This
type of dependency should not be added if your mod is able to work in a production environment without Rutile.

#### Configuration

Add the following dependency definition to your `neoforge.mods.toml` file,
replacing `${modid}` with your mod's ID. This tells Forge that your mod depends on Rutile.
If Rutile is not present or is outdated, NeoForge will display an error screen explaining this to the user.

```toml-vue
[[dependencies.${mod_id}]]
    modId="rutile"
    type="required"
    versionRange="[{{ rutile_version_no_build_number }},{{ next_minor_version }})"
    ordering="NONE"
    side="BOTH"
```
