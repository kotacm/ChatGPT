import { IonIcon } from "@ionic/react";
import classNames from "classnames";
import { sendOutline, send } from "ionicons/icons";
import { useState } from "react";

export default function UserQuery() {
  const [query, setQuery] = useState("");
  return (
    <form className="input shadow-md dark:bg-[#40414f] p-2 border dark:border-none flex items-center   rounded-md">
      <div className="w-11/12">
        <textarea
          name="query"
          className="h-6 px-2  w-full outline-none resize-none dark:bg-transparent dark:text-white"
          placeholder="Send a message"
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
      </div>
      <div className=" w-1/12 text-center">
        <button
          type="submit"
          className={classNames(
            " text-center text-gray-200 transition inline-flex items-center justify-center py-2 px-2 rounded-md",
            { "bg-green-500": query }
          )}
        >
          <IonIcon icon={query ? send : sendOutline} />
        </button>
      </div>
    </form>
  );
}