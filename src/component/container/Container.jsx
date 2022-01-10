import PropTypes from "prop-types";

const Container = ({ children, title }) => {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Container;

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
