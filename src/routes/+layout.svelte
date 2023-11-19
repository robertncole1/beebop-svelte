<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { auth } from '../firebase';
	import { browser } from '$app/environment';
	import { authStore } from '../stores/authStore';

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});

			if (
				browser &&
				!$authStore?.currentUser &&
				!$authStore.isLoading &&
				window.location.pathname !== '/'
			) {
				window.location.href = '/';
			}
		});
		return unsubscribe;
	});
</script>

<slot />
