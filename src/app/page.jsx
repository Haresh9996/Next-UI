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
import Inputs from "./_components/Inputs";

export default function Home() {
  return (
    <div className="min-w-full p-8">
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
    </div>
  );
}
