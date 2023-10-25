<script>
	import Auth from '../../components/Auth.svelte';
	import AuthReset from '../../components/AuthReset.svelte';
	import { authHandlers, authStore } from '../../stores/authStore';

	let email = '';
	authStore.subscribe((curr) => {
		email = curr?.currentUser?.email;
	});
</script>

<header class="bg-amber-100 inset-x-0 op-0 z-50">
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<img
					class="h-16 w-auto"
					src="https://firebasestorage.googleapis.com/v0/b/beebop-64a63.appspot.com/o/beebop-icon.png?alt=media&token=3209615a-9849-4922-af8a-58065a833604"
					alt=""
				/>
			</a>
		</div>
	</nav>
</header>
<div class="signup-container text-center mx-auto px-16 h-screen">
	{#if $authStore.currentUser}
		<h1 class="text-xl">Welcome back {email}!</h1>
		<AuthReset />
		<a
			href="/children"
			class="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			>Your Children</a
		>
		<button on:click={authHandlers.logout}>Logout</button>
	{:else}
		<div class="py-8">
			<h1 class="text-xl">Let's Get Started!</h1>
			<p class="text-base">Add your infomration to start using your account.</p>
		</div>
		<Auth />
	{/if}
</div>

<style>
	.signup-container h1 {
		padding: 10px 0px;
	}

	.signup-container p {
		padding: 10px 0px;
	}

	.signup-container button {
		padding: 0px 20px;
	}
</style>
