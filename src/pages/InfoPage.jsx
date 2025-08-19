import { StartButton } from "../components/features/info/StartButton";
import { ExternalLink } from "../components/ui/ExternalLink";
import { GuideListItem } from "../components/features/info/GuideListItem";
import { Screenshot } from "../components/features/info/Screenshot";
import { Subtext } from "../components/features/info/Subtext";

export const InfoPage = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-base-100 px-10 py-12 flex flex-col gap-6 items-center text-center">
        <h1 className="font-bold text-5xl">
          👋 Welcome To <span className="text-primary">Notebase</span>
        </h1>

        <h2 className="max-w-96">
          Notebase is a fast & minimal <strong>Markdown note editor</strong> on
          the web with local storage and simple note management
        </h2>

        <ExternalLink
          url="https://github.com/jamiewilliamsxyz/notebase"
          text="Notebase GitHub Repo 💻"
        />
      </div>

      <hr />

      <div className="bg-base-300 px-10 py-12 flex flex-col gap-6 items-center text-center">
        <h3 className="font-semibold text-lg">
          📖 Don't know what Markdown is?
        </h3>
        <h4 className="font-medium">👇 Check out these:</h4>
        <ul>
          <li>
            <ExternalLink
              url="https://www.markdownguide.org"
              text="Markdown Guide"
            />
          </li>
          <li>
            <ExternalLink
              url="https://www.markdownguide.org/basic-syntax"
              text="Markdown Syntax"
            />
          </li>
        </ul>
      </div>

      <hr />

      <div className="bg-base-100 px-10 py-12 flex flex-col gap-6">
        <h3 className="font-semibold text-lg text-center">
          🚀 Quick Start Guide
        </h3>

        <h4 className="font-medium text-center">📂 How to use the sidebar</h4>
        <ol className="flex flex-col gap-4 self-center justify-start">
          <GuideListItem
            heading="Use the sidebar topbar to create new notes & hide the sidebar"
            image="{image}"
            alt="Sidebar topbar"
          />
          <GuideListItem
            heading="Once created a note, it will appear in the sidebar"
            image="{image}"
            alt="Note in sidebar"
          />
          <GuideListItem
            heading="You can rename/delete your notes"
            image="{image}"
            alt="Note item rename/delete"
          />
          <GuideListItem
            heading="Use the search input to find your notes easily"
            image="{image}"
            alt="Search input"
          />
        </ol>

        <h4 className="font-medium text-center">✏️ How to use the editor</h4>
        <ol className="flex flex-col gap-4 self-center text-center">
          <GuideListItem
            heading="Once you click on a note in the sidebar, the editor will open"
            image="{image}"
            alt="Markdown editor"
          />

          <li className="flex flex-col items-center gap-2">
            <h5>
              In the editor you can now write your markdown,<br></br>use the
              book icon to change the editor mode to view:
            </h5>
            <Screenshot
              image="{image}"
              alt="Markdown editor with markdown in edit mode"
            />
            <Subtext text="^ Before pressing on the book icon" />
            <Screenshot
              image="{image}"
              alt="Markdown editor with HTML rendered in view mode"
            />
            <Subtext text="^ After pressing on the book icon" />
          </li>

          <GuideListItem
            heading="Remember to save your note by pressing the floppy disk icon"
            image="{image}"
            alt="Save button"
          />
          <GuideListItem
            heading="You can also change the editor theme with the theme toggle:"
            image="{image}"
            alt="Theme toggle"
          />
        </ol>
      </div>

      <hr />

      <div className="bg-base-300 px-10 pt-12 pb-28 flex flex-col gap-6 items-center text-center">
        <h3 className="font-semibold text-lg">⚠️ Tips & Limitations</h3>

        <ol className="flex flex-col gap-4 max-w-[400px] list-disc text-left">
          <li>
            Your notes are <strong>saved</strong> automatically in your
            browser's local storage
          </li>
          <li>
            Notes do <strong>not sync</strong> across devices - they stay on the
            computer or device where you created them
          </li>
          <li>
            Clearing your browser storage (or using incognito mode) will{" "}
            <strong>delete your notes</strong>
          </li>
          <li>
            Best suited for <strong>lightweight note-taking</strong> and simple
            documents, not large projects
          </li>
        </ol>
      </div>

      <StartButton />
    </div>
  );
};
