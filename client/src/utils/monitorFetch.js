

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

        const simulationStatus = await response.json();
        console.log(simulationStatus)
        return simulationStatus;

    } catch (error) {
        console.log(error);
        return {validRequest: false, reason: "FailedRequest"}
    }
}

export const getSimData = async (simId) => {
    try {

        const response = await fetch(`http://localhost:8000/simulations/`, {
                                    method: "GET",
                                    headers: {
                                        "Content-Type" : "application/json"
                                    },
        })

        const newData = await response.json();
        console.log(newData)
        return {validRequest: true, data: newData};

    } catch (error) {
        console.log(error)

    }
}