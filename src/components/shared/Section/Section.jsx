import Box from 'components/shared/Box';
import Title from 'components/shared/Title/Title.styled';
import { PropTypes } from 'prop-types';
import theme from 'theme';

const Section = ({ title, children }) => {
  return (
    <Box
      variant="section"
      as="section"
      backgroundColor="secondary"
      ml="auto"
      mr="auto"
      pl={[4]}
      pr={[4]}
      borderRadius={theme.radii.high}
      boxShadow={theme.shadow.high}
      mt={[6]}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;
