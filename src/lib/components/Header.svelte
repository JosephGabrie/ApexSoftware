<script lang="ts">
  // Header component
</script>

<header class="w-full border-b border-fields-200/40 bg-fields-700">
  <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-20 items-center justify-between">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="flex items-center gap-2">
          <div class="grid h-8 w-8 place-items-center rounded bg-fields-accent text-fields-700 font-bold">
            A
          </div>
          <span class="text-xl font-bold tracking-tight text-white">
            Apex Software
          </span>
        </a>
      </div>

      <!-- Desktop Nav & CTA -->
      <div class="flex items-center gap-8">
        <nav class="hidden md:flex gap-6">
          <a href="#servicios" class="text-sm font-medium text-fields-200 transition hover:text-white">Servicios</a>
          <a href="#clientes" class="text-sm font-medium text-fields-200 transition hover:text-white">Clientes</a>
        </nav>
        
        <a 
          href="#contacto" 
          class="inline-flex items-center justify-center rounded-md bg-fields-accent px-5 py-2.5 text-sm font-medium text-fields-700 shadow-sm transition hover:bg-fields-orange hover:shadow-md active:scale-95"
        >
          Contáctanos
        </a>
      </div>
    </div>
  </div>
</header>