---
hematite_version: N/A
minecraft_version: 1.21.1

next: 
    text: Registries
    link: /hematite/mod-developers/registries
---

<!--@include: ./template.md-->

::: code-group
```groovy [build.gradle]
    repositories {
        maven { url = "https://api.modrinth.com/maven" } // Hematite
    }

    dependencies {
        implementation("maven.modrinth:hematite:${hematite_version}")
    }
```
```kotlin [build.gradle.kts]
    repositories {
        maven("https://api.modrinth.com/maven") // Hematite
    }

    dependencies {
        implementation("maven.modrinth:hematite:${property("hematite_version")}")
    }
```

:::

And in your `gradle.properties` file:

```properties-vue [gradle.properties]
hematite_version = {{ $frontmatter.hematite_version }}
```

### Production Environment Dependency

This type of dependency is added to the `neoforge.mods.toml` file so that NeoForge knows your mod will not work without
a certain
version of Hematite. This type of dependency is only useful if a development environment dependency was also added. This
type of dependency should not be added if your mod is able to work in a production environment without Hematite.

#### Configuration

Add the following dependency definition to your `neoforge.mods.toml` file,
replacing `${modid}` with your mod's ID. This tells Forge that your mod depends on Hematite.
If Hematite is not present or is outdated, NeoForge will display an error screen explaining this to the user.

```toml-vue
[[dependencies.${mod_id}]]
    modId="hematite"
    type="required"
    versionRange="[{{ hematite_version_no_build_number }},{{ next_minor_version }})"
    ordering="NONE"
    side="BOTH"
```
