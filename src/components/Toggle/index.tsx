import styles from "./Toggle.module.scss"

const Toggle = () => {
    // const [checked, setChecked] = useState(false);
    

    // const toggleSwitch = () => {
    //     setChecked(!checked);
    // };
    return (

        // <div className={styles.toggleDivOn} onClick={toggleSwitch}>
        //         <div  className={styles.toggle}></div>
        //     </div>

        <div className={styles.container_switch}>
            <label className={styles.switch}>
                <input type="checkbox"  />
                <span className={styles.slider}></span>
            </label>
        </div>

    );
};

export default Toggle;
