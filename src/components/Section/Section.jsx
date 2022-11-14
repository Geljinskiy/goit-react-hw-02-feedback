import styled from 'styled-components';

const Section = ({ title, size, children }) => {
  const Heading = styled['h' + size]`
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 26px;
  `;
  return (
    <>
      <Heading>{title}</Heading>
      {children}
    </>
  );
};

export default Section;
