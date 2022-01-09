import PropTypes from "prop-types";

const Container = ({ children, title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

export default Container;

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
