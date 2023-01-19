import { onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

export const useOnClickOutside = <T extends HTMLElement>(
  ref: Ref<T | null>,
  callback: VoidFunction
) => {
  function handleClickOutside(event: MouseEvent) {
    if (ref === null) {
      return;
    }

    if (ref.value && !ref.value.contains(event.target as HTMLElement)) {
      callback();
    }
  }

  onMounted(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("mousedown", handleClickOutside);
  });
};
