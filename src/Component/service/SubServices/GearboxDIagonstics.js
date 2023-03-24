import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import FooterDegin from "../../Footer/FooterDegin";
import Gearboximg from "../../../assets/Img/GEARBOX DIAGNOSTICS AND REPAIR.webp";

function GearboxDIagonstics() {
  return (
    <>
      <div className="head-section">
        <img
          src={Gearboximg}
          className="w-100 img-fluid"
          alt="no-img"
        />
      </div>
      <MDBContainer>
        <div className="content my-4">
          <h1 className="text-center display-6">
            GEARBOX DIAGNOSTICS AND REPAIR
          </h1>

          <article>
            <ul>
              <li>
                <p>
                  Understanding how the process of gearbox repair takes place is
                  instrumental to understanding the turnaround time, costing,
                  and ability to inspect your own product.<br/> <b>1.</b> Initial Inspection
                  This is a general inspection conducted prior to opening up the
                  machine. This process will help evaluate the exterior and
                  general health of the machine.<br/> <b>2.</b> Disassembly The entire
                  machine is disassembled. This includes disassembling all
                  components down to the bearings.<br/> <b>3.</b> Failure Analysis Once all
                  parts are disassembled, they are analyzed. The reason for the
                  failure is determined. This provides useful information to the
                  client and repairperson, helping them to take precautions to
                  avoid similar problems from reoccurring.<br/> <b>4.</b> Costing & Approval
                  During the process of failure analysis, the scope of repair
                  work will be defined. This will allow the service provider to
                  outline the overall cost to be incurred for repair of the
                  components of the gearbox.<br/> <b>5.</b> Repair This process consists of
                  machining the products to bring them back to their original
                  working condition.<br/> <b>6.</b> Assembly All components once repaired
                  are assembled by installation experts using reliable processes
                  and tools. Additionally, tests are conducted at each step of
                  installation.<br/> <b>7.</b> Quality Tests The product undergoes several
                  tests to check its functionality and quality levels. This
                  quality control step provides the equipment owner with
                  assurance. It also guarantees long-lasting operation.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </MDBContainer>

      <FooterDegin />
    </>
  );
}

export default GearboxDIagonstics;
