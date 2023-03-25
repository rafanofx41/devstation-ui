import { api } from "src/boot/axios";
import { ref } from "vue";

const user = ref(null);

export default function useAuth() {
  const logout = async () => {
    localStorage.removeItem("access-token");
  };

  const isAuthenticated = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("access-token"));

      if (token) {
        api.defaults.headers.common["Authorization"] = token;
        const { data } = await api.get("/dev/me");

        if (data?.user) {
          user.value = data.user;
          return true;
        }
        localStorage.clear();
        return false;
      }

      return false;
    } catch (error) {
      localStorage.clear();
      return false;
    }
  };

  const signIn = async (email, password) => {
    const { data } = await api.post("dev/login", {
      email: email,
      password: password,
    });

    const { token } = data;

    api.defaults.headers.common["Authorization"] = token;

    localStorage.setItem("access-token", JSON.stringify(data));
  };

  return {
    logout,
    signIn,
    isAuthenticated,
  };
}
