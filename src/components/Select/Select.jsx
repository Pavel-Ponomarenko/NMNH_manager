import styles from "./Select.module.css"

export function Select() {
    return (
        <select className={styles.select} name="select">
                <option value="value1">November</option>
                <option value="value2">December</option>
                <option value="value3">January</option>
                <option value="value4">February</option>
                <option value="value4">March</option>
                <option value="value4">April</option>
                <option value="value4">May</option>
                <option value="value4">June</option>
                <option value="value4">July</option>
                <option value="value4">August</option>
                <option value="value4">September</option>
                <option value="value4">October</option>
        </select>
    )
}