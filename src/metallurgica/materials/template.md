<script setup>
{/* prettier-ignore */}
import {useData} from "vitepress";
import {ref} from "vue";

const { frontmatter: fm, params } = useData();

const material_name = fm.value.material_name;
const material_aliases = fm.value.material_aliases ?? 'None';
const composition = fm.value.composition ?? 'None';

const meltingPoint = fm.value.melting_point ?? 'Unspecified';
const boilingPoint = fm.value.boiling_point ?? 'Unspecified';
const mohScale = fm.value.moh_scale ?? 'Unspecified';

const fahrenheit = ref(0);

const formattedTemperature = (temperature) => {
    if (fahrenheit.value === 20) {
        fahrenheit.value = 0;
    }
    if (temperature !== 'Unspecified') {
        if (fahrenheit.value % 2 !== 0) {
            return temperature*(9 / 5) + 32 + "°F";
        }
        return temperature + "°C";
    }   
    else return temperature;
}
</script>

# **{{ material_name }}**

Composition: **{{ composition }}**<br>
Aliases: [**{{ material_aliases }}**]

## Properties:

<button :class="$style.button" @click="fahrenheit++">Switch Unit</button>

<style module>
.button {
  color: rgb(255 0 153);
  font-weight: normal;
}
</style>

- Melting Point: {{ formattedTemperature(meltingPoint) }}
- Boiling Point: {{ formattedTemperature(boilingPoint) }}
- Mohs: {{ mohScale }}


