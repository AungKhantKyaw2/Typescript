export const formData=(form:HTMLFormElement)=>{

    const inputs= form.querySelectorAll<HTMLInputElement>("input");
    const values:Record<string,string> = {};

    inputs.forEach((input)=>{
        const key = input.name || input.id;

        values[key] = input.value;
    })

    return values;
};


// 20FE