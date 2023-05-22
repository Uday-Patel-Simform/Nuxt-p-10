import { useCarStore } from '../stores/CarStore'
export default{
    methods: {
        togglePopup() {
            const store = useCarStore()
            store.isVisiblePopup = !store.isVisiblePopup;
            store.carID = "";
        },
        setBtnTxt(e, id = null) {
            const store = useCarStore()
            if (e.target.id === "add") {
                this.togglePopup();
                store.formBtnTxt = "ADD";
            } else {
                this.togglePopup();
                store.carID = id;
                store.formBtnTxt = "Save";
            }
        }
    }
}