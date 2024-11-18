const ContextAuthModal = ({
  isModalOpen,
  setIsModalOpen,
  setIsConsentGiven,
}) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Context-Based Authentication
            </h2>
            
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setIsConsentGiven(false);
                  handleCloseModal();
                }}
                className="text-gray-500 mr-4 hover:text-gray-900 focus:outline-none hover:underline"
              >
                
              </button>
              <button
                onClick={() => {
                  setIsConsentGiven(true);
                  handleCloseModal();
                }}
                
              >
                Yes, enable
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContextAuthModal;
