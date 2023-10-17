import { useContext } from "react"
import { CompContext } from "../context/compContext"

const useComp = () => {
    return useContext(CompContext);
}

export default useComp;
