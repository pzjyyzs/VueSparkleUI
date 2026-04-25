<script setup lang="ts">
import { computed, ref } from 'vue';
import SDialog from '../../lib/Dialog/SDialog.vue';
import SButton from '../../lib/Button/SButton.vue';
import DocsPlayground from '../../components/DocsPlayground.vue';
import { openDialog } from '../../lib/Dialog/SDialog';

const isOpen = ref(false);
const exampleCode = computed(() => {
  //const attrs = [`kind="${kind.value}"`, `size="${size.value}"`]

  /* if (disabled.value) {
    attrs.push('disabled')
  } */

  return ``
})

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
}

const openDialogForFunction = async () => {
  await openDialog({
    title: 'Dialog opened from function',
    content: 'This dialog was opened using the openDialog function.',
    onOk: () => {
      console.log('OK clicked');
    },
    onCancel: () => {
      console.log('Cancel clicked');
    },
  })
}
</script>

<template>
    <section class="docs-section">
        <h1>Dialog</h1>
        <p class="docs-section__desc">
            A dialog is a modal window that displays information or prompts the user for a response.
        </p>
    </section>

    <DocsPlayground>
        <template #preview>
            <SButton @click="toggleOpen">Open Dialog</SButton> 
            <SDialog v-model:isOpen="isOpen">
                <template #title>
                    <h2>Custom Dialog Title</h2>
                </template>

                <template #content>
                    <p>This is the content of the dialog. You can put any information here.</p>
                </template>
            </SDialog>

            <SButton @click="openDialogForFunction">Open Dialog for Function</SButton> 
        </template>

      <template #code>
        <div class="button-demo__code">
          <p class="button-demo__code-label">Code</p>
          <pre><code>{{ exampleCode }}</code></pre>
        </div>
      </template>
    </DocsPlayground>
</template>