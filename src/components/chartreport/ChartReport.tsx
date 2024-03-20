"use client";
import FilledChart from "./filledchart/FilledChart"
import styles from "./chartreport.module.css"

const ChartReport = () => {
    return (
        <div className={styles.container}>
            <FilledChart></FilledChart>
        </div>
    );
}

export default ChartReport;