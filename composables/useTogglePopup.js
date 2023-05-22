import { useCarStore } from '../stores/CarStore'
export const useTogglePopup = () => {
    const store = useCarStore()
    const togglePopup = () => {
        store.isVisiblePopup = !store.isVisiblePopup;
        store.carID = "";
    }
    const setBtnTxt = (e, id = null) => {
        if (e.target.id === "add") {
            togglePopup();
            store.formBtnTxt = "ADD";
        } else {
            togglePopup();
            store.carID = id;
            store.formBtnTxt = "Save";
        }
    }
    return {
        setBtnTxt,
        togglePopup
    }
}