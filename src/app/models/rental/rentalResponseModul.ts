import { Brand } from "../brand/brand";
import { ResponseModel } from "../responseModel";

export interface RentalResponseModel extends ResponseModel{
    data:Brand[]
}
