<template>
  <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50">Subscribe</button>
  <button class="bg-blue-500 shadow-lg shadow-blue-500/50">Subscribe</button>
  <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50">Subscribe</button>
  <p>
    I’m Derek, an astro-engineer based in Tatooine. I like to build X-Wings at
    <a href="#" class="underline decoration-sky-500 decoration-2">My Company, Inc</a>. Outside of work, I like to
    <a href="#" class="underline decoration-pink-500 decoration-dotted decoration-2">watch pod-racing</a> and have
    <a href="#" class="underline decoration-indigo-500 decoration-wavy decoration-2">light-saber</a>
    fights.
  </p>

  <div class="snap-x flex overscroll-x-contain overflow-x-auto w-80 m-1">
    <div class="snap-center">
      <img
        class="max-w-none"
        src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
    </div>
    <div class="snap-center">
      <img
        class="max-w-none"
        src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
    </div>
    <div class="snap-center">
      <img
        class="max-w-none"
        src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
    </div>
    <div class="snap-center">
      <img
        class="max-w-none"
        src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
    </div>
    <div class="snap-center">
      <img
        class="max-w-none"
        src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
    </div>
    <div class="snap-center">
      <img
        class="max-w-none"
        src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
      />
    </div>
  </div>

  <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="@/assets/logo.png" alt="ChitChat Logo" />
    </div>
    <div class="ml-6 pt-1">
      <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
      <p class="text-base text-gray-600 leading-normal"> You have a new message! </p>
    </div>
  </div>

  <table class="border-separate border border-green-800 ...">
    <thead>
      <tr>
        <th class="border border-green-600 ...">State</th>
        <th class="border border-green-600 ...">City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-green-600 ...">Indiana</td>
        <td class="border border-green-600 ...">Indianapolis</td>
      </tr>
      <tr>
        <td class="border border-green-600 ...">Ohio</td>
        <td class="border border-green-600 ...">Columbus</td>
      </tr>
      <tr>
        <td class="border border-green-600 ...">Michigan</td>
        <td class="border border-green-600 ...">Detroit</td>
      </tr>
    </tbody>
  </table>
</template>
