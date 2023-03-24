import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import HoneycomPVCFills1 from "../../assets/Img/Honeycom PVC Fills..webp";
import PVCSplashbar from "../../assets/Img/PVC Splash bar (V-Bar).webp";
import PVCDriftElement from "../../assets/Img/PVC Drift Element.jpg";
import PVCSprayNozel from "../../assets/Img/PVC Spray Nozel.webp";
import SSGrids from "../../assets/Img/SS Grids.png";
import FlowControlValves from "../../assets/Img/Flow Control Valves.webp";
import GearMatehSets from "../../assets/Img/Gear Match Sets.jpg";
import DriveShaftCoupling from "../../assets/Img/Drive Shaft & Coupling.webp";
import HeaderPips from "../../assets/Img/Header Pipe.png";
import FRPFanBladel from "../../assets/Img/FRP Fan Blade.webp";
import RubberBush from "../../assets/Img/Rubber Bush.jpg";
import SSHubSS304ss316 from "../../assets/Img/MSHDG HuB.webp";
import MSHDGHuB from "../../assets/Img/MSHDG HuB.webp";

function PartsMiddeComp() {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol sm={12} md={4} lg={4}>
            <MDBTabs pills className="flex-column text-center">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab1")}
                  active={verticalActive === "tab1"}
                >
                  Honeycom PVC Fills
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab2")}
                  active={verticalActive === "tab2"}
                >
                  PVC Splash bar (V-Bar)
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab3")}
                  active={verticalActive === "tab3"}
                >
                  PVC Drift Element
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab4")}
                  active={verticalActive === "tab4"}
                >
                  PVC Spray Nozzle
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab5")}
                  active={verticalActive === "tab5"}
                >
                  SS Grids
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab6")}
                  active={verticalActive === "tab6"}
                >
                  Flow Control Valves{" "}
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab7")}
                  active={verticalActive === "tab7"}
                >
                  Gear Match Sets
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab8")}
                  active={verticalActive === "tab8"}
                >
                  Drive Shaft & Coupling{" "}
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab9")}
                  active={verticalActive === "tab9"}
                >
                  Header pipe
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab10")}
                  active={verticalActive === "tab10"}
                >
                  MSHDG HuB
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab11")}
                  active={verticalActive === "tab11"}
                >
                  SSHub SS304 / ss316 Hub
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab12")}
                  active={verticalActive === "tab12"}
                >
                  Rubber Bush
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab13")}
                  active={verticalActive === "tab13"}
                >
                  FRP Fan Blade
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCol>
          <MDBCol sm={12} md={8} lg={8}>
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === "tab1"}>
                <div id="LetfSidePart">
                  <div>
                    <h1 id="title">Honeycom PVC Fills</h1>
                  </div>
                  <div id="body-parts">
                    <p>
                      A comprehensive range of Honeycomb PVC Fills which are
                      continuously vacuum formed. These are superior in quality
                      in terms of durability, user-friendliness and maintenance.
                      Some essentials features are: These are specially treated
                      to offer maximum contact area for heat exchange. In it,
                      the crossing of air and water streams is in close
                      proximity The proximity creates a diffused turbulence
                      which is conducive to evaporation and efficient heat
                      transfer.
                      <br />
                      <br /> 1) Rigid Poly Vinyl chloride (PVC)
                      <br /> 2) Honey comb design with double edge folded very
                      large contact surface area
                      <br /> 3) Fills Flute height 12mm to 19mm & sheet thick
                      0.2 to 0.25 mm <br />
                      4) Fill Size : 600mm x 300mm x 150mm
                      <br /> 5) Color : Blue, Black, White.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={HoneycomPVCFills1}
                      alt="no-img"
                      className="img-fluid w-100"
                      style={{ filter: "contrast(120%)", height: "350px" }}
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab2"}>
                <div id="LetfSidePart">
                  <div>
                    <p id="title">PVC Splash bar (V-Bar)</p>
                  </div>
                  <div id="body-parts">
                    <p>
                      We Are Manufacture Exporter, Domestic Suppler . PVC V-bar
                      using Wooden Cooling tower, Rcc cooling tower, And FRP
                      cooling tower. PVC V-bar Available in sizes
                      <br /> (a) 28X28mm Length 4Ft to 10 Ft
                      <br /> (b)35X35mm 4Ft to 10 Ft
                      <br /> (c) 65X65mm 1mtr to 10mtr. color- Gray Design -
                      Round And Diamond Thickness- 1mm And 1.3mmProduct
                      DescriptionV-bar splash type cooling tower fill offers you
                      the following benefits:
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={PVCSplashbar}
                      alt="no-img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab3"}>
                <div id="LetfSidePart">
                  <div>
                    <p id="title"> PVC Drift Element</p>
                  </div>
                  <div id="body-parts">
                    <p>
                      Drift Eliminators are droplet separator ribbing elements
                      made of polyvinyl chloride (PVC) thermoformed assembled
                      rigid sheets. The drift eliminators are used in all
                      applications where it is necessary to filter water
                      droplets carried by a flow of air. More specifically, the
                      Drift separators are widely used in water-based Spray
                      Booths, in Cooling towers (to prevent tiny droplets from
                      drifting away due to cooling air flow) and in gas turbines
                      as high performance drift eliminators and droplet
                      eliminators The inertial droplet separator can also be
                      used as Inlet louvers (for Cooling towers, evaporative
                      coolers, and other applications).
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={PVCDriftElement}
                      alt="no-img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab4"}>
                <div id="LetfSidePart">
                  <div>
                    <p id="title"> PVC Spray Nozzle</p>
                  </div>
                  <div id="body-parts">
                    <p>
                      A spray nozzle is a device that facilitates the dispersion
                      of a liquid by the formation of a spray. The production of
                      a spray requires the fragmentation of liquid structures,
                      such as liquid sheets or ligaments, into droplets, often
                      by using kinetic energy to overcome the cost of creating
                      additional surface area. A wide variety of spray nozzles
                      exist, that make use of one or multiple liquid breakup
                      mechanisms, which can be divided into three categories:
                      liquid sheet breakup, jets and capillary waves. Spray
                      nozzles are of great importance for many applications,
                      where the spray nozzle is designed to have the right spray
                      characteristics.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={PVCSprayNozel}
                      alt="no-img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab5"}>
                <div id="LetfSidePart">
                  <div>
                    <p id="title"> SS Grids</p>
                  </div>
                  <div id="body-parts">
                    <p>
                      There are two types of grids or grid lines in RAM Modeler:
                      standard grids and construction grids. Standard grids are
                      the primary reference points for both the engineer and the
                      program in defining the structural model. These grid lines
                      can usually be obtained from the architectural drawings.
                      The engineer may also add grid lines anywhere necessary to
                      assist in creating the model. Grid lines and grid labels
                      will be included in an exported DXF File. Standard grids
                      are always part of a grid system.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={SSGrids}
                      alt="no-img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab6"}>
                <div id="LetfSidePart">
                  <div>
                    <p id="title"> Flow Control Valves</p>
                  </div>
                  <div id="body-parts">
                    <p>
                      The purpose of flow control in a hydraulic system is to
                      regulate speed. All the devices discussed here control the
                      speed of an actuator by regulating the flow rate. Flow
                      rate also determines rate of energy transfer at any given
                      pressure. The two are related in that the actuator force
                      multiplied by the distance through which it moves (stroke)
                      equals the work done on the load. The energy transferred
                      must also equal the work done. Actuator speed determines
                      the rate of energy transfer (i.e., horsepower), and speed
                      is thus a function of flow rate.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={FlowControlValves}
                      alt="no-img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab7"}>
                <div id="LetfSidePart">
                  <div>
                    <p id="title"> Gear Match Sets</p>
                  </div>
                  <div id="body-parts">
                    <p>
                      A gear is a wheel with teeth around its circumference.
                      Gears are usually found in sets of two or more, used to
                      transmit rotation from the axis of one gear to the axis of
                      another. The teeth of a gear one one axis mesh with the
                      teeth of a gear on another, thus creating a relationship
                      between the rotation of the two axes. When one axis is
                      spun, the other will too. Two gears of different sizes
                      will make their two axes spin at different speeds, which
                      you'll learn about, along with different types of gears
                      and places they're used.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={GearMatehSets}
                      alt="no-img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab8"}>
                <div id="LetfSidePart">
                  <div>
                    <p id="title"> Drive Shaft & Coupling</p>
                  </div>
                  <div id="body-parts">
                    <p>
                      Couplings are mechanical elements that connect two drive
                      elements, allowing the motion from one to the other.
                      Shafts are commonly used as drive components. So, a shaft
                      coupling is a mechanical feature that connects two shafts
                      to transfer torque from one end to the other while
                      accepting misalignment. Shaft couplings add mechanical
                      stability, allowing for shaft misalignment tolerability.
                      As a result of this coupling stability, irregular bearing
                      wear, machinery vibration, and other mechanical issues
                      caused by misalignment may be reduced. As a consequence of
                      this coupling stability, irregular bearing wear, machinery
                      vibration, and other mechanical problems caused by
                      misalignment may be reduced.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={DriveShaftCoupling}
                      alt="no-img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab9"}>
                <div id="LetfSidePart">
                  <div>
                    <p id="title"> Header Pips</p>
                  </div>
                  <div id="body-parts">
                    <p>
                      A pipeline header refers to a large pipe that is set up to
                      aggregate flow from smaller pipes (collecting header). On
                      the other hand, it can also distribute flow to many
                      smaller pipes (distributing header). Typically, the design
                      of flow systems with headers is due to a variety of
                      reasons.
                      <br />
                      <br />
                      <b>Production and Distribution:</b> <br /> In the oil and
                      gas industry, headers serve to commingle flow from
                      different wellheads into a single production pipe. As a
                      result, an exploration company can achieve significant
                      savings on pipeline infrastructure. This holds especially
                      true in oil fields where the wells are widely distributed
                      and some distance away from the processing facility. In
                      addition, the headers serve as a means of distributing
                      fluids that mitigate corrosion and hydrate formation to
                      various sections of the piping system.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={HeaderPips}
                      alt="no-img"
                      className="img-fluid w-100"
                      // style={{height: "250px"}}
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab10"}>
                <div id="LetfSidePart">
                  <div>
                    <p id="title"> MSHDG HuB</p>
                  </div>
                  <div id="body-parts">
                    <p>
                      <b>
                        Hub- We have developed high strength MSHDG hub with
                        SS-304 fasteners.
                      </b>{" "}
                      <br /> This design is with no casting & welding and
                      machined in final shape with lesser cut holes to achieve
                      high degree of assembly & balancing. Hub are dynamically
                      balance. Each hubis mark for set no and each block for
                      blade no to make absolutely problem free assembly at site.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={MSHDGHuB}
                      alt="no-img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab11"}>
                <div id="LetfSidePart">
                  <div>
                    <p id="title"> SSHub SS304 ss316 Hub</p>
                  </div>
                  <div id="body-parts">
                    <p>
                      The main difference between 304 vs 316 stainless steel is
                      the composition and corrosion resistance, SS304 doesn't
                      contain molybdenum while SS316 contains 2-3% molybdenum.
                      The addition of molybdenum provides pitting resistance in
                      phosphoric acid, acetic acid and dilute chloride solutions
                      and provides corrosion resistance in sulfurous acid. In
                      addition, AISI 304 has a 18% Cr and 8% Ni and therefore
                      known as 18-8 stainless steel, while AISI 316 has a 16%
                      Chromium and 10% Nickel.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={SSHubSS304ss316}
                      alt="no-img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab12"}>
                <div id="LetfSidePart">
                  <div>
                    <h1 id="title"> Rubber Bush</h1>
                  </div>
                  <div id="body-parts">
                    <p>
                      We offer our clients a wide range of high quality Rubber
                      Bush that is used in various industrial applications to
                      absorb shock load axially, radially and torsionally.
                      Rubber Bushes are fabricated using fine grade rubber
                      moulds. With a specific end goal to guarantee that these
                      Rubber Bushes are in adherence to the global quality
                      gauges, we make utilization of finest quality crude
                      material in our assembling procedure.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={RubberBush}
                      alt="no-img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </MDBTabsPane>{" "}
              <MDBTabsPane show={verticalActive === "tab13"}>
                <div id="LetfSidePart">
                  <div>
                    <h1 id="title"> FRP Fan Blade</h1>
                  </div>
                  <div id="body-parts">
                    <p>
                      FRP fans play a crucial role in keeping the air in
                      industrial environments clean and safe for workers. Here
                      is a look at the main benefits of using FRP fans:
                      <br />
                      <br />
                      <b>Corrosion resistance:</b> FRP fans combine glass fibers
                      and thermoset polymers to produce a higher level of
                      corrosion resistance than present in the individual
                      materials. These fans are comparable to stainless steel
                      fans in terms of resisting chemically corrosive air and
                      perform even better at handling air that is corrosive to
                      certain alloys.
                      <br /> <b>Fire retardance:</b> CFT fans are all
                      constructed with fire retardant resins which greatly
                      reduces the risk of fire.
                      <br />
                      <b>Cost-effectiveness:</b> Compared to stainless steel and
                      exotic metal fans, FRP fans are an effective and
                      affordable alternative. Coupled with the long life of
                      fiberglass, these fans are a worthy long-term investment.
                    </p>
                  </div>
                  <div id="imgParts">
                    <img
                      src={FRPFanBladel}
                      alt="no-img"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default PartsMiddeComp;
