const CardWrapper = ({ children }: any) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      {children}
    </div>
  );
};

export default CardWrapper;
