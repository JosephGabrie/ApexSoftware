<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import CustomersBanner from "$lib/components/CustomersBanner.svelte";
  import PricingCalculator from "$lib/components/PricingCalculator.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title
    >Apex Software | Enterprise Custom Software for Healthcare & Education</title
  >
  <meta
    name="description"
    content="Elite advising and custom software development agency for healthcare and education institutions."
  />
</svelte:head>

<div
  class="flex min-h-screen flex-col selection:bg-fields-200 selection:text-fields-900 bg-fields-50/30"
>
  <Header />

  <main class="flex-grow">
    <Hero />
    <CustomersBanner />
    <PricingCalculator />

    <!-- Simple Contact Section -->
    <section
      id="contact"
      class="bg-white py-16 sm:py-24 border-t border-gray-50"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to modernize your institution's software?
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Talk to one of our experts to see how we can help you improve your
          daily operations and secure your data.
        </p>
        <div class="mt-10 flex items-center justify-center">
          <a
            href="mailto:hola@apexsoftware.com"
            class="rounded-lg bg-fields-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-fields-500 hover:-translate-y-0.5"
          >
            Talk to us at josephgabriemolina@gmail.com
          </a>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</div>
