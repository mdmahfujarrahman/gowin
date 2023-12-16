const PageHeader = ({ headerTitle }) => {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <div className="flex items-center">
        <h5 className="font-semibold text-xl m-0 text-white">{headerTitle}</h5>
      </div>
    </div>
  );
};

export default PageHeader;
