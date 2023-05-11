import { calcMean, calcMedian, calcMode } from "../lib/customFunction";
import classes from "./Table.module.css";

const Table = ({ tableData, tableName }) => {
  return (
    <div className={classes.tableOuter}>
      <div className={classes.tableContainer}>
        <table>
          <thead>
            <tr>
              <th className={classes.TableHeader}>Measure</th>
              {Object.keys(tableData).map((item) => {
                return (
                  <th
                    key={`Class_${item}`}
                    className={classes.TableHeader}
                  >{`Class ${item}`}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={classes.TableHeader}>{`${tableName}  Mean`}</th>
              {Object.keys(tableData).map((item) => {
                return (
                  <td key={`Class_${item}_Mean`} className={classes.tableCell}>
                    {calcMean(tableData[item])}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className={classes.TableHeader}>{`${tableName}  Median`}</th>
              {Object.keys(tableData).map((item) => {
                return (
                  <td
                    key={`Class_${item}_Median`}
                    className={classes.tableCell}
                  >
                    {calcMedian(tableData[item])}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th className={classes.TableHeader}>{`${tableName}  Mode`}</th>
              {Object.keys(tableData).map((item) => {
                return (
                  <td key={`Class_${item}_Mode`} className={classes.tableCell}>
                    {calcMode(tableData[item])}
                  </td>
                );
              })}
            </tr>
          </tbody>

          <tbody></tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>Total</td>
              <td>Total</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
