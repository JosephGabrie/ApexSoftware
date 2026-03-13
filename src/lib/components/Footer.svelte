<script lang="ts">
    const currentYear = new Date().getFullYear();
</script>

<footer class="bg-fields-700 border-t border-fields-600">
    <div class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div
            class="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
            <div class="flex items-center gap-2">
                <div
                    class="grid h-8 w-8 place-items-center rounded bg-fields-accent text-fields-700 font-bold"
                >
                    A
                </div>
                <span class="text-xl font-bold tracking-tight text-white">
                    Apex Software
                </span>
            </div>

            <p class="text-center text-sm leading-5 text-fields-300">
                &copy; {currentYear} Apex Software. All rights reserved.
            </p>

            <div class="flex gap-4 text-sm text-fields-300">
                <a href="#privacy" class="transition hover:text-fields-accent"
                    >Privacy Policy</a
                >
                <a href="#terms" class="transition hover:text-fields-accent"
                    >Terms of Service</a
                >
            </div>
        </div>
    </div>
</footer>
