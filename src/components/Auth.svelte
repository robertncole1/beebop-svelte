<script>
	import { authHandlers, authStore } from '../stores/authStore';

	let register = false;
	let email = '';
	let password = '';
	let confirmPassword = '';

	async function handleSubmit() {
		if (!email || !password || (register && !confirmPassword)) {
			return;
		}

		if (register && password === confirmPassword) {
			try {
				await authHandlers.signup(email, password);
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				await authHandlers.login(email, password);
			} catch (err) {
				console.log(err);
			}
		}
		if ($authStore.currentUser) {
			window.location.href = '/signup';
		}
	}
</script>

<div class="container">
	<h1>{register ? 'Register' : 'Log in'}</h1>
	<form>
		<label>
			<input bind:value={email} type="email" placeholder="Email" />
		</label>
		<label>
			<input bind:value={password} type="password" placeholder="Password" />
		</label>
		{#if register}
			<label>
				<input bind:value={confirmPassword} type="password" placeholder="Confirm Password" />
			</label>
		{/if}
		<button
			class="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			on:click={handleSubmit}>Submit</button
		>
	</form>
	{#if register}
		<button
			class="rounded-md bg-transparent hover:bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm border-2 border-amber-300 hover:border-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			on:click={() => {
				register = false;
			}}
			on:keydown={() => {}}
		> Already have an account? Log in!
		</button>
	{:else}
		<button
			class="rounded-md bg-transparent hover:bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm border-2 border-amber-300 hover:border-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			on:click={() => {
				register = true;
			}}
			on:keydown={() => {}}
		> Don't have an account? Sign Up!
		</button>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
	}

	.container button {
		margin: 1rem;
	}
</style>
