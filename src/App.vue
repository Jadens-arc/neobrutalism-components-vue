<template>
  <div class="min-h-screen bg-background">
    <nav class="border-b-2 border-border bg-secondary-background">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-heading">Neobrutalism Components (Vue)</h1>
          <div class="flex gap-4">
            <router-link 
              to="/" 
              class="px-4 py-2 rounded-base border-2 border-border font-base hover:bg-background"
            >
              Home
            </router-link>
            <router-link 
              to="/components" 
              class="px-4 py-2 rounded-base border-2 border-border font-base hover:bg-background"
            >
              Components
            </router-link>
            <router-link 
              to="/stars" 
              class="px-4 py-2 rounded-base border-2 border-border font-base hover:bg-background"
            >
              Stars
            </router-link>
            <button 
              @click="toggleTheme"
              class="px-4 py-2 rounded-base border-2 border-border font-base hover:bg-background"
            >
              {{ theme === 'light' ? '🌙' : '☀️' }}
            </button>
          </div>
        </div>
      </div>
    </nav>
    
    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useTheme } from './composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>
