export const reducer = (state, action) => {
    switch(action.type){
        case "ONCHANGEVALUE":
            return state.map((field, index) => {
                if(field.id === action.id){
                    return {...field, value: action.value}
                } else return field
            })
        case "TOGGLEFIELDVALIDATED":
            return state.map((field, index) => {
                if(field.id === action.id){
                    return {...field, validated: true}
                } else return field
            })
        case "VALIDATEFIELDS":
            return state.map((field, index) => {
                    switch(field.id){
                        case 2:
                            if(field.value > 0 && field.value < 1){
                                return {...field, validated: true}
                            } else return {...field, validated: false}
                        case 1:
                        case 3: 
                        case 4:
                        default:
                            if(isNaN(field.value)){
                                return {...field, validated: false}
                            } else return {...field, validated: true}
                    }
            } )
            default:
                return state

    }
}