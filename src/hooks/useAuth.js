import { useLocalStorage } from 'hooks/useLocalStorage';

export const useAuth = () => {
    const [user, setUser] = useLocalStorage('user', null);
    return { user };
};
