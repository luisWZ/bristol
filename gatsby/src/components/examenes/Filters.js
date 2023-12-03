import React from 'react'
import styled from '@emotion/styled'
import { Select } from 'styles/CssHelpers'

const Filters = ({ tags, activeTag, setActiveTag }) => (
  <>
    <Filter>
      {tags.map(tag => (
        <li key={tag}>
          <Button
            {...{ activeTag }}
            tag={tag.toString()}
            onClick={() => setActiveTag(tag)}
          >
            {tag === 'all' ? 'Todos los exámenes' : tag}
          </Button>
        </li>
      ))}
    </Filter>
    <FilterMobile
      value={activeTag}
      onChange={({ target }) => setActiveTag(target.value)}
    >
      {tags.map(tag => (
        <option key={tag} value={tag}>
          {tag === 'all' ? 'Todos los exámenes' : tag}
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

  @media (${({ theme }) => theme.max880}) {
    display: none;
  }
`
const Button = styled.button`
  background-color: transparent;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  margin: 0 0.4rem;

  color: ${({ activeTag, tag, theme }) =>
    activeTag === tag ? theme.bristolBlue : 'inherit'};

  border: 2px solid
    ${({ activeTag, tag, theme }) =>
      activeTag === tag ? theme.bristolBlue : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.grayLight};
  }
`
const FilterMobile = styled(Select)`
  margin: 2.5rem auto;
  max-width: 25rem;

  @media (${({ theme }) => theme.min880}) {
    display: none;
  }
`
