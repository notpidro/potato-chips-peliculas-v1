import axios from "axios";

export default axios.create({
	baseURL: "https://20cd-186-13-38-17.ngrok-free.app",
	headers: { "ngrok-skip-browser-warning": "true" }
});
