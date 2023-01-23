import styled from 'styled-components';
import theme from 'theme';

export const ContactsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space[4]};
  width: 100%;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc((100% - (${theme.space[4]} * 3)) / 4);
  font-size: ${theme.fontSizes.m};
  padding: ${theme.space[3]};
  color: ${theme.colors.secondary};
  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.high};
  box-shadow: ${theme.shadow.medium};
`;

export const Name = styled.span`
  font-weight: ${theme.fontWeights.bold};
  margin-left: ${theme.space[3]};
  margin-right: ${theme.space[3]};
`;

export const Phone = styled.span`
  margin-left: ${theme.space[3]};
  margin-right: ${theme.space[3]};
`;

export const DeletBtn = styled.button`
  display: inline-flex;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  padding: ${theme.space[3]};
  color: ${theme.colors.secondary};
  background-color: red;
  cursor: pointer;
  border: ${theme.borders.none};
  border-radius: ${theme.radii.normal};
  box-shadow: ${theme.shadow.medium};
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  :hover:not(:disabled) {
    box-shadow: ${theme.shadow.high};
    scale: 1.05;
  }
`;
