---
prev: 
    text: Depending on Rutile
    link: /rutile/mod-developers/depending
    
next:
    text: Registering Your Objects
    link: /rutile/mod-developers/registry
---

<meta property="og:title" content="Rutile" />
<meta property="og:description" content="Creating the Plugin" />
<meta property="og:image" content="https://metallurgists-of-create.github.io/assets/rutile-icon-large.webp" />

# Creating the Plugin

Rutile uses plugins to handle...
- Runtime Recipe Handlers
- Composition Managers

Plugins also notify Rutile that it should be generating runtime data/assets for your mod.

```java
@RutilePlugin
public class YourRutilePlugin implements IRutilePlugin {

    @Override
    public void configure(PluginConfig config) {
        config.setModId("modid");
        config.setRegiatrate(YourMod.registrate());
    }

    @Override
    public void collectCompositionManagers(RutileCompositions handler) {
        handler.addManager(CustomCompositionsManager.getInstance());
    }
}
```

