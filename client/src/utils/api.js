import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + "385885cb30ce29a9916721adb340315c8c404f16eede89d3613d9b883944221911ddededc0f8b7b00570390ace2cf57ed96d778fc4380ff80fe7d1984b078745f947fdc72556ce2025c7868c998cd76d304d8f4485b6bc486d5e334cbc71b9058e60e99d72c0c059b93392f0e440d443ac99ce63d3c07cbdf86baa4afbdf41fd",
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get(
            "http://localhost:1337"+url,
            params
        );
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};