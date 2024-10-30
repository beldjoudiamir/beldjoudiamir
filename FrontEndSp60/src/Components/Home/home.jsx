
import Slider from "./ComponentsHome/slider";
import Card from "./ComponentsHome/card";
import Section from "./ComponentsHome/section";
import Service from "./ComponentsHome/otherService";
import Icone from "./ComponentsHome/iconeSlider";
import TeamPresentation from "./ComponentsHome/teams";

export default function home() {
  return (
    <>
    <Slider />
    <Card />
    <Section /> 
    <Service />
    {/*<Icone />*/}
    <TeamPresentation />
    </>
    
  );
}
