import './style.css';
import { formData } from './components/formhandler';
import { validateForm } from './components/validator';
const form = document.querySelector("form");
const schema = {
    name: { required: true, minLength: 3, maxLength: 5 },
    email: { required: true, type: "email" },
    age: { required: true, type: "number" }
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form)
        return;
    const datas = formData(form);
    const errors = validateForm(datas, schema);
    if (Object.keys(errors).length > 0) {
        console.error("Validation Error : ", errors);
        showErrors(errors);
    }
    else {
        document.querySelectorAll(".error").forEach(errdiv => errdiv.remove());
        console.log("Form Data:", datas);
        alert("Form submitted successfully");
        form.reset();
    }
});
function showErrors(errors) {
    document.querySelectorAll(".error").forEach(errdiv => errdiv.remove());
    for (const field in errors) {
        const input = document.querySelector(`#${field}`);
        if (input) {
            const errEl = document.createElement("div");
            errEl.className = "error";
            errEl.style.color = "red";
            errEl.style.fontSize = "12px";
            errEl.textContent = errors[field];
            input.insertAdjacentElement("afterend", errEl);
        }
    }
}
