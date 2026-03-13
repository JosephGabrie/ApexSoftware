<script lang="ts">
    type Feature = {
        id: string;
        label: string;
        description: string;
        icon: string;
    };

    type ProjectType = "simple" | "custom" | "other";

    const features: Feature[] = [
        {
            id: "responsive",
            label: "HIPAA Compliant Data Storage",
            description: "Securely store sensitive patient and student data.",
            icon: "🔒",
        },
        {
            id: "seo",
            label: "Student Information System (SIS)",
            description: "Seamless integration with existing school SIS.",
            icon: "🎓",
        },
        {
            id: "domain",
            label: "Electronic Health Records (EHR)",
            description: "Sync seamlessly with major EHR platforms.",
            icon: "⚕️",
        },
        {
            id: "contact",
            label: "Advanced Analytics Dashboard",
            description: "Data-driven insights for key decision makers.",
            icon: "📊",
        },
        {
            id: "auth",
            label: "Enterprise Grade Security",
            description: "Industry standard encryption and security.",
            icon: "🛡️",
        },
        {
            id: "payments",
            label: "Role-Based Access Control",
            description: "Secure access levels across your organization.",
            icon: "🔑",
        },
        {
            id: "dashboard",
            label: "Automated Workflows",
            description: "Save time with custom business logic automation.",
            icon: "⚙️",
        },
        {
            id: "notifications",
            label: "Cloud Infrastructure Setup",
            description: "Scalable, highly available cloud deployment.",
            icon: "☁️",
        },
        {
            id: "reports",
            label: "Legacy System Modernization",
            description: "Upgrade aging architecture to modern tech.",
            icon: "🔄",
        },
        {
            id: "multiuser",
            label: "Custom API Integrations",
            description: "Connect with third-party enterprise tools.",
            icon: "🔗",
        },
        {
            id: "inventory",
            label: "Accessibility Compliance",
            description: "WCAG & ADA compliant interfaces.",
            icon: "👁️",
        },
        {
            id: "api",
            label: "24/7 Priority Support",
            description: "Dedicated SLA and enterprise support.",
            icon: "🎧",
        },
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
        count <= 2
            ? { label: "Small", color: "text-fields-400", bar: 1 }
            : count <= 4
              ? { label: "Simple", color: "text-fields-400", bar: 2 }
              : count <= 6
                ? { label: "Medium", color: "text-fields-accent", bar: 3 }
                : count <= 9
                  ? { label: "Complex", color: "text-fields-orange", bar: 4 }
                  : { label: "Large", color: "text-red-400", bar: 5 };
</script>

<section id="precios" class="py-24 bg-fields-50">
    <div class="container mx-auto px-4 max-w-5xl">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-fields-700 sm:text-4xl mb-3">
                What does your project need?
            </h2>
            <p class="text-lg text-fields-500">
                Select the capabilities you require. We'll provide a
                comprehensive estimate.
            </p>
        </div>

        <div
            class="bg-white rounded-2xl shadow-xl overflow-hidden border border-fields-200/60"
        >
            <!-- 
            <div class="grid md:grid-cols-[1fr_280px]">
                <div
                    class="p-8 md:p-10 space-y-6 border-b md:border-b-0 md:border-r border-fields-100"
                >
                    <div>
                        <p
                            class="text-xs font-bold text-fields-400 uppercase tracking-widest mb-3"
                        >
                            Project Type
                        </p>
                        <div class="grid grid-cols-3 gap-2">
                            {#each [{ type: "simple", label: "🔄 Software Modernization", desc: "Upgrade existing systems" }, { type: "custom", label: "⚙️ Custom Bespoke Software", desc: "Build tailored solutions" }, { type: "other", label: "💬 Consulting & Advising", desc: "Expert technical guidance" }] as const as opt}
                                <button
                                    on:click={() => selectType(opt.type)}
                                    class="flex flex-col items-center text-center p-3 rounded-xl border-2 transition-all {projectType ===
                                    opt.type
                                        ? 'border-fields-400 bg-fields-50 text-fields-700'
                                        : 'border-fields-100 bg-white text-fields-500 hover:border-fields-200'}"
                                >
                                    <span
                                        class="text-sm font-bold leading-tight"
                                        >{opt.label}</span
                                    >
                                    <span
                                        class="text-xs mt-1 leading-tight opacity-70"
                                        >{opt.desc}</span
                                    >
                                </button>
                            {/each}
                        </div>
                    </div>

                    {#if projectType === "simple"}
                        <div
                            class="bg-fields-50 border-2 border-fields-200 rounded-xl p-5 space-y-3"
                        >
                            <p
                                class="text-xs font-bold text-fields-500 uppercase tracking-widest"
                            >
                                Included Features
                            </p>
                            <div class="grid sm:grid-cols-2 gap-2">
                                {#each features.filter( (f) => SIMPLE_PRESET.includes(f.id), ) as feature}
                                    <div
                                        class="flex items-center gap-2 bg-white border border-fields-200 rounded-lg px-3 py-2"
                                    >
                                        <span>{feature.icon}</span>
                                        <span
                                            class="text-sm font-semibold text-fields-700"
                                            >{feature.label}</span
                                        >
                                        <span
                                            class="ml-auto w-4 h-4 rounded-full bg-fields-400 flex items-center justify-center flex-shrink-0"
                                        >
                                            <svg
                                                class="w-2.5 h-2.5 text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                {/each}
                            </div>
                            <p class="text-xs text-fields-400 italic">
                                Perfect for updating legacy internal tools or
                                patient portals.
                            </p>
                        </div>
                    {:else if projectType === "custom"}
                        <div>
                            <p
                                class="text-xs font-bold text-fields-400 uppercase tracking-widest mb-3"
                            >
                                Choose Capabilities
                            </p>
                            <div class="grid sm:grid-cols-2 gap-3">
                                {#each features as feature}
                                    <button
                                        on:click={() => toggle(feature.id)}
                                        class="flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all {selected.has(
                                            feature.id,
                                        )
                                            ? 'border-fields-400 bg-fields-50'
                                            : 'border-fields-100 bg-white hover:border-fields-200'}"
                                    >
                                        <span
                                            class="text-xl flex-shrink-0 mt-0.5"
                                            >{feature.icon}</span
                                        >
                                        <div class="min-w-0">
                                            <div
                                                class="flex items-center gap-2"
                                            >
                                                <span
                                                    class="text-sm font-bold text-fields-700"
                                                    >{feature.label}</span
                                                >
                                                {#if selected.has(feature.id)}
                                                    <span
                                                        class="w-4 h-4 rounded-full bg-fields-400 flex items-center justify-center flex-shrink-0"
                                                    >
                                                        <svg
                                                            class="w-2.5 h-2.5 text-white"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                {/if}
                                            </div>
                                            <p
                                                class="text-xs text-fields-500 mt-0.5 leading-snug"
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    </button>
                                {/each}
                            </div>
                        </div>
                    {:else}
                        <div>
                            <p
                                class="text-xs font-bold text-fields-400 uppercase tracking-widest mb-3"
                            >
                                Tell us about your needs
                            </p>
                            <textarea
                                bind:value={otherDescription}
                                placeholder="e.g.: We need a strategic review of our current data architecture..."
                                rows="6"
                                class="w-full rounded-xl border-2 border-fields-200 bg-fields-50 p-4 text-sm text-fields-700 placeholder-fields-300 focus:border-fields-400 focus:outline-none resize-none transition-colors"
                            ></textarea>
                            <p class="text-xs text-fields-400 mt-2">
                                Don't worry about the technical details. Just
                                describe your goals.
                            </p>
                        </div>
                    {/if}
                </div>

                <div
                    class="p-8 md:p-10 flex flex-col justify-between bg-fields-700"
                >
                    <div>
                        <p
                            class="text-xs font-bold text-fields-300 uppercase tracking-widest mb-6"
                        >
                            Your Project
                        </p>

                        {#if projectType === "other"}
                            <div class="text-center mb-8">
                                <div class="text-5xl mb-3">💬</div>
                                <p class="text-white font-bold text-lg">
                                    Custom Advisory Project
                                </p>
                                <p
                                    class="text-fields-300 text-sm mt-2 leading-relaxed"
                                >
                                    {otherDescription.trim().length > 0
                                        ? "Your description is ready. Send us your inquiry."
                                        : "Tell us about your needs in the field on the left."}
                                </p>
                            </div>
                        {:else}
                            <div class="text-center mb-8">
                                <div
                                    class="text-7xl font-black text-white leading-none"
                                >
                                    {count}
                                </div>
                                <div
                                    class="text-fields-300 text-sm font-medium mt-1"
                                >
                                    {count === 1
                                        ? "capability selected"
                                        : "capabilities selected"}
                                </div>
                            </div>

                            <div class="mb-6">
                                <div
                                    class="flex justify-between text-xs font-semibold mb-2"
                                >
                                    <span class="text-fields-300"
                                        >Complexity</span
                                    >
                                    <span class={complexity.color}
                                        >{complexity.label}</span
                                    >
                                </div>
                                <div class="flex gap-1">
                                    {#each [1, 2, 3, 4, 5] as step}
                                        <div
                                            class="h-2 flex-1 rounded-full transition-all {step <=
                                            complexity.bar
                                                ? step <= 2
                                                    ? 'bg-fields-400'
                                                    : step <= 3
                                                      ? 'bg-fields-accent'
                                                      : step <= 4
                                                        ? 'bg-fields-orange'
                                                        : 'bg-red-400'
                                                : 'bg-fields-600'}"
                                        ></div>
                                    {/each}
                                </div>
                            </div>

                            {#if count > 0}
                                <div
                                    class="space-y-1.5 mb-6 max-h-48 overflow-y-auto pr-1"
                                >
                                    {#each features.filter( (f) => selected.has(f.id), ) as f}
                                        <div
                                            class="flex items-center gap-2 text-sm text-fields-200"
                                        >
                                            <span>{f.icon}</span>
                                            <span>{f.label}</span>
                                        </div>
                                    {/each}
                                </div>
                            {:else}
                                <p class="text-fields-400 text-sm italic mb-6">
                                    Select at least one capability.
                                </p>
                            {/if}
                        {/if}
                    </div>

                    <div class="space-y-3">
                        <a
                            href="#contact"
                            class="block w-full text-center py-4 px-6 bg-fields-accent text-fields-700 font-bold rounded-xl shadow-lg hover:bg-fields-orange hover:text-white transition-all hover:-translate-y-1 active:scale-[0.98]"
                        >
                            Request Estimate
                        </a>
                        <p class="text-xs text-center text-fields-400">
                            We'll respond within 24 hours.
                        </p>
                    </div>
                </div>
            </div>
            -->

            <!-- Generalized Form -->
            <div class="p-8 md:p-12 flex flex-col items-center">
                <div class="w-full max-w-3xl text-center space-y-6">
                    <p
                        class="text-sm font-bold text-fields-400 uppercase tracking-widest mb-2"
                    >
                        Tell us about your needs
                    </p>
                    <textarea
                        bind:value={otherDescription}
                        placeholder="Describe the problem you are facing or the result you want to achieve..."
                        rows="6"
                        class="w-full rounded-xl border-2 border-fields-200 bg-fields-50 p-4 font-medium text-fields-700 placeholder-fields-400 focus:border-fields-500 focus:outline-none resize-none transition-colors"
                    ></textarea>

                    <a
                        href="#contact"
                        class="inline-block mt-4 py-4 px-10 bg-fields-accent text-fields-700 font-bold rounded-xl shadow-lg hover:bg-fields-orange hover:text-white transition-all hover:-translate-y-1 active:scale-[0.98] text-lg"
                    >
                        Request Estimate
                    </a>
                    <p class="text-xs text-fields-400 mt-4">
                        We'll respond within 24 hours to schedule a
                        consultation.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
