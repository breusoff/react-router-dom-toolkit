import {useParams} from "react-router-dom";

const useParameter = () => {
    const {parameter} = useParams<{parameter: string}>();
    return parameter;
};

export default useParameter;
