<script>
    import db from "../../firebase.js";
    import { addDoc, collection } from "firebase/firestore";
    /**
	 * @type {any}
	 */
    let input;
    const handleSubmit = async (/** @type {{ preventDefault: () => void; }} */ e) => {
      e.preventDefault();
      await addDoc(collection(db, "tasks"), {
        todoText: input,
        Id: crypto.randomUUID(),
      });
    };
  </script>
  
  <main>
    <form on:submit={handleSubmit}>
      <input type="text" bind:value={input} />
      <button type="submit">Submit</button>
    </form>
  </main>
  
  <style>
  </style>