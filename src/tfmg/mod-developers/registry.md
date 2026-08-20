---
prev: 
    text: Depending on TFMG
    link: /tfmg/mod-developers/depending
    
next: false
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
public static final EngineTypeEntry<EngineType> WAOW = REGISTRATE.engineType("waow", EngineType::new)
            .properties((p) -> p
                    .speed(2).torque(2.8f).efficiency(0.2f)
                    .pistons(pistonsWaow())
                    .cylinderModel(TFMGPartialModels.RADIAL_ENGINE_CYLINDER)
            ).defaultLang()
            .register();
```
Worth noting that `pistons()` is a list of `PistonPosition` so it might be best to keep them separate from the constructor. A good example is TFMG's `EngineProperties` class.

## Cable Types
I'll do this later :/
