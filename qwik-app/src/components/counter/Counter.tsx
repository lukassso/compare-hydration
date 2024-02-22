import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <div>
      <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
        <div
          class="flex w-full sm:w-auto"
          onClick$={() => count.value++}
          class="btn btn-primary sm:mb-0 w-full"
          target="_blank"
          rel="noopener"
        >
          Increase
        </div>
        <div class="flex w-full sm:w-auto">
          <button class="btn w-full bg-gray-50 dark:bg-transparent">
            Count: {count.value || 0}
          </button>
        </div>
      </div>
    </div>
  );
});
