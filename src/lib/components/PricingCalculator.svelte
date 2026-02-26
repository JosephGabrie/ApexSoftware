<script lang="ts">
    type Feature = {
        id: string;
        label: string;
        description: string;
        icon: string;
    };

    type ProjectType = "simple" | "custom" | "other";

    const features: Feature[] = [
        { id: "responsive", label: "Diseño para móvil", description: "Tu sitio se ve bien en cualquier pantalla.", icon: "📱" },
        { id: "seo", label: "SEO Básico", description: "Más fácil de encontrar en Google.", icon: "🔍" },
        { id: "domain", label: "Configuración de dominio", description: "Tu propio nombre en internet.", icon: "🌐" },
        { id: "contact", label: "Formulario de contacto", description: "Los clientes te escriben directo.", icon: "✉️" },
        { id: "auth", label: "Cuentas de usuario", description: "Tus clientes crean su propio perfil.", icon: "👤" },
        { id: "payments", label: "Pagos en línea", description: "Acepta tarjetas y pagos digitales.", icon: "💳" },
        { id: "dashboard", label: "Panel de control", description: "Ve tus datos en un solo lugar.", icon: "📊" },
        { id: "notifications", label: "Notificaciones", description: "Avisos por correo o WhatsApp.", icon: "🔔" },
        { id: "reports", label: "Reportes y estadísticas", description: "Sabe qué está pasando en tu negocio.", icon: "📈" },
        { id: "multiuser", label: "Múltiples empleados", description: "Cada quien con su acceso.", icon: "👥" },
        { id: "inventory", label: "Control de inventario", description: "Sabe qué tienes y qué te falta.", icon: "📦" },
        { id: "api", label: "Conexión con otras apps", description: "Se conecta con WhatsApp, Shopify, etc.", icon: "🔗" },
    ];

    const SIMPLE_PRESET = ["responsive", "seo", "domain", "contact"];

    let projectType: ProjectType = "simple";
    let selected = new Set<string>(SIMPLE_PRESET);
    let otherDescription = "";

    function selectType(type: ProjectType) {
        projectType = type;
        if (type === "simple") {
            selected = new Set(SIMPLE_PRESET);
        } else if (type === "other") {
            selected = new Set();
        }
        // "custom" keeps whatever was already selected
    }

    function toggle(id: string) {
        if (projectType === "simple") return; // lock in simple mode
        if (selected.has(id)) {
            selected.delete(id);
        } else {
            selected.add(id);
        }
        selected = new Set(selected);
    }

    $: count = selected.size;

    $: complexity =
        count <= 2 ? { label: "Pequeño", color: "text-fields-400", bar: 1 } :
        count <= 4 ? { label: "Simple", color: "text-fields-400", bar: 2 } :
        count <= 6 ? { label: "Mediano", color: "text-fields-accent", bar: 3 } :
        count <= 9 ? { label: "Complejo", color: "text-fields-orange", bar: 4 } :
                     { label: "Grande", color: "text-red-400", bar: 5 };
</script>

<section id="precios" class="py-24 bg-fields-50">
    <div class="container mx-auto px-4 max-w-5xl">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-fields-700 sm:text-4xl mb-3">
                ¿Qué necesita tu proyecto?
            </h2>
            <p class="text-lg text-fields-500">
                Elige lo que quieres. Nosotros te damos un presupuesto.
            </p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-fields-200/60">
            <div class="grid md:grid-cols-[1fr_280px]">

                <!-- Feature Picker -->
                <div class="p-8 md:p-10 space-y-6 border-b md:border-b-0 md:border-r border-fields-100">

                    <!-- Project type tabs -->
                    <div>
                        <p class="text-xs font-bold text-fields-400 uppercase tracking-widest mb-3">Tipo de proyecto</p>
                        <div class="grid grid-cols-3 gap-2">
                            {#each ([
                                { type: "simple", label: "🌐 Sitio Web Simple", desc: "Página informativa básica" },
                                { type: "custom", label: "⚙️ Software a Medida", desc: "Elige las funciones que necesitas" },
                                { type: "other",  label: "💬 Otro", desc: "Cuéntanos tu idea" },
                            ] as const) as opt}
                                <button
                                    on:click={() => selectType(opt.type)}
                                    class="flex flex-col items-center text-center p-3 rounded-xl border-2 transition-all {projectType === opt.type
                                        ? 'border-fields-400 bg-fields-50 text-fields-700'
                                        : 'border-fields-100 bg-white text-fields-500 hover:border-fields-200'}"
                                >
                                    <span class="text-sm font-bold leading-tight">{opt.label}</span>
                                    <span class="text-xs mt-1 leading-tight opacity-70">{opt.desc}</span>
                                </button>
                            {/each}
                        </div>
                    </div>

                    {#if projectType === "simple"}
                        <!-- Simple web preset info -->
                        <div class="bg-fields-50 border-2 border-fields-200 rounded-xl p-5 space-y-3">
                            <p class="text-xs font-bold text-fields-500 uppercase tracking-widest">Incluye</p>
                            <div class="grid sm:grid-cols-2 gap-2">
                                {#each features.filter(f => SIMPLE_PRESET.includes(f.id)) as feature}
                                    <div class="flex items-center gap-2 bg-white border border-fields-200 rounded-lg px-3 py-2">
                                        <span>{feature.icon}</span>
                                        <span class="text-sm font-semibold text-fields-700">{feature.label}</span>
                                        <span class="ml-auto w-4 h-4 rounded-full bg-fields-400 flex items-center justify-center flex-shrink-0">
                                            <svg class="w-2.5 h-2.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                {/each}
                            </div>
                            <p class="text-xs text-fields-400 italic">Perfecto para landing pages y sitios informativos.</p>
                        </div>

                    {:else if projectType === "custom"}
                        <!-- Custom feature grid -->
                        <div>
                            <p class="text-xs font-bold text-fields-400 uppercase tracking-widest mb-3">Elige las funciones</p>
                            <div class="grid sm:grid-cols-2 gap-3">
                                {#each features as feature}
                                    <button
                                        on:click={() => toggle(feature.id)}
                                        class="flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all {selected.has(feature.id)
                                            ? 'border-fields-400 bg-fields-50'
                                            : 'border-fields-100 bg-white hover:border-fields-200'}"
                                    >
                                        <span class="text-xl flex-shrink-0 mt-0.5">{feature.icon}</span>
                                        <div class="min-w-0">
                                            <div class="flex items-center gap-2">
                                                <span class="text-sm font-bold text-fields-700">{feature.label}</span>
                                                {#if selected.has(feature.id)}
                                                    <span class="w-4 h-4 rounded-full bg-fields-400 flex items-center justify-center flex-shrink-0">
                                                        <svg class="w-2.5 h-2.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                {/if}
                                            </div>
                                            <p class="text-xs text-fields-500 mt-0.5 leading-snug">{feature.description}</p>
                                        </div>
                                    </button>
                                {/each}
                            </div>
                        </div>

                    {:else}
                        <!-- Other: free text -->
                        <div>
                            <p class="text-xs font-bold text-fields-400 uppercase tracking-widest mb-3">Cuéntanos tu idea</p>
                            <textarea
                                bind:value={otherDescription}
                                placeholder="Ej: Necesito un sistema para manejar mis empleados y sus horarios..."
                                rows="6"
                                class="w-full rounded-xl border-2 border-fields-200 bg-fields-50 p-4 text-sm text-fields-700 placeholder-fields-300 focus:border-fields-400 focus:outline-none resize-none transition-colors"
                            ></textarea>
                            <p class="text-xs text-fields-400 mt-2">No te preocupes por los detalles técnicos. Solo dinos qué necesitas.</p>
                        </div>
                    {/if}
                </div>

                <!-- Summary Panel -->
                <div class="p-8 md:p-10 flex flex-col justify-between bg-fields-700">
                    <div>
                        <p class="text-xs font-bold text-fields-300 uppercase tracking-widest mb-6">Tu proyecto</p>

                        {#if projectType === "other"}
                            <!-- Other mode summary -->
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">💬</div>
                                <p class="text-white font-bold text-lg">Proyecto personalizado</p>
                                <p class="text-fields-300 text-sm mt-2 leading-relaxed">
                                    {otherDescription.trim().length > 0
                                        ? "Tu descripción está lista. Mándanos tu consulta."
                                        : "Cuéntanos tu idea en el campo de la izquierda."}
                                </p>
                            </div>
                        {:else}
                            <!-- Feature count display -->
                            <div class="text-center mb-8">
                                <div class="text-7xl font-black text-white leading-none">{count}</div>
                                <div class="text-fields-300 text-sm font-medium mt-1">
                                    {count === 1 ? "función seleccionada" : "funciones seleccionadas"}
                                </div>
                            </div>

                            <!-- Complexity bar -->
                            <div class="mb-6">
                                <div class="flex justify-between text-xs font-semibold mb-2">
                                    <span class="text-fields-300">Complejidad</span>
                                    <span class={complexity.color}>{complexity.label}</span>
                                </div>
                                <div class="flex gap-1">
                                    {#each [1,2,3,4,5] as step}
                                        <div class="h-2 flex-1 rounded-full transition-all {step <= complexity.bar
                                            ? step <= 2 ? 'bg-fields-400' : step <= 3 ? 'bg-fields-accent' : step <= 4 ? 'bg-fields-orange' : 'bg-red-400'
                                            : 'bg-fields-600'}"></div>
                                    {/each}
                                </div>
                            </div>

                            <!-- Selected features list -->
                            {#if count > 0}
                                <div class="space-y-1.5 mb-6 max-h-48 overflow-y-auto pr-1">
                                    {#each features.filter(f => selected.has(f.id)) as f}
                                        <div class="flex items-center gap-2 text-sm text-fields-200">
                                            <span>{f.icon}</span>
                                            <span>{f.label}</span>
                                        </div>
                                    {/each}
                                </div>
                            {:else}
                                <p class="text-fields-400 text-sm italic mb-6">Selecciona al menos una función.</p>
                            {/if}
                        {/if}
                    </div>

                    <div class="space-y-3">
                        <a
                            href="#contacto"
                            class="block w-full text-center py-4 px-6 bg-fields-accent text-fields-700 font-bold rounded-xl shadow-lg hover:bg-fields-orange hover:text-white transition-all hover:-translate-y-1 active:scale-[0.98]"
                        >
                            Pedir Presupuesto
                        </a>
                        <p class="text-xs text-center text-fields-400">
                            Te respondemos en menos de 24 horas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>