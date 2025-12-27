<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="noShadow"
    size="icon"
    :class="cn('size-7', className)"
    @click="handleClick"
  >
    <PanelLeftIcon />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>

<script setup>
import { inject } from 'vue'
import { PanelLeft as PanelLeftIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import Button from './Button.vue'

const props = defineProps({
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const sidebar = inject('sidebar')
const { toggleSidebar } = sidebar

const handleClick = (event) => {
  emit('click', event)
  toggleSidebar()
}
</script>
