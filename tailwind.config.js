/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				babypic1:
					"url('https://firebasestorage.googleapis.com/v0/b/beebop-64a63.appspot.com/o/babypic1-overlay-black.jpg?alt=media&token=cfd22b81-fa89-403b-ade7-cede3d1bfa86')",
				babypic2: "url('/static/babypic2.jpg')"
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
