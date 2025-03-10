"use client";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const ItGettingHot = () => {
  const savesettings = () => {
    return toast.promise(
      new Promise((resolve) => {
        setTimeout(() => resolve("settings saved!"), 1000);
      }),
      {
        loading: "saving ...",
        success: "settings saved!",
        error: "could not save!",
      }
    );
  };
  return (
    <div className="flex flex-col gap-3 h-screen items-center justify-center bg-slate-400">
      <Button onClick={() => toast.success("hello world")}>success</Button>
      <Button onClick={() => toast.error("hello world")}>Error</Button>

      <Button
        onClick={() =>
          toast("Good Job!", {
            icon: "👏",
          })
        }
      >
        Emoji
      </Button>

      <Button
        onClick={() =>
          toast("hello Dark", {
            icon: "🌚",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          })
        }
      >
        Dark
      </Button>
      <Button
        onClick={() =>
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Emilia Gates
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Sure! 8:30pm works great!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
        }
      >
        Custom
      </Button>
      <Button onClick={() => savesettings()}>Promise</Button>
    </div>
  );
};

export default ItGettingHot;
