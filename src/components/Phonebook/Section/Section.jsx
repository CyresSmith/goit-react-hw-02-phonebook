import Box from 'components/shared/Box';
import Title from './Title/Title.styled';
import { PropTypes } from 'prop-types';
import theme from 'theme';

const Section = ({ title, children, Icon }) => {
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
      mb={[6]}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" alignItems="center" mb={theme.space[5]}>
        {Icon && <Icon size={30} color={theme.colors.accent} />}
        {title && <Title>{title}</Title>}
      </Box>

      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  // children: PropTypes.object.isRequired,
};

export default Section;
