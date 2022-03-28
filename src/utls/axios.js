import axios from "axios";
let token = "";
const instance = axios.create({
	// baseURL: "https://sih-docman.herokuapp.com/api",
	baseURL:'http://localhost:5000/api'
});

instance.interceptors.request.use((req) => {
	if (typeof window !== "undefined")
		token = localStorage.getItem(`sih-token`);
	if (token && token !== "undefined" && token !== "") {
		req.headers.authorization = `Bearer ${token}`;
	}

	return req;
});

export default instance;
