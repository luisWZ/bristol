import React from 'react'
import styled from '@emotion/styled'
import { Select } from 'styles/CssHelpers'

const Filters = ({
  filters,
  activeView,
  setActiveView,
}) => (
  <>
    <Filter>
      {filters.map(filter => (
        <li key={filter}>
          <Button {...{activeView}} filter={filter.toString()} onClick={() => setActiveView(filter)}>
            {filter === 'all' ? 'Todos los exámenes' : filter.toUpperCase()}
          </Button>
        </li>
      ))}
    </Filter>
    <FilterMobile value={activeView} onChange={event => setActiveView(event.target.value)}>
      {filters.map(filter => (
        <option key={filter} value={filter}>
          {filter === 'all' ? 'Todos los exámenes' : filter.toUpperCase()}
        </option>
      ))}
    </FilterMobile>
  </>
)

export default Filters

// styles =============================================
const Filter = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  font-size: 1.125rem;

  @media (${props => props.theme.max880}) {
    display: none;
  }
`
const Button = styled.button`
  background-color: transparent;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  margin: 0 0.4rem;

  color: ${props => props.activeView === props.filter
    ? props.theme.bristolBlue
    : 'inherit'
  };
  border: 2px solid ${props => props.activeView === props.filter
    ? props.theme.bristolBlue
    : 'transparent'
  };

  &:hover {
    background-color: ${props => props.theme.grayLight};
    /* background-color: hsl(222deg 97% 52% / 10%); */
  }
`
const FilterMobile = styled(Select)`
  margin: 2.5rem auto;
  max-width: 25rem;

  @media (${props => props.theme.min880}) {
    display: none;
  }
`