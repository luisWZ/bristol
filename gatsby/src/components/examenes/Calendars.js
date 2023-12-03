import React from 'react'
import styled from '@emotion/styled'

export default function Calendars({ calendars, metadata, activeTag }) {
  console.log({ calendars })
  return calendars.map(calendar => (
    <Calendar key={calendar.id} activeTag={activeTag} tag={calendar.tag}>
      {!!calendar.titles.length &&
        calendar.titles.map(title => {
          if (Array.isArray(title)) {
            const [str, span] = title
            return (
              <Title as='h3'>
                {str} <span>{span}</span>
              </Title>
            )
          }
          return <Title as='h3'>{title}</Title>
        })}
      <Period>{metadata}</Period>
      <GridCalendar role='table'>
        {Object.keys(calendar.table[0]).map(key => (
          <span className='th' key={key} role='columnheader'>
            {key.toLocaleLowerCase()}
          </span>
        ))}
        {calendar.table.map(row =>
          Object.values(row).map(value => (
            <span key={value} role='cell'>
              {value}
            </span>
          ))
        )}
      </GridCalendar>
      {!!(calendar.prices && typeof calendar.prices[0] === 'string') ? (
        <Price>
          {calendar.prices[0]}{' '}
          {calendar.tag === 'TKT' && <span>* price per module</span>}
        </Price>
      ) : (
        calendar.prices?.length > 1 && (
          <PriceWrapper>
            {calendar.prices.map(price => (
              <PriceBox key={JSON.stringify(price)}>
                <span>{price.category}</span>
                <span>{price.price}</span>
              </PriceBox>
            ))}
          </PriceWrapper>
        )
      )}
    </Calendar>
  ))
}
const Calendar = styled.div`
  --gutter: 2vw;
  --rows: 2fr 6fr 9fr;

  ${({ activeTag, tag }) => {
    if (activeTag !== 'all' && activeTag !== tag) {
      return 'display: none;'
    }
  }}

  max-width: 672px;
  border: 2px solid #000;
  color: ${({ theme }) => theme.blue};
  position: relative;
  padding-top: calc(var(--gutter) * 1.4);

  @media (${({ theme }) => theme.min560}) {
    --gutter: 1rem;
  }

  @media (${({ theme }) => theme.min720}) {
    --rows: 2fr 2fr 4fr 6fr;
  }

  @media (${({ theme }) => theme.min1200}) {
    --rows: 2fr 2fr 5fr 7fr;
  }
`
const Title = styled.h3`
  color: ${({ theme }) => theme.blue};
  margin-left: var(--gutter);
  margin-bottom: 0.3rem;
  line-height: 1.4;
  font-size: 4.8vw;

  span {
    font-size: 3.8vw;
  }

  @media (${({ theme }) => theme.min560}) {
    font-size: 1.4rem;

    span {
      font-size: 1rem;
    }
  }
`
const Period = styled.h4`
  color: ${({ theme }) => theme.yellow};
  margin-left: var(--gutter);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 3.2vw;
  line-height: 1;

  @media (${({ theme }) => theme.min560}) {
    font-size: 1rem;
    line-height: unset;
  }
`
const Price = styled.p`
  color: ${({ theme }) => theme.blue};
  border-left: 1px solid #000;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
  padding: 3.5vw var(--gutter);

  span {
    display: none;
  }

  @media (${({ theme }) => theme.min560}) {
    padding: 1.44rem var(--gutter);
  }

  @media (${({ theme }) => theme.min720}) {
    &::before {
      content: 'Price';
      font-weight: normal;
      margin-right: 0.3rem;
    }

    span {
      display: block;
    }
  }
`
const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #aaa;
`
const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 0;

  &:not(:last-of-type) {
    border-right: 1px solid #aaa;
  }

  span {
    font-weight: bold;

    &:first-of-type {
      font-style: italic;
      font-size: 2.4vw;

      @media (${({ theme }) => theme.min560}) {
        font-size: 0.8rem;
      }
    }

    &:last-of-type {
      font-size: 2.7vw;

      @media (${({ theme }) => theme.min560}) {
        font-size: 1.1rem;
      }

      @media (${({ theme }) => theme.min720}) {
        &::before {
          content: 'Price';
          font-weight: normal;
          margin-right: 0.3rem;
        }
      }
    }
  }
`
const GridCalendar = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: var(--rows);
  padding: 0.5rem var(--gutter);
  row-gap: 0.8rem;

  @media (${({ theme }) => theme.max560}) {
    font-size: 3.2vw;
  }

  @media (${({ theme }) => theme.max720}) {
    span:nth-of-type(4n + 1) {
      display: none;
    }
  }

  .th {
    position: relative;
    border-bottom: 2px solid #aaa;
    text-transform: capitalize;
    font-weight: bold;
    font-style: italic;
    font-size: 3vw;

    @media (${({ theme }) => theme.min560}) {
      font-size: 0.9rem;
    }

    &::before {
      content: '';
      position: absolute;
      height: 2px;
      width: 160%;
      background-color: #aaa;
      bottom: -2px;
      left: -30%;
    }
  }
`
