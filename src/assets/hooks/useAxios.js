/** @format */

import axios from "axios";

export const useAxios = () => {
    const response = ({ url, method = "GET", body, params, headers }) => {
        return axios({
            url: `https://67659527410f849996558ed6.mockapi.io${url}`,
            method,
            data: body,
            params: { ...params },
            headers: { ...headers },
        }).then((res) => res.data);
    };

    return response;
};