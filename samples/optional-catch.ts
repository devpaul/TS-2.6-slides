export function optional_catch() {
	try {
		throw new Error();
	}
	catch {
		// Don't care about the error
	}
}
