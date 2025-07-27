import { useNavigate, useLocation } from 'react-router';

function useCharacterList() {
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleClick = (id: number) => {
    navigate(`/characters/${id}${search}`);
  };

  return {
    handleClick,
  };
}

export default useCharacterList;
