import { defineStore } from "pinia";
import { ref } from "vue";

export const userMenuStore = defineStore('userMenu', () => {
    const isMenuOpen = ref(false)

    function setMenuOpen(open: boolean) {
        isMenuOpen.value = open
    }

    return {
        isMenuOpen,
        setMenuOpen
    }
})