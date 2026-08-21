---
prev: 
    text: Depending on TFMG
    link: /tfmg/mod-developers/depending
    
next: false

title: "Create: TFMG"
description: Registering Your Objects
image: https://metallurgists-of-create.github.io/assets/tfmg-ce-icon-large.webp
---

# Registering Your Objects

The Community Edition of TFMG adds many new registries that you can use to add content that integrates with our systems.

## Electrodes
Electrodes are a simple registry. They define how the electrode renders in the Vat and what operation it should act under.

To link an electrode to an item you must use the `tfmg:electrode` item component.

TFMG has a pre-made Registrate builder for Electrodes which makes registering them even easier!

```java
public class MyElectrodes {
    public static final ElectrodeEntry<Electrode> platinum = REGISTRATE.electrode("platinum", Electrode::new)
            .properties((p) -> p.resistance(69).operationId(MyMod.asResource("electrode")))
            .register();

    public static void init() { }
}
```
If you want to further customise the Electrode you can look at how ArcElectrode overrides the tick method.
```java
public class ArcElectrode extends Electrode {
    public ArcElectrode(Properties properties) {
        super(properties.operationId(TFMG.asResource("graphite_electrode")));
    }

    @Override
    public void tick(VatBlockEntity controllerVat, Level level, BlockPos pos, boolean active, boolean clientTick) {
        if (active && clientTick) {
            ParticleUtils.spawnParticlesAlongAxis(Direction.Axis.Y, level, pos, 0.25F, ParticleTypes.ELECTRIC_SPARK, UniformInt.of(1, 2));
        }
    }
}
```

## Mixer Modes
Similar to Electrodes, Mixer Modes are used as types for the Industrial Mixer vat attachment.

To link a mixer mode to an item you must use the `tfmg:mixer_mode` item component.

Once again, TFMG has a pre-made Registrate builder for Mixer Modes!
```java
public class MyMixerModes {
    public static final MixerModeEntry<MixerMode> bigSpoon = REGISTRATE.mixerMode("big_spoon", MixerMode::new)
            .properties((p) -> p.operation(MyMod.asResource("big_spoon")).partial((currentHeight, totalHeight, be) -> TFMGPartialModels.SMALL_CENTRIFUGE_ALONE))
            .register();

    public static void init() { }
}
```
Unlike Electrodes that, by default, render the item inside the Electrode Holder, Mixer Modes must define a Partial Model getter for the Mixer.
`partial` has three parameters, `int currentHeight`, `int totalHeight`, `IndustrialMixerBlockEntity be` which are used to calculate what partial model to use at the current segment.

## Engine Types
Engine types are a bit special. Any engine can technically have any type.
Some engine block entities restrict their permitted types through tags, for example: <br>
Regular Engines, when clicked with an empty schematic, will cycle their engine type through all registered types that aren't tagged as `tfmg:schematic_cycle_blacklist`. <br>
Radial and Turbine Engines don't have a type cycle so theirs are simply defined via `getDefaultEngineType()` in their block entities.

When registering an Engine Type you can define:
- Speed, Torque & Efficiency.
- Positions for its pistons.
- The name to be used for the last assembly requirement, e.g: Turbine Engines use "turbines"
- A custom PartialModel to be used for rendering its cylinders.
```java
public class MyEngineTypes {
    public static final EngineTypeEntry<EngineType> WAOW = REGISTRATE.engineType("waow", EngineType::new)
            .properties((p) -> p
                    .speed(2).torque(2.8f).efficiency(0.2f)
                    .pistons(pistonsWaow())
                    .cylinderModel(TFMGPartialModels.RADIAL_ENGINE_CYLINDER)
            ).defaultLang()
            .register();
    
    public static void init() { }
}
```
Worth noting that `pistons()` is a list of `PistonPosition` so it might be best to keep them separate from the constructor. A good example is TFMG's `EngineProperties` class.

## Cable Types
Cable types are used for creating custom spools that can create cable connections. <br>
Unlike Electrodes and Mixer Modes, they aren't stored in a component but are hardcoded into the spool item.

When registering a Cable Type you must define:
- The colour for the spool item's durability bar.
- The Spool item & the Wire item.
```java
public class MyCableTypes {
    public static final CableTypeEntry<CableType> SCANDIUM = REGISTRATE.cableType("scandium", CableType::new)
            .properties((p) -> p.color(0xCFC2A8).spool(MyItems.SCANDIUM_SPOOL).wire(MyItems.SCANDIUM_WIRE))
            .transform(MyResistivity.setResistivity(0.0124f))
            .register();

    public static void init() { }
}

public class MyItems {
    public static final ItemEntry<Item> SCANDIUM_WIRE = REGISTRATE.item("scandium_wire", Item::new)
            .tag(TFMGTags.Items.WIRES.tag)
            .recipe((c, p) -> p.stonecutting(DataIngredient.tag(CommonMetal.SCANDIUM.ingots), RecipeCategory.BUILDING_BLOCKS, c, 2))
            .register();
    
    public static final ItemEntry<SpoolItem> SCANDIUM_SPOOL = REGISTRATE.item("scandium_spool", p -> new SpoolItem(p, barColor, MyMod.asResource(name)))
            .tag(Items.SPOOLS.tag)
            .properties(p -> p.stacksTo(1).component(TFMGDataComponents.SPOOL_AMOUNT, 1000))
            .recipe((ctx, prov) ->
                    ShapedRecipeBuilder.shaped(RecipeCategory.MISC, ctx.get())
                            .pattern("WWW").pattern("WSW").pattern("WWW")
                            .define('W', SCANDIUM_WIRE)
                            .define('S', TFMGItems.EMPTY_SPOOL)
                            .unlockedBy("has_wire", DataIngredient.items(SCANDIUM_WIRE).getCriterion(prov))
                            .save(prov, ctx.getId().withPrefix("crafting/")))
            .register();
}
```
Cable types have configurable resistivity, similar to the stress impact on kinetic blocks. <br>
You will have to create your own instance of the resistivity config to assign values to your cables though.<br>
See [TFMGResistivity](https://github.com/Metallurgists-of-Create/Create-TFMG-CE/blob/1.21.1/src/main/java/com/drmangotea/tfmg/config/TFMGResistivity.java) for an example of how you should make yours.


