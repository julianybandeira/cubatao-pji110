import { createContext, useState } from 'react';

export const PiContext = createContext();

export default function PiContextProvider({ children }) {
  const [instructionManualsList, setInstructionManualsList] = useState([]);
  const [chosenManual, setChosenManual] = useState({});
  const [members, setMembers] = useState([]);
  const [infoProject, setInfoProject] = useState([]);

  const state = {
    instructionManualsList,
    setInstructionManualsList,
    chosenManual,
    setChosenManual,
    members,
    setMembers,
    infoProject,
    setInfoProject,
  };

  return <PiContext.Provider value={state}>{children}</PiContext.Provider>;
}
