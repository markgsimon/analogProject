

export const postNewSim = async (simSettings) => {

    console.log(simSettings)
    try {

        const response = await fetch("http://localhost:8000/simulations/", {   
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(simSettings)
                })

        const simulationStatus = response.JSON();

        return simulationStatus;

    } catch (error) {
        console.log(error);
        return {validRequest: false, reason: "FailedRequest"}
    }
}

export const getSimData = async (simId) => {
    try {

        const response = await fetch(`https://localhost:60238/simulations/${simId}`)

        const newData = response.JSON();

        return {validRequest: true, data: newData};

    } catch (error) {
        console.log(error)

    }
}