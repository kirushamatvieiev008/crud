// export const changeIce = (id, data) => {
//     const options = {
//         method: "PATCH",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json; charset=UTF-8",
//         },
//     };
//     return fetch(`http://localhost:3000/iceCreams/${id}`, options).then(res => res.json());
// }

export const changeIce = async (id, data) => {
    const options = {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    const res = await fetch(`http://localhost:3000/iceCreams/${id}`, options);
    return await res.json();
}