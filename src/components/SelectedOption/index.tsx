import { SelectedOptionText } from "../../utils/constants"
import { Cloud } from "../../utils/types";
import GlobeIcon from "./GlobeIcon";

type SelectedOptionProps = {
    selectedCloud: Cloud
}

const SelectedOption = ({ selectedCloud }: SelectedOptionProps) => {
    return (<>{selectedCloud ? <p>{SelectedOptionText.Selected}
        <GlobeIcon region={selectedCloud?.region} />{selectedCloud?.description}
    </p> : <p>{SelectedOptionText.Unselected}</p>}</>)
}

export default SelectedOption;