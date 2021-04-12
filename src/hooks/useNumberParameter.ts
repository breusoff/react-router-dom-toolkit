import useParameter from "./useParameter";

const useNumberParameter = () => {
    const id = useParameter();
    return +id;
};

export default useNumberParameter;
