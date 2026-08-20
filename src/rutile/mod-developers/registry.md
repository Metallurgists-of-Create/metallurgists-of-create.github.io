---
prev: 
    text: Creating the Plugin
    link: /rutile/mod-developers/plugin

title: Rutile
description: Registering Your Objects
image: https://metallurgists-of-create.github.io/assets/rutile-icon-large.webp
---

# Registering Your Objects

With Rutile you can register two new types of object: Elements and Materials.

## Elements
Elements are cosmetic informative objects that display in the tooltips of supported objects.

Elements are defined with an id, symbol, and color.<br>
The color of the element is used for tinting the Element in JEI. It can also be used to change the color of the composition tooltip if the `elementColorForTooltip` config value is `true`<br>
The symbol of the element is used for the composition tooltip and is never localized.

```java
public class MyElements {
    public static final Element Nt = create("netherium", "Nt", 0xff333756);

    public static Element create(String name, String symbol, int colour) {
        Element element = new Element(symbol, colour, YourMod.asResource(name));
        RutileRegistries.register(RutileRegistries.ELEMENTS, element.getId(), element);
        return element;
    }

    public static void init() {}
}

// To register to our registries you will likely need to initialize your registry 
// classes during the RegistryEvent
@EventBusSubscriber
public class CommonEvents {

    // Only register everything once.
    private static boolean didRunRegistration = false;

    @SubscribeEvent
    public static void onRegister(RegisterEvent event) {
        if (didRunRegistration) {
            return;
        }
        // Initialize your Elements:
        MyElements.init();
        didRunRegistration = true;
    }
}
```

## Materials
Materials are quite a bit more complicated than Elements. The next section should cover everything you need to know about how to create your own.
