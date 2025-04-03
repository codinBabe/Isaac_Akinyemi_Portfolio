const SectionLayout = ({ children, className }) => {
  return (
    <section className={`w-full lg:w-3/5 mx-auto p-2 ${className}`}>
      {children}
    </section>
  );
};

export default SectionLayout;
