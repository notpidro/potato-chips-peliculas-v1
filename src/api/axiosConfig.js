import axios from "axios";

export default axios.create({
	baseURL: "https://a59b-186-13-38-17.ngrok-free.app",
	headers: { "ngrok-skip-browser-warning": "true" }
});
