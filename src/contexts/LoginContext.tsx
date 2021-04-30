import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface ContextLoginProviderProps {
    children: ReactNode;
}

interface User {
    login: string;
    following:number; 
    followers:number;
    public_repos:number;
}

interface ContextData {
    login: string | undefined;
    followingAmount:number | undefined; 
    followersAmount:number | undefined;
    publicRepos:number | undefined;
    handleLogin: (user:User) => void;
}

export const Context = createContext({} as ContextData);

export function ContextLoginProvider({children}: ContextLoginProviderProps){
    const [user, setUser] = useState<User|null>(() => {
        const storageUser  = localStorage.getItem('@user:current');
        if(storageUser){
            return JSON.parse(storageUser);
        }

        return null;
    });

    const [login, setLogin] = useState(user?.login);
    const [followingAmount, setFollowingAmount] = useState(user?.following);
    const [followersAmount, setFollowersAmount] = useState(user?.followers);
    const [publicRepos, setPublicRepos] = useState(user?.public_repos);

    useEffect(() => {
        localStorage.setItem(
          '@user:current',
          JSON.stringify(user)
        );
      }, [user]);
    


    function handleLogin(user:User){
        setUser(user);
        setLogin(user.login);
        setFollowersAmount(user.followers);
        setFollowingAmount(user.following);
        setPublicRepos(user.public_repos);
    }

    return(
        <Context.Provider value={{
            login,
            followingAmount,
            followersAmount,
            publicRepos,
            handleLogin,
        }}>
            {children}
        </Context.Provider>
    )
}