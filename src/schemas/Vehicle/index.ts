import * as yup from "yup"

export const storeVehicle = yup.object().shape({
    advertisement_type: yup.string(),
    title: yup.string().required("You need to provide a title")
})