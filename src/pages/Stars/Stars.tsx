import * as React from 'react';
import Button from "../../components/Button/Button";
import {useQuery} from "react-query";

const Stars = () => {
    const {isLoading, data} = useQuery("starsData", () =>
        fetch('https://api.github.com/repos/sidzan/react-typescript-boilerplate')
            .then((res) => res.json())
            .then((json) => json.stargazers_count)
    );

    return (
        <div>
            Stars: {!isLoading && data}
            <Button/>
        </div>
    )
}
export default Stars;
