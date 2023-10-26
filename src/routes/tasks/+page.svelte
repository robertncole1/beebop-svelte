<script>
	import { db } from '../../firebase.js';
	import { setDoc, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let nameInput = '';
	let timeInput = '';
	let completedInput = false;
	let snap;

	onMount(() => {
		onSnapshot(collection(db, 'tasks'), (snapshot) => {
			snap = snapshot.docs;
		});
	});

	const handleClick = async (id) => {
		let confirmation = confirm('Are you sure you want to remove this task?');
		if (confirmation) {
			await deleteDoc(doc(db, 'tasks', id));
		}
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const Id = crypto.randomUUID();
		await setDoc(doc(db, 'tasks', Id), {
			name: nameInput,
			time: timeInput,
			completed: completedInput,
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
		<h1 class="text-xl">Add Your Task's for Alice</h1>
		<p class="text-base">Add or edit your tasks for your child</p>
	</div>
	<form class="w-full max-w-md">
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
				<label class="block md:text-right mb-1 md:mb-0 pr-4" for="task-name">
					Your Child's Tasks
				</label>
			</div>
			<div class="md:w-2/3">
				<input
					class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-300"
					type="text"
					bind:value={nameInput}
					name="name"
					id="name"
					placeholder="Task Name"
				/>
			</div>
		</div>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
				<label class="block md:text-right mb-1 md:mb-0 pr-4" for="time"> Time of Task </label>
			</div>
			<div class="md:w-2/3">
				<input
					class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-300"
					type="time"
					bind:value={timeInput}
					name="time"
					id="time"
					placeholder="Task Time"
				/>
			</div>
		</div>
		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3" />
			<label class="md:w-2/3 block text-gray-500 font-bold">
				<input
					class="mr-2 leading-tight"
					type="checkbox"
					bind:checked={completedInput}
					name="completed"
					id="completed"
				/>
				<span class="text-sm"> Is the Task Completed? </span>
			</label>
		</div>
		<div class="md:flex md:items-center">
			<div class="md:w-1/3" />
			<div class="md:w-2/3">
				<button
					on:click={handleFormSubmit}
					class="block rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
					>Submit</button
				>
			</div>
		</div>
	</form>
	<div class="pb-24">
		<div class="py-8">
			<h1 class="text-xl">Your Tasks</h1>
			<p class="text-base">These are all the tasks you have in the system for Alice</p>
		</div>
		<table class="table-auto">
			<thead>
				<tr>
					<th class="px-4 py-2">Task Name</th>
					<th class="px-4 py-2">Time of Task</th>
					<th class="px-4 py-2">Completed?</th>
				</tr>
			</thead>
			<tbody>
				{#if snap}
					{#each snap as snapshot (snapshot.data().Id)}
						<tr>
							<td class="border px-4 py-4">{snapshot.data().name}</td>
							<td class="border px-4 py-4">{snapshot.data().time}</td>
							<td class="border px-4 py-4">{snapshot.data().completed}</td>
							<td class="border px-4 py-4">
								<a
									href="#"
									class="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
									on:click={() => handleClick(snapshot.data().Id)}>Remove Task</a
								>
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</div>
