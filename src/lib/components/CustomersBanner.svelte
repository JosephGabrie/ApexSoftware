<script lang="ts">
    const customers = ["Dialysis de Honduras", "Toy and More", "NVDesignsTX"];

    // Create a duplicated list for seamless looping
    const duplicatedCustomers = [...customers, ...customers];
</script>

<section id="clientes" class="overflow-hidden bg-gray-50 py-16 sm:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 class="text-lg font-semibold leading-8 text-gray-600">
            Confían en nosotros las mejores empresas de Latinoamérica
        </h2>
    </div>

    <div class="relative flex overflow-hidden group">
        <div
            class="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap"
        >
            <!-- We double the items so that it seamlessly scrolls to -50% -->
            {#each duplicatedCustomers as customer, i}
                <div class="flex w-64 items-center justify-center mx-8">
                    <div
                        class="flex items-center gap-3 px-6 py-4 rounded-xl bg-white shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-fields-200"
                    >
                        <!-- Simulated Logo shape -->
                        <div
                            class="h-8 w-8 rounded-full bg-fields-100 flex items-center justify-center text-fields-600"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                ></path>
                            </svg>
                        </div>
                        <span
                            class="text-xl font-bold text-gray-800 tracking-tight"
                            >{customer}</span
                        >
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
