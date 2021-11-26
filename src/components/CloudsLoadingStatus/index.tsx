import { CloudsStatusText, Status } from "../../utils/constants";

type CloudsLoadingStatusProps = {
    rawCloudsStatus: string
};

const CloudsLoadingStatus = ({ rawCloudsStatus }: CloudsLoadingStatusProps) => {

    const renderOptions = () => {
        let result;
        if (rawCloudsStatus === Status.Loading) {
            result = <p data-testid='cloud-loading-status'>{CloudsStatusText.Loading}</p>
        } else if (rawCloudsStatus === Status.Failure) {
            result = <p data-testid='cloud-loading-status'>{CloudsStatusText.Failure}</p>
        }
        return result
    }

    return (
        <>{renderOptions()}</>
    )

}

export default CloudsLoadingStatus;