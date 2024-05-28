import styles from "./Toggle.module.scss"

interface ToggleProps {
    isChecked: boolean,
    onClick: () => void,
}


const Toggle = ({isChecked, onClick}: ToggleProps) => {
    return (
        <div className={styles.container_switch}>
            <label className={styles.switch}>
                <input 
                type="checkbox"  
                readOnly
                checked={isChecked}
                onClick={onClick}
                />
                <span className={styles.slider}></span>
            </label>
        </div>

    );
};

export default Toggle;