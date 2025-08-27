export const formData = (form) => {
    const inputs = form.querySelectorAll("input");
    const values = {};
    inputs.forEach((input) => {
        const key = input.name || input.id;
        values[key] = input.value;
    });
    return values;
};
