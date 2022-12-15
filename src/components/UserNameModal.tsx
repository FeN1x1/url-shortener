import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const UserNameModal = ({
  isOpen,
  setIsOpen,
  usernameValue,
  setUsernameValue,
  handleSubmit,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  usernameValue: string;
  setUsernameValue: (usernameValue: string) => void;
  handleSubmit: () => void;
}) => {
  const isUsernameEmpty = usernameValue === "";

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-b from-[#2e026d] to-[#15162c] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="pb-2 text-center text-lg font-medium leading-6 text-purple-400"
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
                      <span className="pt-3 text-center text-lg font-medium leading-6 text-red-400">
                        Name cannot be empty!
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex">
                    <button
                      type="button"
                      className={`${
                        isUsernameEmpty && "cursor-not-allowed"
                      } mx-auto mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-lg font-medium leading-6 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                      onClick={handleSubmit}
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
