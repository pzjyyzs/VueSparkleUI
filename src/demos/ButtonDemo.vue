<script setup lang="ts">
import SButton from '../lib/Button/SButton.vue';

</script>

<template>
    <section class="button-demo">
        <div>
            <div>
                <h3 class="button-title">Kinds</h3>
                <div class="button-content">
                    <SButton>Primary Button</SButton>
                    <SButton kind="primary">Primary</SButton>
                    <SButton kind="secondary">Secondary</SButton>
                    <SButton kind="tertiary">Tertiary</SButton>
                    <SButton kind="dangerPrimary">Danger Primary</SButton>
                    <SButton kind="dangerSecondary">Danger Secondary</SButton>
                    <SButton kind="dangerTertiary">Danger Tertiary</SButton>
                </div>
            </div>
        </div>
    </section>
</template>  

<style lang="css" scoped>

.button-demo {
    border-width: 0px;
    border-style: solid;
    border-color: rgb(243, 243, 243);
    border-radius: 12px;
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    margin-top: 0px;
    margin-bottom: 0px;

    & > div {
        margin: 0;
        & > div {
            margin-bottom: 16px;
            color: #000;
            font-size: 16px;
            font-weight: normal;
            line-height: 24px;
        }
    }

    .button-title {
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 8px;
    }
    .button-content {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }
}
</style>
