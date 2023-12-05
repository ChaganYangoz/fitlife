import { createContext, useContext } from "react";

export const TrainerSessionContext = createContext({
  trainer: {},
  logInTrainer: () => {},
  logOut: () => {},
});

export function useTrainerSession() {
  const { trainer, logInTrainer, logOut } = useContext(TrainerSessionContext);
  return { trainer, logInTrainer, logOut };
}
