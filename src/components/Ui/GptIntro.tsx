import { IonIcon } from "@ionic/react";
import { sparkles } from "ionicons/icons";
import { useSettings } from "../../store/store";
import classNames from "classnames";

export default function GptIntro() {
  const [selectedModel, setModel] = useSettings((state) => [
    state.settings.selectedModal,
    state.setModal,
  ]);
  const isGptThreeSelected = selectedModel.startsWith("gpt-3");
  return (
    <>
      <div className="modals md:w-1/5 md:min-w-[300px] mx-2 relative flex items-center rounded-md justify-between mt-5 md:mx-auto  bg-gray-200 dark:bg-[#202123] gap-2">
        <button
          title="EvilAI"
          className={classNames(
            "gpt3 uppercase  rounded-md  font-bold p-2 transition  flex-1 flex items-center  dark:text-white justify-center",
            {
              "bg-white dark:bg-dark-primary border-2 dark:border-white border-gray-700":
                isGptThreeSelected,
              "opacity-50": !isGptThreeSelected,
            }
          )}
          type="button"
          onClick={() => setModel("undi95/toppy-m-7b:free")}
        >
          <span
            className={classNames(" mr-2 transition", {
              "text-teal-400": isGptThreeSelected,
            })}
          >
            <i className="fa-solid fa-bolt "></i>
          </span>
          <span className="mr-2">EvilAI (old)</span>
        </button>

        <button
          title="EvilAI - New"
          className={classNames(
            "gpt4 uppercase rounded p-2 transition  dark:text-white flex-1 flex  items-center justify-center",
            {
              "bg-white dark:bg-dark-primary border-2 dark:border-white border-gray-700":
                !isGptThreeSelected,
              "opacity-50": isGptThreeSelected,
            }
          )}
          onClick={() => setModel("undi95/toppy-m-7b:free")}
        >
          <span
            className={classNames("mr-2 transition", {
              "text-teal-400": !isGptThreeSelected,
            })}
          >
            <IonIcon icon={sparkles} />
          </span>
          <span className="mr-2">EvilAI - New</span>
        </button>
      </div>
      <div className=" h-96 flex items-start justify-center">
        <h1 className=" text-4xl font-bold mt-5 text-center text-gray-300">
          EvilAI - 100% Uncensored AI
        </h1>
      </div>
    </>
  );
}
