import { createContext, useContext, useEffect, useState } from "react";
import { ID } from "react-native-appwrite";
import { account } from "../lib/appwrite";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  //get and persist the seesion

  useEffect(() => {
    const Init = async () => {
      try {
        const currentSession = await account.getSession("current");
        if (currentSession) {
          setSession(currentSession);
          const user = await account.get();
          setCurrentUser(user);
        }
      } catch (error) {
        setCurrentUser(null);
        setSession(null);
      }
    };
    Init();
  }, []);

  const login = async ({ email, password }) => {
    try {
      // delete previous session if exists
      try {
        const responseSession = await account.getSession("current");
        if (responseSession) {
          await account.deleteSession("current");
        }
      } catch (error) {}

      // then create a new emailpassword session
      const session = await account.createEmailPasswordSession(email, password);
      setSession(session);

      //get user and setUser
      const user = await account.get();
      setCurrentUser(user);

      // Toast("Welcome back. You are logged in");
      return { success: true };
    } catch (error) {
      console.log("LOGIN ERROR", error);
      return { success: false, error };
    }
  };

  const logout = async (router) => {
    await account.deleteSession("current");
    setSession(null);
    setCurrentUser(null);
    // Toast("Logged out!");
    router.replace("/login");
  };

  const register = async ({ name, email, password }) => {
    try {
      //create account
      await account.create(ID.unique(), email, password, name);
      //login
      await login({ email, password });
      // Toast("Account created!");

      return { success: true };
    } catch (error) {
      console.log("SIGNUP ERROR", error);
      return { success: false, error: "User already exists" };
    }
  };

  const contextData = {
    currentUser,
    login,
    logout,
    register,
    session,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
