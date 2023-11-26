<script lang="ts">
	import {
		collection,
		onSnapshot,
		deleteDoc,
		doc,
		query,
		where,
		setDoc,
		getDoc
	} from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { auth, db } from '../../../firebase';

	const childId = $page.params.childId;
	const user = auth.currentUser;

	let nameInput = '';
	let timeInput = '';
	let completedInput = false;
	let snap;
	let childName;
	let uid = user?.uid;

	export function getChildTasks(uid: string) {
		const childTaskCollection = query(
			collection(db, `children/${childId}/tasks`),
			where('uid', '==', uid)
		);
		onSnapshot(childTaskCollection, (snapshot) => {
			snap = snapshot.docs;
		});
	}

	export async function getCurrentChild(childId) {
		const docRef = doc(db, 'children', childId);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			childName = docSnap.data().child;
		} else {
			console.log('No such document!');
		}
	}

	onMount(() => {
		getChildTasks(uid);
		getCurrentChild(childId);
	});

	const handleClick = async (id) => {
		let confirmation = confirm('Completing the task will remove it from the list. Are you sure?');
		const docRef = doc(db, 'children', childId);
		const colRef = doc(docRef, 'tasks', id);
		if (confirmation) {
			await deleteDoc(colRef);
		}
	};

	const handleFormSubmit = async (/** @type {{ preventDefault: () => void; }} */ e) => {
		e.preventDefault();
		const Id = crypto.randomUUID();
		const docRef = doc(db, `children`, childId);
		const colRef = doc(docRef, 'tasks', Id);
		setDoc(colRef, {
			name: nameInput,
			time: timeInput,
			uid: uid,
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
		<div class="flex px-3">
			<a href="/children" class="font-semibold">Your Children</a>
		</div>
		<div class="flex px-3">
			<a href="/signup" class="font-semibold">Account</a>
		</div>
	</nav>
</header>

<div class="md:flex justify-center h-screen">
	<div class="px-5">
		<div class="py-8">
			<h1 class="text-xl">Add Your Tasks for {childName}</h1>
			<p class="text-base">Add or edit your tasks for your child</p>
		</div>
		<form class="w-full max-w-md">
			<label class="block my-3 pr-4" for="task-name">Your Child's Tasks</label>
			<input
				class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-300"
				type="text"
				bind:value={nameInput}
				name="name"
				id="name"
				placeholder="Task Name"
			/>

			<label class="block my-3 pr-4" for="time">Time of Task</label>
			<input
				class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-300"
				type="time"
				bind:value={timeInput}
				name="time"
				id="time"
				placeholder="Task Time"
			/>
			<button
				on:click={handleFormSubmit}
				class="block rounded-md bg-amber-300 px-3.5 my-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
				>Submit</button
			>
		</form>
	</div>
	<div class="px-5">
		<div class="pb-24">
			<div class="py-8">
				<h1 class="text-xl">Your Tasks for {childName}</h1>
				<p class="text-base">These are all the tasks you have in the system for {childName}</p>
			</div>
			<table class="table-auto text-center">
				<thead>
					<tr>
						<th class="px-2 py-5">Task Name</th>
						<th class="px-2 py-5">Time of Task</th>
						<th class="px-2 py-5">Complete Task?</th>
					</tr>
				</thead>
				<tbody>
					{#if snap}
						{#each snap as snapshot (snapshot.data().Id)}
							<tr>
								<td class="border px-2 py-5">{snapshot.data().name}</td>
								<td class="border px-2 py-5">{snapshot.data().time}</td>
								<td class="border px-2 py-5">
									<a
										href="#"
										class="rounded-md bg-amber-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
										on:click={() => handleClick(snapshot.data().Id)}>Complete</a
									>
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</div>
