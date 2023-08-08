<script>
  let links = [
    { text: "Home", url: "/" },
    { text: "Home", url: "/" },
    { text: "Home", url: "/" },
  ];

  let isOpen = false;

  const toggleNav = () => {
    isOpen = !isOpen;
  };
</script>

<nav class="bg-white text-gray-800 shadow-md">
  <div class="container mx-auto px-4 py-2 flex items-center justify-between">
    <div class="flex items-center">
      <img
        class="w-40 h-auto max-w-full"
        src="img/Logo Web No BG.png"
        alt="Logo KKN Kelompok 2"
      />
    </div>

    <div class="md:flex items-center hidden">
      <a
        href="/"
        class="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-yellow-500 mr-4"
      >
        Home
      </a>

      <a
        href="/layanan"
        class="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-yellow-500 mr-4"
      >
        Layanan
      </a>

      <a
        href="/login"
        class="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-yellow-500 mr-4"
      >
        Login
      </a>
    </div>

    <div class="md:hidden">
      <button
        on:click={toggleNav}
        class="text-gray-800 hover:text-yellow-500 focus:outline-none focus:text-yellow-500"
        aria-label="Toggle menu"
      >
        {#if isOpen}
          <svg
            class="w-12 h-12"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        {:else}
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 5h16a1 1 0 010 2H2a1 1 0 010-2zm0 6h16a1 1 0 010 2H2a1 1 0 010-2zm0 6h16a1 1 0 010 2H2a1 1 0 010-2z"
              clip-rule="evenodd"
            />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  {#if isOpen}
    <div class="w-full">
      <a
        href="/"
        class="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-yellow-500 mr-4"
      >
        Home
      </a>

      <a
        href="/layanan"
        class="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-yellow-500 mr-4"
      >
        Layanan
      </a>

      <a
        href="/login"
        class="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-yellow-500 mr-4"
      >
        Login
      </a>
    </div>
  {/if}
</nav>
