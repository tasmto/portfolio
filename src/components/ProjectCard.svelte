<script lang="ts">
  let data = {
    title: 'This is a project',
    slug: 'project',
    image:
      'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    logo: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This is a project description',
    duration: '2021-2022',
    category: 'Web Development',
  };
  export let title: string;
  export let slug: string | undefined;
  export let category: string;
  // export let image: string;
  // export let logo: string;
</script>

<a
  class="bg-red relative after:content-[''] after:absolute after:top-0 after:w-full after:h-full after:bg-black/30 after:z-[5] after:hover:bg-black/40 after:transition-all after:rounded-2xl"
  href={slug}
>
  <img src={data.image} alt="" class="h-full object-cover rounded-2xl" />
  <figcaption
    class="absolute h-full w-full top-0 left-0 flex justify-between flex-col p-4 z-10"
  >
    <div class="flex justify-between">
      <img src={data.logo} alt="" class="h-8 w-8 object-cover rounded-2xl" />
      <p class="font-light leading-loose text-gray-100">{category}</p>
    </div>
    <h2 class="text-xl font-medium text-gray-100">{title}</h2>
  </figcaption>
</a>
<div class="message">
  <slot />
</div>
