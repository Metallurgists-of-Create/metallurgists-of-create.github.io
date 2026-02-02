<script setup>
{/* prettier-ignore */}
import {useData} from "vitepress";

const rutile_version = useData().frontmatter.value.rutile_version ?? "0.0.0";
const rutile_version_no_build_number = rutile_version.replace("v", "").split("-")[0];

const _split = rutile_version_no_build_number.split(".");
const next_minor_version = `${_split[0]}.${Number(_split[1]) + 1}.0`;
</script>

# Depending on Rutile

### Rutile version: **{{ rutile_version_no_build_number }}**

### Minecraft version: **{{ $frontmatter.minecraft_version }}**

This page describes how a mod developer can add a dependency on Rutile.

Release jars of Rutile...

- are built and published manually.
- are published when the developers feel that enough features have been added since the previous release.
- are published as a GitHub release.

## Types of Dependencies

### Development Environment Dependency

This type of dependency is added to the Gradle buildscript so that Gradle and your IDE can find Create"s code.

#### Configuration

The following code defines the maven where Rutile and Registrate jars are hosted and defines dependencies on those.
