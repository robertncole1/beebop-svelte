<header class="inset-x-0 op-0 z-50">
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<img
					class="h-12 w-auto"
					src="https://firebasestorage.googleapis.com/v0/b/beebop-64a63.appspot.com/o/beebop-icon.png?alt=media&token=3209615a-9849-4922-af8a-58065a833604"
					alt=""
				/>
			</a>
		</div>
		<div class="lg:flex lg:flex-1 lg:justify-end">
			<a
				href="#"
				class="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
				>Login</a
			>
		</div>
	</nav>
</header>

<div class="container bg-amber-100 mx-auto px-16 h-screen">
    <div class="py-8">
        <h1 class="text-xl">Add Your Child</h1>
        <p class="text-base">Add your child's information to start creating new tasks!</p>
    </div>
	<label for="child-name" class="block mt-2 text-sm font-medium leading-6 text-gray-900">Your Child's Name</label>
	<div class="relative mt-2 rounded-md shadow-sm">
		<input
			type="text"
			name="child"
			id="child"
			class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			placeholder="Your Child's Name"
		/>
	</div>
    <label for="child-age" class="block mt-2 text-sm font-medium leading-6 text-gray-900">Your Child's Age</label>
    <div class="relative mt-2 rounded-md shadow-sm">
		<input
			type="text"
			name="age"
			id="age"
			class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			placeholder="Your Child's Age"
		/>
	</div>
	<div class="mt-10 flex bottom-0 items-center justify-center gap-x-6">
		<a
			href="/children"
			class="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			>Submit</a
		>
	</div>
</div>
