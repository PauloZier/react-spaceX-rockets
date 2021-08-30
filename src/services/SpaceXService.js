import axios from "axios";

class SpaceXService {

    rocketsURL = 'https://api.spacexdata.com/v4/rockets';

    getRockets = async () => {

        const { data } = await axios.get(this.rocketsURL);

        return data;
    };

    getRocket = async (id) => {

        const { data } = await axios.get(`${this.rocketsURL}/${id}`);

        return data;
    };
}

export default new SpaceXService();