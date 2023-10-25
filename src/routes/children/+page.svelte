<script>
	import { db } from '../../firebase.js';
	import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
	import { setDoc, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let childInput = '';
	let urlInput = '';
	let ageInput = '';
	let uploadMessage = 'Please click upload button to upload image'
	let snap;
	const storage = getStorage();

	onMount(() => {
		onSnapshot(collection(db, 'children'), (snapshot) => {
			snap = snapshot.docs;
		});
	});

	function handleChange(e) {
		e.target.files[0];
	}

	const handleClick = async (id) => {
		let confirmation = confirm('Are you sure you want to remove this child?');
		if (confirmation) {
			await deleteDoc(doc(db, 'children', id));
		}
	};

	async function uploadImage() {
		// @ts-ignore
		const file = document.getElementById('files')?.files[0];
		const storageRef = ref(storage, `/images/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);
		// Show the upload progress
		uploadTask.on(
			'state_changed',
			function (snapshot) {
				var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				uploadMessage = ('Upload is ' + progress + '% done');
			},
			function (error) {
				console.error(error);
			},
			function () {
				// Get the URL of the uploaded image
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					urlInput = downloadURL;
				});
			}
		);
	}

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const Id = crypto.randomUUID();
		await setDoc(doc(db, 'children', Id), {
			child: childInput,
			imgUrl: urlInput,
			age: ageInput,
			Id
		});
	};
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

<div class="signup-container mx-auto px-16 h-screen">
	<div class="py-8">
		<h1 class="text-xl">Add Your Child</h1>
		<p class="text-base">Add your child's information to start creating new tasks!</p>
	</div>
	<form>
		<label for="child-name" class="block mt-2 text-sm font-medium leading-6 text-gray-900"
			>Your Child's Name</label
		>
		<div class="relative mt-2 rounded-md shadow-sm">
			<input
				type="text"
				bind:value={childInput}
				name="child"
				id="child"
				class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				placeholder="Your Child's Name"
			/>
		</div>
		<label for="child-age" class="block mt-2 text-sm font-medium leading-6 text-gray-900"
			>Your Child's Age</label
		>
		<div class="relative mt-2 rounded-md shadow-sm">
			<input
				type="text"
				bind:value={ageInput}
				name="age"
				id="age"
				class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				placeholder="Your Child's Age"
			/>
		</div>
		<label for="child-img" class="block mt-2 text-sm font-medium leading-6 text-gray-900"
			>Picture of Your Child</label
		>

		<input type="file" id="files" bind:value={urlInput} on:change={handleChange} />
		<button class="rounded-md bg-transparent hover:bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm border-2 border-amber-300 hover:border-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" on:click={uploadImage}>Upload</button>
		<p>{uploadMessage}</p>
		<button
			on:click={handleFormSubmit}
			class="block rounded-md bg-amber-300 mt-6 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			>Submit</button
		>
	</form>
	<div class="pb-24">
		<div class="py-8">
			<h1 class="text-xl">Your Children</h1>
			<p class="text-base">These are all the children you have in the system</p>
		</div>
		<div class="card-container">
			{#if snap}
				{#each snap as snapshot (snapshot.data().Id)}
					<div class="card text-center w-64 border border-gray-200 rounded-lg shadow bg-amber-100">
						<img class="max-w-64 rounded-t-lg" src={snapshot.data().imgUrl} alt="" />
						<div class="p-5">
							<h5 class="mb-2 text-2xl font-bold tracking-tight">
								{snapshot.data().child}
							</h5>
							<h6 class="mb-3 text-lg tracking-tight">
								{snapshot.data().age}
							</h6>
							<a
								href="#"
								class="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
								on:click={() => handleClick(snapshot.data().Id)}>Remove Child</a
							>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style>
	.card-container {
		display: flex;
		flex-flow: row wrap;
	}

	.card {
		margin: 0px 30px;
	}
</style>
