import { ScrollShadow } from "@nextui-org/react";
import Accordians from "./_components/Accordian";
import AutoComplete from "./_components/AutoComplete";
import Avatars from "./_components/Avatar";
import Badges from "./_components/Badge";
import BreadCrumbs from "./_components/BreadCrumbs";
import Buttons from "./_components/Button";
import Calanders from "./_components/Calanders";
import Cards from "./_components/Card";
import Checkboxes from "./_components/Checkboxes";
import Chips from "./_components/Chip";
import Circular from "./_components/Circular";
import Codes from "./_components/Codes";
import DateInputes from "./_components/DateInpute";
import Datepeackers from "./_components/Datepeackers";
import Dividers from "./_components/Dividers";
import DropDowns from "./_components/DropDowns";
import Images from "./_components/Images";
import Inputs from "./_components/Inputs";
import KeyboardCommands from "./_components/KeyboardCommands";
import Links from "./_components/Links";
import Modals from "./_components/Modals";
import Navbars from "./_components/Navbars";
import Paginations from "./_components/Paginations";
import PopOvers from "./_components/PopOvers";
import Progresses from "./_components/Progresses";
import RadioGroups from "./_components/RadioGroups";
import Selects from "./_components/Selects";
import Skeletons from "./_components/Skeletons";
import Snippets from "./_components/Snippets";
import Spinners from "./_components/Spinners";
import Switches from "./_components/Switches";
import Sliders from "./_components/Sliders";

export default function Home() {
  return (
    <div className="min-w-full p-8">
      <ScrollShadow size={500} hideScrollBar offset={100} orientation="horizontal" >
        <div className="space-x-4 my-6">
          <Avatars />
        </div>
        <div className="space-x-4 my-6">
          <AutoComplete />
        </div>
        <div className="space-x-4 my-6">
          <Accordians />
        </div>
        <div className="space-x-4 my-6">
          <Buttons />
        </div>
        <div className="space-x-4 my-6">
          <Badges />
        </div>
        <div className="space-x-4 my-6">
          {/* <BreadCrumbs /> */}
        </div>
        <div className="space-x-4 my-6">
          <Cards />
        </div>
        <div className="space-x-4 my-6">
          <Checkboxes />
        </div>
        <div className="space-x-4 my-6">
          <Chips />
        </div>
        <div className="space-x-4 my-6">
          <Codes />
        </div>
        <div className="space-x-4 my-6">
          <Inputs />
        </div>
        <div className="space-x-4 my-6">
          <DateInputes />
        </div>
        <div className="space-x-4 my-6">
          <Circular />
        </div>
        <div className="space-x-4 my-6">
          <Calanders />
        </div>
        <div className="space-x-4 my-6">
          <Datepeackers />
        </div>
        <div className="space-x-4 my-6">
          <Dividers />
        </div>

        <div className="space-x-4 my-6">
          <DropDowns />
        </div>
        <div className="space-x-4 my-6">
          <Images />
        </div>
        <div className="space-x-4 my-6">
          <KeyboardCommands />
        </div>
        <div className="space-x-4 my-6">
          <Links />
        </div>
        <div className="space-x-4 my-6">
          <Modals />
        </div>
        <div className="space-x-4 my-6">
          <Navbars />
        </div>
        <div className="space-x-4 my-6">
          <Paginations />
        </div>
        <div className="space-x-4 my-6">
          <PopOvers />
        </div>
        <div className="space-x-4 my-6">
          <Progresses />
        </div>
        <div className="space-x-4 my-6">
          <RadioGroups />
        </div>
        <div className="space-x-4 my-6">
          <Selects />
        </div>
        <div className="space-x-4 my-6">
          <Skeletons />
        </div>
        <div className="space-x-4 my-6">
          <Snippets />
        </div>
        <div className="space-x-4 my-6">
          <Spinners />
        </div>
        <div className="space-x-4 my-6">
          <Switches />
        </div>
        <div className="space-x-4 my-6">
          <Sliders />
        </div>
      </ScrollShadow>
    </div>
  );
}
