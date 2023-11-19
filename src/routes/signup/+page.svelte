<script lang="ts">
	import Auth from '../../components/Auth.svelte';
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

<div class="signup-container p-12 flex justify-center">
	<div class="about-container p-10 rounded-lg w-2/4">
		<h1 class="text-xl">About Us</h1>
		<p class="text-base">
			Beebop started as a conversation between my mother, who is a full-time nanny and my sister who
			is expecting her second child. They both stress the importance of the parent/caregiver
			relationship and how that can shape the development of the child. Beebop takes that
			relationship very seriously. We are a scheduling app designed to keep your baby on track no
			matter who is taking care of them. We got you covered.
		</p>
		<p>
			Family is at the heart of everything we do and we take child development very seriously. So,
			beebop allows you to see how your child is being cared for on a daily basis. As a parent, you
			can create tasks and activites for your child and caregiver to do together! As a caregiver,
			you can stay on task and keep track of everything you have acomplished today. We know how
			challenging child care can be. Beebop is here to help!
		</p>
		<img
			src="https://firebasestorage.googleapis.com/v0/b/beebop-64a63.appspot.com/o/Screenshot%202023-11-19%20at%204.10.52%E2%80%AFPM.png?alt=media&token=975f0d32-2efb-422c-baf1-6b0f55b6e2c9"
			alt="baby pictures"
		/>
	</div>
	<div class="px-12 w-2/4">
		{#if $authStore.currentUser}
			<h1 class="text-xl">Welcome back {email}!</h1>
			<a
				href="/children"
				class="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
				>Your Children</a
			>
			<button on:click={authHandlers.logout}>Logout</button>
		{:else}
			<h1 class="text-xl">Let's Get Started!</h1>
			<p class="text-base">Add your infomration to start using your account.</p>
			<Auth />
		{/if}
	</div>
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

	.about-container {
		background-color: #f4f1e1;
	}
</style>
