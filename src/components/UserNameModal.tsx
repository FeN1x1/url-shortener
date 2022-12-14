import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const UserNameModal = ({
  isOpen,
  setIsOpen,
  usernameValue,
  setUsernameValue,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  usernameValue: string;
  setUsernameValue: (usernameValue: string) => void;
}) => {
  const isUsernameEmpty = usernameValue === "";

  const closeModal = () => {
    if (!isUsernameEmpty) {
      setIsOpen(false);
    }
  };

  return (
    <div className="z-[1]">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Change name
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col">
                    <input
                      className="rounded border border-purple-400 bg-white text-black"
                      type="text"
                      value={usernameValue}
                      onChange={(e) => setUsernameValue(e.target.value)}
                    />
                    {isUsernameEmpty && (
                      <span className="text-center text-red-500">
                        Name cannot be empty!
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className={`${
                        isUsernameEmpty && "cursor-not-allowed"
                      } inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default UserNameModal;
