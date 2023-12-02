import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default function Calendars({ calendars }) {
  return calendars.map((calendar) => (
    <Calendar key={calendar.id}>
      <Title
        as='h3'
        css={(theme) =>
          css`
            color: ${theme.blue};
          `
        }
      >
        {calendar.title}
      </Title>
      <Period>Locales 2024</Period>
      <div className='table'>
        <TH>
          {Object.keys(calendar.table[0]).map((key) => (
            <span key={key}>{key.toLocaleLowerCase()}</span>
          ))}
        </TH>
        <GridCalendar>
          {calendar.table.map((row) =>
            Object.values(row).map((value) => <span key={value}>{value}</span>)
          )}
        </GridCalendar>
      </div>
      {!!(calendar.price && typeof calendar.price[0] === 'string') ? (
        <Price>{calendar.price[0]}</Price>
      ) : (
        calendar.price?.length > 1 && (
          <PriceWrapper>
            {calendar.price.map((price) => (
              <PriceBox key={JSON.stringify(price)}>
                <span>{price.category}</span>
                <span>{price.price}</span>
              </PriceBox>
            ))}
          </PriceWrapper>
        )
      )}
    </Calendar>
  ));
}

const Calendar = styled.div`
  border: 2px solid #000;
  padding: 1rem 1rem 0;
  color: ${({ theme }) => theme.blue};
  position: relative;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.blue};
  margin-bottom: 0.5rem;
  max-width: 75%;
  padding-right: 1rem;
  font-size: 1.4rem;
`;
const Period = styled.h4`
  color: ${({ theme }) => theme.yellow};
  font-size: 1rem;
`;
const Price = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.blue};
  font-weight: bold;
  border-left: 1px solid #000;
  padding: 1.44rem 1rem;

  &::before {
    content: 'Price';
    font-weight: normal;
    margin-right: 0.3rem;
  }
`;
const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #aaa;
  margin: 0 -1rem;
`;
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
      font-size: 0.8rem;
      font-style: italic;
    }
    &:last-of-type {
      font-size: 1.1rem;
      &::before {
        content: 'Price';
        font-weight: normal;
        margin-right: 0.3rem;
      }
    }
  }
`;
const ROWS = '56px 52px 6fr 9fr';
const GridCalendar = styled.div`
  display: grid;
  gap: 0.8rem 0.4rem;
  grid-template-columns: ${ROWS};
  padding: 0.5rem 0;
`;
const TH = styled.div`
  display: grid;
  gap: 0.4rem;
  grid-template-columns: ${ROWS};

  font-size: 0.875rem;
  font-weight: bold;
  font-style: italic;
  text-transform: capitalize;
  border-bottom: 2px solid #aaa;
  margin: 0 -1rem;
  padding: 0 1rem 0.5rem;
`;
