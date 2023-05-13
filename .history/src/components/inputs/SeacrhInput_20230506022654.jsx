import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const StyledSearchInput = styled.div`
  > input {
    display: inline-block;
    position: relative;
    outline: none;
    cursor: pointer;
    font-size: var(--font-md);
    border-radius: var(--border-size4);
    padding: var(--font-xxxs) var(--font-xxs);
    color: ${(props) => props.theme.primaryText};
    border: 1px solid ${(props) => props.theme.primaryHeading};
    box-shadow: var(--box-shadow-small);
    @media (max-width: 550px) {
    }
    :focus {
      border: 1px solid ${(props) => props.theme.action};
      outline: none;
    }
  }
  > span {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-50%, -25%);
    color: ${(props) => props.theme.textMuted};
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <input type="text" />

    </StyledSearchInput>
  )
}
export default SearchInput