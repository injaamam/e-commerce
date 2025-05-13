import React from "react";
import { PaletteIcon } from "lucide-react";
import { THEMES } from "../constants";

function ThemeSelector() {
  const theme = "forest";
  return (
    <div className="dropdown dropdown-end">
      {/* dropdown trigger */}
      <button tabIndex={0} className="btn btn-ghost btn-circle">
        <PaletteIcon className="size-5" />
      </button>
      <div
        tabIndex={0}
        className="dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl w-56 border border-base-content/10"
      >
        {THEMES.map((themeOption) => (
          <button
            key={themeOption.name}
            className={`w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${
              theme === themeOption.name
                ? "bg-primary/10 text-primary"
                : "hover:bg-base-content/5"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
