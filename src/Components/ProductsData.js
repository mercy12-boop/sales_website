// src/Components/productsData.js
import logbookLoanImg from "../assets/logbook-loan.png";
import insuranceImg from "../assets/insurance.png";
import invoiceImg from "../assets/invoice.png";
import motorImportImg from "../assets/motor-import.png";
import importDutyImg from "../assets/import-duty.png";
import ezuaChapaaImg from "../assets/ezua-chapaa.png";
import cars360Img from "../assets/cars360.png";

const products = [
  {
    id: "logbook-loans",
    name: "Logbook Loans",
    description:
      "Logbook financing unlocks the equity held in our client’s Motor Vehicle assets...",
    image: logbookLoanImg,
  },
  {
    id: "insurance",
    name: "Insurance Premium Financing",
    description:
      "Insurance Premium Financing enables our clients better manage their insurance expense...",
    image: insuranceImg,
  },
  {
    id: "invoice",
    name: "Invoice Factoring",
    description:
      "Invoice Factoring is a financing facility enabling business owners access immediate financing...",
    image: invoiceImg,
  },
  {
    id: "motor-import",
    name: "Motor Import Financing",
    description:
      "This solution unlocks significant cost savings on motor vehicle purchase by leveraging Momentum’s...",
    image: motorImportImg,
  },
  {
    id: "import-duty",
    name: "Import Duty Financing",
    description:
      "Import Duty Financing is a short term financing facility designed to enable clients settle port charges promptly...",
    image: importDutyImg,
  },
  {
    id: "ezua-chapaa",
    name: "Ezua Chapaa",
    description:
      "Ezua Chapaa, in partnership with MasterCard, allows clients access high cash limits on their mobile...",
    image: ezuaChapaaImg,
  },
  {
    id: "cars-360",
    name: "CARS 360",
    description:
      "CARS360’s mission is to take out the guess work from car importation...",
    image: cars360Img,
  },
];

export default products;
