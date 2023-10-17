import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function GoBackBtn(props) {
    const navigate = useNavigate();

    const { func } = props;
    if (func) {
        func();
    }

    return <div className='my-5 sm:ms-0 ms-5 hover:text-[var(--accent)]' onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faLongArrowLeft} />
        <button className='mx-2'>
            Go back
        </button>
    </div>
}
