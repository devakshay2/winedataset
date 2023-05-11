import { useEffect, useState } from "react";
import { alcoholData } from "../lib/data";
import Table from "./Table";
import { gammaCalculator } from "../lib/customFunction";

const TablePage = (props) => {
  const [tableData, setTableData] = useState({});
  const [gammaTableData, setGammaTableData] = useState({});
  useEffect(() => {
    let flavanoids = {},
      gammaObj = {};

    for (let i = 0; i < alcoholData.length; i++) {
      const key = alcoholData[i]["Alcohol"];
      const value = Number(alcoholData[i]["Flavanoids"]);
      const gValue = gammaCalculator(
        alcoholData[i]["Ash"],
        alcoholData[i]["Hue"],
        alcoholData[i]["Magnesium"]
      );

      if (!flavanoids[key]) {
        flavanoids[key] = [];
      }
      flavanoids[key].push(Number(value));

      if (!gammaObj[key]) {
        gammaObj[key] = [];
      }
      gammaObj[key].push(Number(gValue));
    }
    setTableData(flavanoids);
    setGammaTableData(gammaObj);
  }, []);
  return (
    <div>
      <Table tableData={tableData} tableName="Flavanoids" />
      <Table tableData={gammaTableData} tableName="Gamma" />
    </div>
  );
};

export default TablePage;
