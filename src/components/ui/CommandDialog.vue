<script setup>
import Dialog from './Dialog.vue'
import DialogContent from './DialogContent.vue'
import DialogHeader from './DialogHeader.vue'
import DialogTitle from './DialogTitle.vue'
import DialogDescription from './DialogDescription.vue'
import Command from './Command.vue'
import { computed } from 'vue'

const props = defineProps({
  open: Boolean,
  title: {
    type: String,
    default: 'Command Palette'
  },
  description: {
    type: String,
    default: 'Search for a command to run...'
  }
})

const emit = defineEmits(['update:open'])

const dialogOpen = computed({
  get() {
    return props.open
  },
  set(value) {
    emit('update:open', value)
  }
})
</script>

<template>
  <Dialog v-model:open="dialogOpen">
    <DialogHeader class="sr-only">
      <DialogTitle>{{ title }}</DialogTitle>
      <DialogDescription>{{ description }}</DialogDescription>
    </DialogHeader>
    <DialogContent 
      class="overflow-hidden p-0 rounded-[0px]! shadow-shadow border-0"
    >
      <Command class="**:data-[slot=command-input-wrapper]:h-12 [&_[data-slot=command-group-heading]]:px-2 [&_[data-slot=command-group-heading]]:font-heading [&_[data-slot=command-group-heading]]:mb-1 [&_[data-slot=command-group]]:px-2 [&_[data-slot=command-input-wrapper]_svg]:h-5 [&_[data-slot=command-input-wrapper]_svg]:w-5 [&_[data-slot=command-input]]:h-12 [&_[data-slot=command-item]]:px-2 [&_[data-slot=command-item]]:py-3 [&_[data-slot=command-item]_svg]:h-5 [&_[data-slot=command-item]_svg]:w-5">
        <slot />
      </Command>
    </DialogContent>
  </Dialog>
</template>
