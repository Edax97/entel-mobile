import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { loginAPI, UserAPIType } from "../api/auth-api";
import { deleteLocal, getLocal, setLocal } from "../services/local-storage";
import { moverHours } from "../utilities/date-utils";

const userKey = "user";
const timeKey = "time";

interface AuthStateType {
  user: UserAPIType | null;
  loginLoading: boolean;
  loginError: boolean;
  isLogged: boolean;
  logoutLoading: boolean;
  getUserLoading: boolean;
}
type AuthContextType = AuthStateType & {
  logout: () => any;
  login: (userName: string, password: string) => any;
  getUser: () => any;
};

const AuthContext = createContext<AuthContextType>(null!);
export const useAuthContext = () => useContext(AuthContext);

interface Props {
  children: ReactNode;
}
export default function AuthProvider(props: Props) {
  const [authState, setAuthState] = useState<AuthStateType>({
    user: null,
    loginLoading: false,
    loginError: false,
    isLogged: false,
    logoutLoading: false,
    getUserLoading: false,
  });

  const login = useCallback(async (userName: string, password: string) => {
    setAuthState((s) => ({ ...s, loginLoading: true, loginError: false }));
    try {
      console.log("Start login");
      const user = await loginAPI(userName, password);
      console.log("User", user);
      await setLocal<UserAPIType>(userKey, user);
      await setLocal<Date>(timeKey, new Date());
      setAuthState((s) => ({ ...s, loginLoading: false, isLogged: true }));
    } catch (e) {
      console.log(e);
      await deleteLocal(userKey);
      setAuthState((s) => ({
        ...s,
        user: null,
        loginLoading: false,
        isLogged: false,
        loginError: true,
      }));
    }
  }, []);

  const logout = useCallback(async () => {
    setAuthState((s) => ({ ...s, logoutLoading: true }));
    await deleteLocal(userKey);
    await deleteLocal(timeKey);
    setAuthState((s) => ({
      ...s,
      logoutLoading: false,
      isLogged: false,
      user: null,
    }));
  }, []);

  const getUser = useCallback(async () => {
    setAuthState((s) => ({ ...s, getUserLoading: true }));
    //get Local storage
    const user = await getLocal<UserAPIType>(userKey);
    const lastLogged = await getLocal<string>(timeKey);
    const hasTimedOut = moverHours(new Date(), -24) > new Date(lastLogged || 0);

    if (!user || hasTimedOut) {
      deleteLocal(userKey);
      deleteLocal(timeKey);
      setAuthState((s) => ({
        ...s,
        getUserLoading: false,
        user: null,
        isLogged: false,
      }));
      return;
    }
    setAuthState((s) => ({
      ...s,
      getUserLoading: false,
      user,
      isLogged: true,
    }));
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, getUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
