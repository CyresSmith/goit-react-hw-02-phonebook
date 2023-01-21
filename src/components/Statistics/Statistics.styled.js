import styled from 'styled-components';
import theme from 'theme';

const StatTable = styled.table`
  border: ${theme.borders.none};
  margin-left: auto;
  margin-right: auto;
  background: ${theme.colors.primary};
  border-radius: ${p => {
    return parseInt(p.theme.radii.normal) + 2;
  }}px;
  box-shadow: ${theme.shadow.medium};

  thead th {
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.accent};
    text-align: center;
    border: ${theme.borders.none};
    padding: ${theme.space[3]} ${theme.space[5]};
    background: ${theme.colors.secondary};
  }

  thead tr th:first-of-type {
    border-radius: ${theme.radii.normal} ${theme.radii.none} ${theme.radii.none}
      ${theme.radii.normal};
  }

  thead tr th:last-of-type {
    border-radius: ${theme.radii.none} ${theme.radii.normal}
      ${theme.radii.normal} ${theme.radii.none};
  }

  tbody td {
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeights.light};
    text-align: center;
    border: ${theme.borders.none};
    padding-top: ${theme.space[3]};
    padding-bottom: ${theme.space[3]};
    vertical-align: top;
    width: 150px;
  }

  tbody tr:nth-of-type(even) {
    background: ${theme.colors.background};
  }

  tbody tr td:first-of-type {
    border-radius: ${theme.radii.normal} ${theme.radii.none} ${theme.radii.none}
      ${theme.radii.normal};
  }

  tbody tr td:last-of-type {
    border-radius: ${theme.radii.none} ${theme.radii.normal}
      ${theme.radii.normal} ${theme.radii.none};
  }
`;

export default StatTable;
