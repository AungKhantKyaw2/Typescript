import './style.css';
import { formData } from './components/formhandler';
const form = document.querySelector("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form)
        return;
    const datas = formData(form);
    console.log("Form Data: ", datas);
});
