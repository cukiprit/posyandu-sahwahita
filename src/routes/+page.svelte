<article>
  <div class="bg-image">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 items-center">
        <div>
          <h1 class="text-4xl font-bold text-yellow-300">Selamat Datang Di</h1>
          <h1 class="text-3xl font-bold text-white">
            Posyandu KKN Kelompok 2 Sahwahita
          </h1>
          <a
            class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 mt-5 rounded"
            href="/layanan"
          >
            Cek Layanan
          </a>
        </div>

        <div class="flex justify-center">
          <img
            class="w-80 max-h-full"
            src="img/illustration-baby.svg"
            alt="Ilustrasi Bayi Posyandu"
          />
        </div>
      </div>
    </div>
  </div>
</article>

<article class="bg-yellow-300">
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full sm:w-1/2 md:w-1/3 px-4">
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-2">Total Mothers</h3>
          <p class="text-gray-600">100</p>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 px-4">
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-2">Total Pregnancies</h3>
          <p class="text-gray-600">200</p>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 px-4">
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-2">Total Babies</h3>
          <p class="text-gray-600">300</p>
        </div>
      </div>
    </div>
  </div>
</article>

<style>
  .bg-image {
    position: relative;
  }

  .bg-image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("img/madiun 2.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(3px);
  }

  .container {
    position: relative;
    z-index: 1;
  }
</style>
